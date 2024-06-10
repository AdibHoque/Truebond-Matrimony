import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {useContext, useEffect, useState} from "react";
import Swal from "sweetalert2";
import {useLoaderData, useNavigate} from "react-router-dom";
import {AuthContext} from "../AuthProvider";
import {Button, Typography, Input} from "@material-tailwind/react";
import MySwal from "sweetalert2";
import {FaLock} from "react-icons/fa";

export default function CheckoutForm() {
  const {user} = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();
  const userData = useLoaderData();
  const price = 5;

  useEffect(() => {
    const obj = {price: price};
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setClientSecret(res.clientSecret);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
    const {paymentIntent, error: confirmError} =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        const obj = {
          requesterEmail: user.email,
          biodataId: userData.biodataId,
          name: userData.name,
          contactEmail: userData.contactEmail,
          mobileNumber: userData.mobileNumber,
          status: "pending",
        };
        fetch("http://localhost:5000/contactrequests", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        })
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
        MySwal.fire({
          title: "Transaction Successful!",
          text: `Transaction ID: ${paymentIntent.id} - Wait for an admin to review your request.`,
          icon: "success",
        });
        navigate("/dashboard/mycontactrequest");
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-4">
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Requested Biodata ID
          </Typography>
          <Input
            readOnly
            disabled
            type="email"
            value={userData.biodataId}
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Your Email
          </Typography>
          <Input
            readOnly
            disabled
            type="email"
            value={user.email}
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <h3 className="text-xs font-medium">Amount to be Charged: $5.00</h3>
        {transactionId && (
          <p className="text-green-600 text-xs mb-2">
            Transaction Successful!<br></br>Transaction ID: {transactionId}
          </p>
        )}
        <Button type="submit" disabled={!stripe || !clientSecret} size="lg">
          Pay Now
        </Button>
        <Typography
          variant="small"
          color="gray"
          className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
        >
          <FaLock className="-mt-0.5 h-4 w-4" /> Payments are secure and
          encrypted
        </Typography>
        <p className="text-red-600">{error}</p>
      </form>
    </>
  );
}

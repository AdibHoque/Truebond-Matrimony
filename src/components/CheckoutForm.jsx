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
  const price = 5;
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    fetch(`https://truebond-matrimony.vercel.app/biodatas?email=${user.email}`)
      .then((data) => data.json())
      .then((data) => setIsPremium(data.premium));
  }, [user]);

  if (isPremium) navigate("/upgrade");

  useEffect(() => {
    const obj = {price: price};
    fetch("https://truebond-matrimony.vercel.app/create-payment-intent", {
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
        setTransactionId(paymentIntent.id);

        fetch(
          `https://truebond-matrimony.vercel.app/biodatas/premium/${user.email}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        fetch("https://truebond-matrimony.vercel.app/revenue", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
        MySwal.fire({
          title: "Transaction Successful!",
          text: `Transaction ID: ${paymentIntent.id} - You're now a premium member!`,
          icon: "success",
        });
        navigate("/upgrade");
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="my-12 flex justify-center flex-col gap-4"
      >
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
        <p className="text-red-600">{error}</p>
        <Button
          color="purple"
          type="submit"
          disabled={!stripe || !clientSecret}
          size="lg"
        >
          Purchase Premium Membership
        </Button>
        <Typography
          variant="small"
          color="gray"
          className="my-2 flex items-center justify-center gap-2 font-medium opacity-60"
        >
          <FaLock className="h-4 w-4" /> Payments are secure and encrypted
        </Typography>
      </form>
    </>
  );
}

import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import SectionTitle from "../components/SectionTitle";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PK);
export default function Checkout() {
  return (
    <div className="flex flex-col justify-center items-center">
      <SectionTitle title="Checkout"></SectionTitle>
      <div className="px-4 w-full max-w-md border-2 rounded-2xl">
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
}

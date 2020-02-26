import React from "react";
import StripeCheckout from "react-stripe-checkout";
const StripeCheckoutButton = ({ price }) => {
  const stripe_price = price * 100;
  const stripe_key = "pk_test_hpTBOriVe0iEtyNa1mvss4AX";
  const onToken = token => {
    console.log(token);
  };
  return (
    <div>
      <StripeCheckout
        label="Pay now"
        name="Saint Gobain Ltd"
        billingAddress
        shippingAddress
        destination={`Your total is $${price}`}
        amount={stripe_price}
        panelLabel="Pay now"
        token={onToken}
        stripeKey={stripe_key}
      ></StripeCheckout>
    </div>
  );
};

export default StripeCheckoutButton;

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

// functional component that will take price as a property
// Stripe wants the price in cents
const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H6tQCDni3GrOoMq7kQRiLw2IQ0ltyPoc33ke2DU106Ru6ukpXACe5lYSyNAk8s5tweNI1yIkY6CzIcLZ3ISYA2q00yUhWSnmH';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton

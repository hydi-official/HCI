import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/pageProps/Breadcrumbs';

const AnimatedText = ({ children }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return <animated.div style={props}>{children}</animated.div>;
};

const Payment = () => {
  const handleSuccessPayment = () => {
    alert('Payment successful! Thank you for your purchase.');
  };

  const handleFailedPayment = () => {
    alert('Payment failed. Please try again later.');
  };

  const initializePaystack = async () => {
    const handler = window.PaystackPop.setup({
      key: 'pk_test_fd7daa1ecb724650b386b5626d1529c8905392d1', // Your Paystack public key
      email: 'customer@example.com', // Update with the user's email
      amount: 1000, // Example amount in kobo (e.g., 1000 kobo = 10 GHS)
      currency: 'GHS', // Use GHS for Ghanaian Cedis
      ref: '' + Math.floor(Math.random() * 1000000000 + 1), // Unique reference for the payment
      callback: (response) => {
        // Handle successful payment
        handleSuccessPayment();
      },
      onClose: () => {
        handleFailedPayment();
      },
    });

    handler.openIframe(); 
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment " />
      <div className="pb-10">
        <AnimatedText>
          <div>
            <h2 className="text-4xl text-[#180948] font-bold mb-4">Make a Payment</h2>
          </div>
        </AnimatedText>

        <div className="mb-4">
          <p>Complete your purchase by clicking the button below.</p>
        </div>

        <button
          onClick={initializePaystack}
          className="bg-[#180948] text-white px-4 py-2 rounded cursor-pointer hover:bg-green-600"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;

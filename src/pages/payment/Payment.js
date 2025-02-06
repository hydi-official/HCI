import React from 'react';
import { useSpring, animated } from 'react-spring';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    toast.success('Payment successful! Thank you for your purchase.');
  };

  const handleFailedPayment = () => {
    toast.error('Payment failed. Please try again later.');
  };

  const initializePaystack = async () => {
    const handler = window.PaystackPop.setup({
      key: 'pk_test_fd7daa1ecb724650b386b5626d1529c8905392d1', // Your Paystack public key
      email: 'customer@example.com', // Update with the user's email
      amount: 1000, // Example amount in kobo (e.g., 1000 kobo = 10 GHS)
      currency: 'GHS', // Use GHS for Ghanaian Cedis
      ref: '' + Math.floor(Math.random() * 1000000000 + 1), // Unique reference for the payment
      callback: (response) => {
        handleSuccessPayment();
      },
      onClose: () => {
        handleFailedPayment();
      },
    });

    handler.openIframe();
  };

  const handlePayOnDelivery = () => {
    console.log('Pay on Delivery button clicked'); // Debugging log
    toast.info('You have selected Pay on Delivery. Please ensure to have the cash ready upon delivery.');
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment" />
      <ToastContainer /> {/* Ensure ToastContainer is included */}
      <div className="pb-10">
        <AnimatedText>
          <div>
            <h2 className="text-4xl text-[#180948] font-bold mb-4">Make a Payment</h2>
          </div>
        </AnimatedText>

        <div className="mb-4">
          <p>Complete your purchase by choosing a payment option below.</p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={initializePaystack}
            className="bg-[#180948] text-white px-4 py-2 rounded cursor-pointer hover:bg-green-600"
          >
            Pay Now
          </button>

          <button
            onClick={handlePayOnDelivery}
            className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-700"
          >
            Pay on Delivery
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;

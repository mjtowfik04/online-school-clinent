import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
    return (
        <div className="p-4 text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h2>
            <p className="mb-4">You can now log in to your account.</p>
            <Link 
                to="login" 
                className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
                Go to Login
            </Link>
        </div>
    );
};

export default PaymentSuccess;

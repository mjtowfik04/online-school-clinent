import { useState } from "react";
import authApiClient from "../../services/auth-api-client";

const EnrollmentSchedule = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await authApiClient.post("/payment/initiate/");

      if (response.data.payment_url) {
        window.location.href = response.data.payment_url;
      } else {
        alert("পেমেন্ট ব্যর্থ হয়েছে: " + (data.failedreason || "অজানা সমস্যা"));
      }
    } catch (error) {
      console.error("Payment initiation failed:", error);
      alert("পেমেন্ট প্রসেসিংয়ে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-violet-50 rounded-2xl p-8 text-center max-w-xl mx-auto mt-12 shadow-md">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-bold text-violet-700 mb-8">
        এনরোলমেন্ট
      </h2>

      {/* Course Fee */}
      <div className="text-xl font-bold text-gray-900 mb-6">
        কোর্স ফি: <span className="text-violet-600">৬৫০০ টাকা</span>
      </div>

      {/* Button */}
      <button
        onClick={handlePayment}
        disabled={loading}
        className={`${
          loading ? "bg-violet-400 cursor-not-allowed" : "bg-violet-600 hover:bg-violet-700"
        } text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300`}
      >
        {loading ? "Processing..." : "BUY"}
      </button>
    </div>
  );
};

export default EnrollmentSchedule;

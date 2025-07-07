import React from 'react'

function Retail() {
  return (
   <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Retail Banking
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Our retail banking services are designed to help individuals and families manage their finances conveniently and securely. Whether you need a savings account, personal loan, or mobile banking — we've got you covered.
        </p>

        <div className="grid gap-8 md:grid-cols-3 text-left">
          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">Savings & Current Accounts</h3>
            <p className="text-gray-600">Secure and flexible accounts tailored to your lifestyle. Enjoy seamless deposits, withdrawals, and transfers.</p>
          </div>

          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">Loans & Credit</h3>
            <p className="text-gray-600">Access personal loans, car loans, and more — with competitive interest rates and flexible repayment plans.</p>
          </div>

          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">Digital & Mobile Banking</h3>
            <p className="text-gray-600">Bank on the go with our secure and user-friendly mobile app. Stay in control of your finances anytime, anywhere.</p>
          </div>
        </div>

        <button className="mt-10 px-6 py-3 border border-pink-500 text-pink-500 rounded-md font-semibold hover:bg-pink-500 hover:text-white transition">
          Learn More
        </button>
      </div>
    </section>
  );
  
}

export default Retail
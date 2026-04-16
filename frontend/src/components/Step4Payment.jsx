import React from 'react';

function Step4Payment({ selectedSlot, ticketCounts, totalAmount, setStep, handleBook }) {
  return (
    <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-12">
      {/* Progress Indicator */}
      <div className="max-w-xl mx-auto mb-16">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-sm">1</span>
            <span className="text-[0.625rem] uppercase tracking-widest text-on-surface-variant font-medium">Date</span>
          </div>
          <div className="h-[2px] flex-grow bg-primary-container mx-4"></div>
          <div className="flex flex-col items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-sm">2</span>
            <span className="text-[0.625rem] uppercase tracking-widest text-on-surface-variant font-medium">Tickets</span>
          </div>
          <div className="h-[2px] flex-grow bg-primary-container mx-4"></div>
          <div className="flex flex-col items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-sm">3</span>
            <span className="text-[0.625rem] uppercase tracking-widest text-on-surface-variant font-medium">Details</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Payment Methods */}
        <div className="lg:col-span-8 space-y-12">
          <section>
            <h1 className="text-4xl font-bold tracking-tighter text-on-surface mb-2">Checkout & Payment</h1>
            <p className="text-on-surface-variant max-w-2xl">Step 4: Choose your preferred payment method. We use enterprise-grade encryption to ensure your transaction is private and safe.</p>
          </section>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.1em] font-bold text-on-surface-variant mb-6 px-1">Select Payment Method</h3>
            
            {/* Payment Method Option 1 */}
            <label className="flex items-center gap-6 p-6 bg-surface-container-low border-2 border-transparent hover:border-outline-variant/30 rounded-xl cursor-pointer transition-all group">
              <input type="radio" name="payment" className="w-5 h-5 accent-primary" defaultChecked />
              <div className="flex-grow flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">credit_card</span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Credit / Debit Card</p>
                    <p className="text-xs text-on-surface-variant">Visa, Mastercard, Amex</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="h-4 w-6 bg-surface-container-highest rounded-sm"></div>
                  <div className="h-4 w-6 bg-surface-container-highest rounded-sm"></div>
                </div>
              </div>
            </label>

            {/* Payment Method Option 2 */}
            <label className="flex items-center gap-6 p-6 bg-surface-container-low border-2 border-transparent hover:border-outline-variant/30 rounded-xl cursor-pointer transition-all">
              <input type="radio" name="payment" className="w-5 h-5 accent-primary" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">account_balance</span>
                </div>
                <div>
                  <p className="font-bold text-on-surface">Net Banking</p>
                  <p className="text-xs text-on-surface-variant">All Indian Major Banks</p>
                </div>
              </div>
            </label>

            {/* Payment Method Option 3 */}
            <label className="flex items-center gap-6 p-6 bg-surface-container-low border-2 border-transparent hover:border-outline-variant/30 rounded-xl cursor-pointer transition-all">
              <input type="radio" name="payment" className="w-5 h-5 accent-primary" />
              <div className="flex-grow flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">qr_code_2</span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">UPI / QR Code</p>
                    <p className="text-xs text-on-surface-variant">Google Pay, PhonePe, Paytm</p>
                  </div>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className="h-4 opacity-40" />
              </div>
            </label>
          </div>

          <div className="p-8 bg-surface-container-low/50 rounded-xl border border-dashed border-outline-variant/30 flex flex-col items-center text-center space-y-4">
             <div className="flex items-center justify-center gap-4 mb-2">
                <img src="https://razorpay.com/assets/razorpay-glyph.svg" alt="Razorpay" className="h-6" />
                <span className="h-4 w-[1px] bg-outline-variant/30"></span>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Powered By Razorpay</span>
             </div>
             <p className="text-sm text-on-surface-variant max-w-md">Clicking 'Pay Now' will open the secure Razorpay overlay where you can complete your transaction.</p>
          </div>
        </div>

        {/* Right Column: Order Review Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-12 bg-surface-container-lowest p-8 shadow-[0px_12px_32px_rgba(44,52,51,0.06)] rounded-xl border border-outline-variant/10 space-y-8">
            <div>
              <h2 className="text-xs uppercase tracking-[0.15em] text-on-surface-variant font-bold mb-6">Order Review</h2>
              <div className="space-y-6">
                <div className="space-y-4 p-5 bg-surface-container-low rounded-lg">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-on-surface-variant">Selected Date</span>
                    <span className="font-bold text-on-surface">{selectedSlot?.date}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-on-surface-variant">Time Slot</span>
                    <span className="font-bold text-on-surface">{selectedSlot?.startTime} - {selectedSlot?.endTime}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-surface-container-high">
                  {Object.entries(ticketCounts).map(([type, count]) => (
                    count > 0 && (
                      <div key={type} className="flex justify-between text-sm">
                        <span className="text-on-surface-variant">{type} x {count}</span>
                        <span className="font-medium text-on-surface">₹{count * (type === 'Adult' ? 80 : type === 'Child' ? 40 : type === 'Safari' ? 100 : 150)}</span>
                      </div>
                    )
                  ))}
                </div>

                <div className="pt-6 border-t font-headline border-primary/10 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-on-surface">Grand Total</span>
                    <span className="text-3xl font-extrabold tracking-tighter text-primary">₹{totalAmount}.00</span>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={handleBook}
              className="w-full py-5 rounded-lg bg-primary text-on-primary font-bold flex items-center justify-center gap-3 group transition-all active:scale-[0.98] shadow-lg shadow-primary/20 hover:bg-primary-dim"
            >
              <span className="material-symbols-outlined text-lg">payment</span>
              Pay Now
            </button>
            
            <p className="text-[10px] text-on-surface-variant text-center leading-relaxed">
              By clicking 'Pay Now', you agree to our <span className="underline">Ticket Terms</span> and <span className="underline">Policy</span>.
            </p>

            <button onClick={() => setStep(3)} className="w-full py-3 text-on-surface-variant font-bold text-xs uppercase hover:text-primary transition-colors">
              Return to Details
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Step4Payment;

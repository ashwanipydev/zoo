import React from 'react';

function Step3Details({ userDetails, handleUserDetailsChange, setStep }) {
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
            <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">3</span>
            <span className="text-[0.625rem] uppercase tracking-widest text-primary font-bold">Details</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Form Content */}
        <div className="lg:col-span-8 space-y-12">
          <section>
            <h1 className="text-4xl font-bold tracking-tighter text-on-surface mb-2">Guest Information</h1>
            <p className="text-on-surface-variant max-w-2xl">Step 3: Tell us who is visiting. These details help us provide a personalized experience and are required for conservation records.</p>
          </section>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.1em] font-bold text-on-surface-variant px-1">Full Name</label>
                <input 
                  type="text" 
                  value={userDetails?.name || ''}
                  onChange={(e) => handleUserDetailsChange('name', e.target.value)}
                  className="w-full bg-surface-container-high p-5 rounded-lg border-b-2 border-transparent focus:border-primary focus:bg-surface-container-highest outline-none transition-all placeholder:text-outline/50 font-medium"
                  placeholder="Enter your full name" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.1em] font-bold text-on-surface-variant px-1">Mobile Number</label>
                <input 
                  type="tel" 
                  value={userDetails?.phone || ''}
                  onChange={(e) => handleUserDetailsChange('phone', e.target.value)}
                  className="w-full bg-surface-container-high p-5 rounded-lg border-b-2 border-transparent focus:border-primary focus:bg-surface-container-highest outline-none transition-all placeholder:text-outline/50 font-medium"
                  placeholder="+91 — ——— —— —" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.1em] font-bold text-on-surface-variant px-1">Email Address</label>
              <input 
                type="email" 
                value={userDetails?.email || ''}
                onChange={(e) => handleUserDetailsChange('email', e.target.value)}
                className="w-full bg-surface-container-high p-5 rounded-lg border-b-2 border-transparent focus:border-primary focus:bg-surface-container-highest outline-none transition-all placeholder:text-outline/50 font-medium"
                placeholder="your@email.com" 
              />
              <p className="text-[0.625rem] text-on-surface-variant mt-2 italic">Your digital passes and receipt will be sent to this address.</p>
            </div>

            {/* Account Note / Callout */}
            <div className="p-8 bg-surface-container-low rounded-xl flex gap-6 items-start border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary text-3xl">account_balance</span>
              <div className="space-y-2">
                <h4 className="font-bold text-on-surface text-lg tracking-tight">Conservation Account</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">If you are a registered sanctuary member, these details must match your membership ID to apply additional discounts during checkout.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar Booking Summary (Reused design for consistency) */}
        <aside className="lg:col-span-4">
          <div className="sticky top-12 bg-surface-container-lowest p-8 shadow-[0px_12px_32px_rgba(44,52,51,0.06)] rounded-xl border border-outline-variant/10 space-y-8">
            <div>
              <h2 className="text-xs uppercase tracking-[0.15em] text-on-surface-variant font-bold mb-6">Current Selection</h2>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-on-surface underline decoration-primary/20 decoration-2 underline-offset-4">General Admission</p>
                    <p className="text-xs text-on-surface-variant">Arboreal Path Access</p>
                  </div>
                  <button onClick={() => setStep(1)} className="text-primary hover:underline text-xs font-bold uppercase transition-colors">Edit</button>
                </div>
                {/* Note: In a real app we'd pass ticket counts here too, or pull from global state */}
                <p className="text-[10px] uppercase font-bold text-tertiary">Reviewing information...</p>
                <div className="pt-6 border-t border-surface-container-high space-y-4">
                  <p className="text-[0.625rem] text-on-surface-variant text-center leading-relaxed">
                    Personal data is processed according to our <span className="underline cursor-pointer">Privacy Charter</span> for sanctuary security.
                  </p>
                </div>
              </div>
            </div>
            <button 
              disabled={!userDetails.name || !userDetails.email || !userDetails.phone}
              onClick={() => setStep(4)}
              className={`w-full py-5 rounded-lg font-bold flex items-center justify-center gap-3 group transition-all active:scale-[0.98]
                         ${(userDetails.name && userDetails.email && userDetails.phone) ? 'bg-primary text-on-primary hover:bg-primary-dim shadow-lg shadow-primary/20' : 'bg-surface-dim/40 text-outline cursor-not-allowed'}`}
            >
              Proceed to Checkout
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
            <button onClick={() => setStep(2)} className="w-full py-3 text-on-surface-variant font-bold text-xs uppercase hover:text-primary transition-colors">
              Return to Tickets
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Step3Details;

import React from 'react';

function Step2Tickets({ ticketCounts, handleTicketChange, setStep, totalAmount }) {
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
            <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">2</span>
            <span className="text-[0.625rem] uppercase tracking-widest text-primary font-bold">Tickets</span>
          </div>
          <div className="h-[2px] flex-grow bg-surface-container-high mx-4"></div>
          <div className="flex flex-col items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-bold text-sm">3</span>
            <span className="text-[0.625rem] uppercase tracking-widest text-on-surface-variant font-medium">Details</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Selection Content */}
        <div className="lg:col-span-8 space-y-12">
          <section>
            <h1 className="text-4xl font-bold tracking-tighter text-on-surface mb-2">Select Your Tickets</h1>
            <p className="text-on-surface-variant max-w-2xl">Step 2: Choose the admission types for your party. All tickets include access to our conservation exhibits and botanical walk.</p>
          </section>

          {/* Ticket Counters */}
          <div className="space-y-4">
            <div className="p-8 bg-surface-container-low flex justify-between items-center group transition-colors hover:bg-surface-container rounded-xl">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-on-surface">Adult</h3>
                <p className="text-sm text-on-surface-variant">Ages 13 and above</p>
                <p className="mt-2 font-bold text-primary">₹80.00</p>
              </div>
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => handleTicketChange('Adult', -1)}
                  className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary-container hover:border-primary-container transition-all text-on-surface"
                >
                  <span className="material-symbols-outlined">remove</span>
                </button>
                <span className="text-2xl font-bold w-6 text-center">{ticketCounts['Adult'] || 0}</span>
                <button 
                  onClick={() => handleTicketChange('Adult', 1)}
                  className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary-container hover:border-primary-container transition-all text-on-surface"
                >
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>

            <div className="p-8 bg-surface-container-low flex justify-between items-center group transition-colors hover:bg-surface-container rounded-xl">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-on-surface">Child</h3>
                <p className="text-sm text-on-surface-variant">Ages 3 to 12. Under 3 are free.</p>
                <p className="mt-2 font-bold text-primary">₹40.00</p>
              </div>
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => handleTicketChange('Child', -1)}
                  className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary-container hover:border-primary-container transition-all text-on-surface"
                >
                  <span className="material-symbols-outlined">remove</span>
                </button>
                <span className="text-2xl font-bold w-6 text-center">{ticketCounts['Child'] || 0}</span>
                <button 
                  onClick={() => handleTicketChange('Child', 1)}
                  className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary-container hover:border-primary-container transition-all text-on-surface"
                >
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>
          </div>

          {/* Enhancements Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-on-surface">Enhance Your Visit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Safari Access Card */}
              <div className="bg-surface-container-lowest overflow-hidden group rounded-xl border border-outline-variant/10">
                <div className="h-48 w-full relative overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjomdQcQyjIBVoi9JW3oQEBmukgQWoMOMt_sKMPAYs8Td-qyhtNBtYb0J1pxTl9BIuIbyN33cHTHLIJ4a4yW1LoW5S7YOJFVrrKpxC8kxqLkbZ5uIlUb7rCBj9DmrE6HrUirBso8pxEaXUXsiXcJ3kAp1IgdgduhOUZBx06Yt5Vzr7QfGEuqZIm3T1TO6QHSCfiwDYoXZ6rH3M5G2q6NZKVttqqnjfH3IbjU7aMqucLXVm9NQBDiVMMJ4z9cwzP1bCghABiMYyb3A" alt="Safari" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white font-bold text-lg">Safari Access</div>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-sm text-on-surface-variant">Premium guided truck tour through the open habitat zones. 90 minutes.</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-tertiary">₹100.00 / person</span>
                    <div className="flex items-center gap-3">
                      <button onClick={() => handleTicketChange('Safari', -1)} className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center text-xs">-</button>
                      <span className="font-bold">{ticketCounts['Safari'] || 0}</span>
                      <button onClick={() => handleTicketChange('Safari', 1)} className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center text-xs">+</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Camera Permit Card */}
              <div className="bg-surface-container-lowest overflow-hidden group rounded-xl border border-outline-variant/10">
                <div className="h-48 w-full relative overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf6sn6eW31lg44EBe8fpMVDtk9xiwSVZ-uYxxHmC-YhwS892BPSe7xwnw8ShiLiBqxLGxqg94knR7nOqZiv0mzMPZFFbnEmtZh2CR6P_tHXHv1XmHqHuwgwYXn2EgPh-TIKeTAWHw9iN6Lo3b1pdpI635_mEYCwCFAKP4E9aSWAn2BGQ20DLjE5NmEwSxThJEpMK_AdkazJkNrhxTyTwtopEgmPT1U7WGvZ8oaP21yDkj5j8G25gmwbFGGo-j6mXsD7v6oKEQXT3c" alt="Camera" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white font-bold text-lg">Camera Permit</div>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-sm text-on-surface-variant">Professional gear access for photography enthusiasts. Includes tripod clearance.</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-tertiary">₹150.00 / group</span>
                    <div className="flex items-center gap-3">
                      <button onClick={() => handleTicketChange('Camera', -1)} className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center text-xs">-</button>
                      <span className="font-bold">{ticketCounts['Camera'] || 0}</span>
                      <button onClick={() => handleTicketChange('Camera', 1)} className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center text-xs">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Sidebar Booking Summary */}
        <aside className="lg:col-span-4">
          <div className="sticky top-12 bg-surface-container-lowest p-8 shadow-[0px_12px_32px_rgba(44,52,51,0.06)] rounded-xl border border-outline-variant/10 space-y-8">
            <div>
              <h2 className="text-xs uppercase tracking-[0.15em] text-on-surface-variant font-bold mb-6">Booking Summary</h2>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-on-surface">General Admission</p>
                    <p className="text-xs text-on-surface-variant">Refining selection...</p>
                  </div>
                  <button onClick={() => setStep(1)} className="text-primary hover:underline text-xs font-bold uppercase transition-colors">Change</button>
                </div>
                <div className="space-y-3 pt-6 border-t border-surface-container-high">
                  {ticketCounts.Adult > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-on-surface-variant">Adult (x{ticketCounts.Adult})</span>
                      <span className="font-medium text-on-surface">₹{ticketCounts.Adult * 80}</span>
                    </div>
                  )}
                  {ticketCounts.Child > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-on-surface-variant">Child (x{ticketCounts.Child})</span>
                      <span className="font-medium text-on-surface">₹{ticketCounts.Child * 40}</span>
                    </div>
                  )}
                  {ticketCounts.Safari > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-on-surface-variant">Safari Access (x{ticketCounts.Safari})</span>
                      <span className="font-medium text-on-surface">₹{ticketCounts.Safari * 100}</span>
                    </div>
                  )}
                  {ticketCounts.Camera > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-on-surface-variant">Camera Permit (x{ticketCounts.Camera})</span>
                      <span className="font-medium text-on-surface">₹{ticketCounts.Camera * 150}</span>
                    </div>
                  )}
                </div>
                <div className="pt-6 border-t border-surface-container-high space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-on-surface">Total</span>
                    <span className="text-3xl font-extrabold tracking-tighter text-primary">₹{totalAmount}.00</span>
                  </div>
                  <p className="text-[0.625rem] text-on-surface-variant text-center leading-relaxed">
                    Prices include all local taxes and conservation levies. Non-refundable but transferable.
                  </p>
                </div>
              </div>
            </div>
            <button 
              disabled={totalAmount === 0}
              onClick={() => setStep(3)}
              className={`w-full py-5 rounded-lg font-bold flex items-center justify-center gap-3 group transition-all active:scale-[0.98]
                         ${totalAmount > 0 ? 'bg-primary text-on-primary hover:bg-primary-dim shadow-lg shadow-primary/20' : 'bg-surface-dim/40 text-outline cursor-not-allowed'}`}
            >
              Continue to Details
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
            <div className="flex items-center gap-3 p-4 bg-surface-container-low rounded-lg">
              <span className="material-symbols-outlined text-primary">verified_user</span>
              <span className="text-[0.625rem] text-on-surface-variant font-medium uppercase tracking-wider">Secure SSL Checkout</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Step2Tickets;

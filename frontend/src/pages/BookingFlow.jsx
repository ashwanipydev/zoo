import React, { useState } from 'react';
import api from '../api/axiosConfig';
import Step1Date from '../components/Step1Date';
import Step2Tickets from '../components/Step2Tickets';
import Step3Details from '../components/Step3Details';
import Step4Payment from '../components/Step4Payment';

function BookingFlow() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState('');
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  
  const [tickets, setTickets] = useState({ Adult: 1, Child: 0, Camera: 0, Safari: 0 });
  const [userDetails, setUserDetails] = useState({ name: '', email: '', phone: '' });
  
  const [bookingId, setBookingId] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [ticketUrl, setTicketUrl] = useState('');

  const PRICING = { Adult: 80, Child: 40, Camera: 150, Safari: 100 };

  const calculateTotal = () => {
    return (tickets.Adult * PRICING.Adult) + 
           (tickets.Child * PRICING.Child) + 
           (tickets.Camera * PRICING.Camera) + 
           (tickets.Safari * PRICING.Safari);
  };

  const handleDateChange = async (e) => {
    setDate(e.target.value);
    try {
      const res = await api.get(`/slots/available?date=${e.target.value}`);
      setSlots(res.data);
      setSelectedSlot(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleTicketChange = (type, val) => {
    setTickets(prev => ({ ...prev, [type]: Math.max(0, prev[type] + val) }));
  };

  const handleUserDetailsChange = (field, val) => {
    setUserDetails(prev => ({ ...prev, [field]: val }));
  };

  const handleBook = async () => {
    const payload = {
      slotId: selectedSlot.id,
      adultTickets: tickets.Adult,
      childTickets: tickets.Child,
      addOns: []
    };
    
    if (tickets.Camera > 0) payload.addOns.push({ addOnId: 1, quantity: tickets.Camera }); // Assuming 1=Camera
    if (tickets.Safari > 0) payload.addOns.push({ addOnId: 2, quantity: tickets.Safari }); // Assuming 2=Safari

    try {
      // 1. Initial Booking Request
      const res = await api.post('/bookings/initiate', payload);
      setBookingId(res.data.id);
      
      // 2. Fake Razorpay Payment completion mapped from the user's previously implemented flow
      const confirmRes = await api.post(`/bookings/confirm/${res.data.id}?paymentId=DUMMY_PAY_STITCH`);
      setPaymentStatus(true);
      setTicketUrl(confirmRes.data.pdfUrl);
      setStep(5); // Confirmation Screen
    } catch (err) {
      alert('Transaction Failed: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      {step === 1 && (
        <Step1Date 
          date={date} 
          handleDateChange={handleDateChange} 
          slots={slots} 
          selectedSlot={selectedSlot} 
          setSelectedSlot={setSelectedSlot} 
          setStep={setStep} 
        />
      )}

      {step === 2 && (
        <Step2Tickets 
          ticketCounts={tickets} 
          handleTicketChange={handleTicketChange} 
          totalAmount={calculateTotal()}
          setStep={setStep} 
        />
      )}

      {step === 3 && (
        <Step3Details 
          userDetails={userDetails}
          handleUserDetailsChange={handleUserDetailsChange}
          setStep={setStep} 
        />
      )}

      {step === 4 && (
        <Step4Payment 
          selectedSlot={selectedSlot}
          ticketCounts={tickets}
          totalAmount={calculateTotal()}
          handleBook={handleBook}
          setStep={setStep} 
        />
      )}

      {step === 5 && (
        <div className="max-w-4xl mx-auto px-6 py-20 text-center mt-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="bg-surface-container-lowest p-12 rounded-[2rem] shadow-[0px_24px_48px_rgba(44,52,51,0.08)] border border-outline-variant/10 relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-tertiary/5 rounded-full blur-3xl"></div>
            
            <div className="w-24 h-24 bg-primary text-on-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/20">
              <span className="material-symbols-outlined text-[3.5rem]">verified</span>
            </div>
            
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-tertiary mb-3 block">Reservation Complete</span>
            <h1 className="text-5xl font-bold tracking-tighter text-on-surface mb-4">Your journey begins.</h1>
            <p className="text-on-surface-variant max-w-lg mx-auto mb-10 leading-relaxed">
              We've confirmed your visit to the sanctuary. A high-resolution digital pass has been sent to <span className="text-on-surface font-bold">{userDetails.email}</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto text-left">
              <div className="p-6 bg-surface-container-low rounded-xl">
                <p className="text-[10px] uppercase font-bold text-on-surface-variant mb-2">Booking ID</p>
                <p className="font-bold text-on-surface font-mono">{bookingId}</p>
              </div>
              <div className="p-6 bg-surface-container-low rounded-xl">
                <p className="text-[10px] uppercase font-bold text-on-surface-variant mb-2">Visit Date</p>
                <p className="font-bold text-on-surface">{selectedSlot?.date}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {ticketUrl && (
                 <a href={`http://localhost:8080${ticketUrl}`} target="_blank" rel="noreferrer" 
                    className="px-10 py-5 rounded-xl font-bold bg-primary text-on-primary hover:bg-primary-dim shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3">
                   <span className="material-symbols-outlined">file_download</span>
                   Download E-Ticket
                 </a>
              )}
              <button onClick={() => window.location.href = '/'} 
                      className="px-10 py-5 rounded-xl font-bold bg-surface-container-highest text-on-surface hover:bg-surface-dim transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                Return to Sanctuary Home
              </button>
            </div>
          </div>
          
          <p className="mt-12 text-xs text-on-surface-variant/60 max-w-md mx-auto italic leading-relaxed">
            Please present your digital pass at the Verdant Gate. For conservation reasons, we encourage using digital tickets instead of printing.
          </p>
        </div>
      )}
    </div>
  );
}

export default BookingFlow;

import React, { useState } from 'react';
import { FiSave, FiEdit2 } from 'react-icons/fi';

const PricingManagement = () => {
    const [dynamicPricing, setDynamicPricing] = useState(true);
    const [threshold, setThreshold] = useState(90);

    return (
        <div className="font-public-sans w-full">
            {/* Hero Header Section */}
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h1 className="text-5xl font-extrabold text-primary tracking-tighter">Pricing Management</h1>
                    <p className="text-on-surface-variant mt-2 font-medium">Configure ticket tiers, add-on services, and dynamic pricing rules.</p>
                </div>
                <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary-dim transition-colors shadow-lg shadow-primary/20">
                    <FiSave size={18} />
                    Save Changes
                </button>
            </div>

            <div className="grid grid-cols-12 gap-8">
                {/* Base Ticket Prices & Slot-Specific */}
                <div className="col-span-12 lg:col-span-8 space-y-8">
                    {/* Base Ticket Prices */}
                    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/10 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-surface-container bg-surface-container-low/50">
                            <h3 className="text-lg font-bold text-on-surface tracking-tight">Base Ticket Prices</h3>
                        </div>
                        <div className="p-6">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest border-b border-surface-container">
                                        <th className="pb-4">Ticket Type</th>
                                        <th className="pb-4">Current Price (₹)</th>
                                        <th className="pb-4">Last Updated</th>
                                        <th className="pb-4 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-surface-container/50">
                                        <td className="py-4 font-bold text-on-surface">Adult (13+ yrs)</td>
                                        <td className="py-4"><input className="w-24 bg-surface-container-low border-none rounded-lg py-2 px-3 font-bold text-primary focus:ring-2 focus:ring-primary" type="number" defaultValue={100} /></td>
                                        <td className="py-4 text-sm text-on-surface-variant">Apr 10, 2026</td>
                                        <td className="py-4 text-right"><button className="p-2 hover:bg-surface-container text-on-surface-variant rounded-lg transition-colors"><FiEdit2 size={16} /></button></td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 font-bold text-on-surface">Child (3-12 yrs)</td>
                                        <td className="py-4"><input className="w-24 bg-surface-container-low border-none rounded-lg py-2 px-3 font-bold text-primary focus:ring-2 focus:ring-primary" type="number" defaultValue={50} /></td>
                                        <td className="py-4 text-sm text-on-surface-variant">Apr 10, 2026</td>
                                        <td className="py-4 text-right"><button className="p-2 hover:bg-surface-container text-on-surface-variant rounded-lg transition-colors"><FiEdit2 size={16} /></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Slot-Specific Pricing */}
                    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/10 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-surface-container bg-surface-container-low/50">
                            <h3 className="text-lg font-bold text-on-surface tracking-tight">Slot-Specific Pricing Surge</h3>
                        </div>
                        <div className="p-6">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest border-b border-surface-container">
                                        <th className="pb-4">Slot Time</th>
                                        <th className="pb-4">Adult (₹)</th>
                                        <th className="pb-4">Child (₹)</th>
                                        <th className="pb-4 text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { time: '09:00 - 11:00 (Morning)', adult: 100, child: 50, active: true },
                                        { time: '11:00 - 13:30 (Midday)', adult: 120, child: 60, active: true },
                                        { time: '14:00 - 16:00 (Afternoon)', adult: 100, child: 50, active: true },
                                        { time: '16:00 - 18:00 (Evening)', adult: 150, child: 75, active: true },
                                    ].map((s, i) => (
                                        <tr key={i} className="border-b border-surface-container/50 last:border-0">
                                            <td className="py-4 text-sm font-bold text-on-surface">{s.time}</td>
                                            <td className="py-4"><input className="w-24 bg-surface-container-low border-none rounded-lg py-2 px-3 font-bold text-primary focus:ring-2 focus:ring-primary" type="number" defaultValue={s.adult} /></td>
                                            <td className="py-4"><input className="w-24 bg-surface-container-low border-none rounded-lg py-2 px-3 font-bold text-primary focus:ring-2 focus:ring-primary" type="number" defaultValue={s.child} /></td>
                                            <td className="py-4 text-right"><span className="px-3 py-1 bg-secondary-container/30 text-on-secondary-container text-[10px] font-black uppercase tracking-tighter rounded-full">Active</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Automation & Add-ons Sidebar */}
                <div className="col-span-12 lg:col-span-4 space-y-8">
                    {/* Dynamic Pricing Rules */}
                    <div className="bg-primary-container p-6 rounded-xl text-on-primary shadow-xl shadow-primary/20">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-xl font-bold tracking-tight mb-1">Dynamic Pricing</h3>
                                <p className="text-xs font-bold uppercase tracking-widest text-on-primary-container/80">Automation Rule</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" checked={dynamicPricing} onChange={e => setDynamicPricing(e.target.checked)} />
                                <div className="w-11 h-6 bg-white/30 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                        
                        {dynamicPricing && (
                            <div className="mt-6 pt-6 border-t border-white/20">
                                <div className="flex justify-between mb-2">
                                    <span className="text-xs font-bold uppercase tracking-widest">Occupancy Threshold</span>
                                    <span className="text-sm font-black">{threshold}%</span>
                                </div>
                                <input 
                                    type="range" min="50" max="100" value={threshold} onChange={e => setThreshold(e.target.value)}
                                    className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer mb-4" 
                                />
                                <p className="text-xs font-medium leading-relaxed bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                                    When slot reaches <strong className="font-black text-white">{threshold}% occupancy</strong>, the system triggers a <strong className="font-black text-white">+50% price surge</strong> automatically.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Add-On Services */}
                    <div>
                        <h3 className="text-lg font-bold text-on-surface tracking-tight mb-4">Add-On Services</h3>
                        <div className="space-y-4">
                            {[
                                { name: 'Camera Permit', type: 'Per Person', price: 100, icon: 'photo_camera' },
                                { name: 'Safari Access', type: 'Per Person', price: 150, icon: 'explore' },
                                { name: 'VIP Dining', type: 'Per Booking', price: 500, icon: 'restaurant' },
                            ].map((addon, i) => (
                                <div key={i} className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/10 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">{addon.icon}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-sm text-on-surface">{addon.name}</h4>
                                        <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-2">{addon.type}</p>
                                    </div>
                                    <input className="w-20 bg-surface-container-low border-none rounded-lg py-2 px-3 font-bold text-primary focus:ring-2 focus:ring-primary text-right" type="number" defaultValue={addon.price} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingManagement;

import React, { useState, useEffect } from 'react';
import { FiSearch, FiUserPlus, FiEye } from 'react-icons/fi';
import api from '../../services/api';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [roleFilter, setRoleFilter] = useState('all');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await api.get('/users/all');
                setUsers(res.data);
            } catch (err) {
                console.error("Error fetching users:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const filtered = users.filter(u => {
        const role = u.roles?.some(r => r.name === 'ROLE_ADMIN') ? 'admin' : 'user';
        const matchRole = roleFilter === 'all' || role === roleFilter;
        const matchSearch = !search || 
            u.fullName?.toLowerCase().includes(search.toLowerCase()) || 
            u.email?.toLowerCase().includes(search.toLowerCase());
        return matchRole && matchSearch;
    });

    const adminCount = users.filter(u => u.roles?.some(r => r.name === 'ROLE_ADMIN')).length;

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="font-public-sans w-full animate-in fade-in duration-500">
            {/* Hero Header Section */}
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h1 className="text-5xl font-extrabold text-primary tracking-tighter">User Management</h1>
                    <p className="text-on-surface-variant mt-2 font-medium">Control system access and view traveler profiles.</p>
                </div>
                <button className="bg-primary text-on-primary px-8 py-4 rounded-2xl font-black flex items-center gap-3 hover:bg-primary-dim transition-all shadow-xl shadow-primary/20 transform hover:-translate-y-1">
                    <FiUserPlus size={20} strokeWidth={3} />
                    Add Admin
                </button>
            </div>

            {/* KPI Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-lg transition-all">
                    <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-[0.2em] mb-2">Total Directory</p>
                    <h3 className="text-4xl font-black text-on-surface tracking-tighter">{users.length}</h3>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-lg transition-all">
                    <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-[0.2em] mb-2">Admin Authority</p>
                    <h3 className="text-4xl font-black text-on-surface tracking-tighter">{adminCount}</h3>
                </div>
                <div className="bg-[#c4efa3] p-8 rounded-3xl shadow-xl shadow-[#c4efa3]/20 border border-white/20">
                    <p className="text-[#0a2100]/60 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Active Travelers</p>
                    <h3 className="text-4xl font-black text-[#0a2100] tracking-tighter">{users.length}</h3>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="w-2 h-2 rounded-full bg-[#396a1e] animate-pulse"></span>
                        <span className="text-[10px] font-bold text-[#396a1e] uppercase tracking-widest">Real-time sync</span>
                    </div>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row gap-6 mb-10 bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/10 shadow-sm">
                <div className="relative flex-1">
                    <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-outline" size={18} />
                    <input 
                        className="w-full bg-surface-container-low border-none rounded-2xl py-4 pl-14 pr-6 font-bold focus:ring-2 focus:ring-primary text-on-surface placeholder-on-surface-variant/40 shadow-inner" 
                        placeholder="Search by profile name or email..."
                        value={search} 
                        onChange={e => setSearch(e.target.value)} 
                    />
                </div>
                <div className="flex gap-2 bg-surface-container-low p-1.5 rounded-xl">
                    {['all', 'user', 'admin'].map(r => (
                        <button 
                            key={r} 
                            onClick={() => setRoleFilter(r)}
                            className={`px-8 py-3 rounded-lg font-black text-[10px] uppercase tracking-widest transition-all ${roleFilter === r ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
                        >
                            {r}
                        </button>
                    ))}
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-surface-container-lowest rounded-[2.5rem] border border-outline-variant/10 shadow-xl overflow-hidden mb-12">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface-container-low/50 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] border-b border-surface-container">
                                <th className="px-10 py-8">User Identity</th>
                                <th className="px-10 py-8">Contact Information</th>
                                <th className="px-10 py-8">Access Level</th>
                                <th className="px-10 py-8">Account Matrix</th>
                                <th className="px-10 py-8 text-right">Profile Control</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-container">
                            {filtered.map(u => {
                                const isAdmin = u.roles?.some(r => r.name === 'ROLE_ADMIN');
                                return (
                                    <tr key={u.id} className="hover:bg-primary-container/5 transition-all group">
                                        <td className="px-10 py-6">
                                            <div className="flex items-center gap-5">
                                                <div className="w-14 h-14 rounded-2xl bg-primary text-on-primary flex items-center justify-center text-xl font-black shadow-lg shadow-primary/10 group-hover:rotate-6 transition-transform">
                                                    {u.fullName?.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="text-base font-black text-on-surface tracking-tight">{u.fullName}</div>
                                                    <div className="text-xs text-on-surface-variant/70 font-medium">{u.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-10 py-6">
                                            <div className="text-sm font-bold text-on-surface-variant">{u.mobileNumber || 'N/A'}</div>
                                            <div className="text-[10px] text-on-surface-variant/50 uppercase font-bold tracking-widest mt-1">Verified Device</div>
                                        </td>
                                        <td className="px-10 py-6">
                                            <span className={`px-5 py-2 text-[10px] font-black uppercase tracking-widest rounded-full border ${isAdmin ? 'bg-[#c4efa3]/20 border-[#c4efa3] text-[#0a2100]' : 'bg-surface-container-high/40 border-outline-variant/30 text-on-surface-variant'}`}>
                                                {isAdmin ? 'Administrator' : 'General User'}
                                            </span>
                                        </td>
                                        <td className="px-10 py-6">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                                <span className="text-sm font-black text-on-surface">Authenticated</span>
                                            </div>
                                            <div className="text-[10px] text-on-surface-variant mt-1 font-bold uppercase tracking-tight">Access Token Valid</div>
                                        </td>
                                        <td className="px-10 py-6 text-right">
                                            <button className="w-12 h-12 inline-flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-primary rounded-2xl transition-all opacity-0 group-hover:opacity-100 shadow-sm" title="Inspect Profile">
                                                <FiEye size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;

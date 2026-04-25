import React, { useEffect, useMemo, useState } from 'react';
import api from '../../services/api';
import {
  AdminEmptyState,
  AdminPageHeader,
  AdminPanel,
  AdminSectionTitle,
  AdminStatusBadge,
} from '../../components/AdminPrimitives';

const primaryRoles = ['ROLE_STAFF', 'ROLE_GATEKEEPER', 'ROLE_ADMIN'];

const UserManagementStitch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [staffData, setStaffData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    password: '',
    roles: ['ROLE_STAFF'],
  });

  const fetchUsers = async () => {
    try {
      const response = await api.get('/users/all');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = useMemo(() => users.filter((user) => {
    const isStaff = user.roles?.some((role) => role.name !== 'ROLE_USER');
    const role = isStaff ? 'staff' : 'user';
    const matchesRole = roleFilter === 'all' || role === roleFilter;
    const text = search.toLowerCase();
    const matchesSearch = !text
      || user.fullName?.toLowerCase().includes(text)
      || user.email?.toLowerCase().includes(text);

    return matchesRole && matchesSearch;
  }), [roleFilter, search, users]);

  const getRoleLabel = (user) => {
    if (user.roles?.some((role) => role.name === 'ROLE_ADMIN')) return 'Administrator';
    if (user.roles?.some((role) => role.name === 'ROLE_GATEKEEPER')) return 'Gatekeeper';
    if (user.roles?.some((role) => role.name !== 'ROLE_USER')) return 'Internal Staff';
    return 'Standard User';
  };

  const handleCreateOrUpdateStaff = async (event) => {
    event.preventDefault();

    try {
      if (editingId) {
        await api.put(`/admin/staff/${editingId}`, staffData);
      } else {
        await api.post('/admin/staff', staffData);
      }

      setShowModal(false);
      setEditingId(null);
      setStaffData({
        fullName: '',
        email: '',
        mobileNumber: '',
        password: '',
        roles: ['ROLE_STAFF'],
      });
      fetchUsers();
    } catch (error) {
      console.error('Error saving staff:', error);
      window.alert('Failed to save staff member.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this staff member?')) return;

    try {
      await api.delete(`/admin/staff/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Failed to delete staff:', error);
    }
  };

  const handleToggleStatus = async (id) => {
    try {
      await api.patch(`/admin/staff/${id}/toggle`);
      fetchUsers();
    } catch (error) {
      console.error('Failed to toggle status:', error);
    }
  };

  const startEdit = (user) => {
    setEditingId(user.id);
    setStaffData({
      fullName: user.fullName,
      email: user.email,
      mobileNumber: user.mobileNumber || '',
      password: '',
      roles: user.roles.map((role) => role.name),
    });
    setShowModal(true);
  };

  if (loading) {
    return (
      <div className="flex min-h-[320px] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-surface-container-high border-t-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <AdminPageHeader
        eyebrow="Personnel Registry"
        title="User Management"
        description="Manage staff, access levels, and operational identities within the Botanical Archive."
        action={<button className="btn btn--primary btn--lg shadow-organic-xl" onClick={() => setShowModal(true)}>Add Steward</button>}
      />

      <AdminPanel muted>
        <div className="grid gap-4 lg:grid-cols-[1.2fr_auto]">
          <div className="input-group">
            <label className="label">Search registry</label>
            <input className="input-field bg-surface-container-lowest" placeholder="Search by name or email..." value={search} onChange={(event) => setSearch(event.target.value)} />
          </div>
          <div className="flex gap-2 self-end">
            {['all', 'user', 'staff'].map((value) => (
              <button
                key={value}
                className={`rounded-full px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] ${roleFilter === value ? 'bg-primary text-background' : 'bg-surface-container-lowest text-on-surface-variant'}`}
                onClick={() => setRoleFilter(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </AdminPanel>

      <AdminPanel>
        <AdminSectionTitle eyebrow="Directory Index" title="Steward directory" description="Live identity registry for standard users and privileged staff." />
        {filteredUsers.length ? (
          <div className="space-y-3">
            {filteredUsers.map((user) => (
              <div key={user.id} className="flex flex-col gap-4 rounded-[1.75rem] bg-surface-container-low p-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-sm font-black text-background">
                    {user.fullName?.charAt(0) || 'U'}
                  </div>
                  <div>
                    <div className="text-lg font-black tracking-tight text-primary">{user.fullName}</div>
                    <div className="text-sm font-medium text-on-surface-variant">{user.email}</div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <AdminStatusBadge tone={user.isActive !== false ? 'success' : 'warning'}>
                    {user.isActive !== false ? 'Active' : 'Locked'}
                  </AdminStatusBadge>
                  <AdminStatusBadge tone="neutral">{getRoleLabel(user)}</AdminStatusBadge>
                  <button className="btn btn--ghost justify-center" onClick={() => handleToggleStatus(user.id)}>
                    {user.isActive !== false ? 'Lock' : 'Unlock'}
                  </button>
                  <button className="btn btn--secondary justify-center" onClick={() => startEdit(user)}>Edit</button>
                  <button className="btn justify-center bg-error-container text-error" onClick={() => handleDelete(user.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <AdminEmptyState icon="group_off" title="No users matched" description="Try a different search term or filter to locate the user record you need." />
        )}
      </AdminPanel>

      {showModal ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/20 p-4 backdrop-blur-md">
          <div className="w-full max-w-3xl rounded-[2rem] bg-surface-container-lowest shadow-organic-xl">
            <div className="flex items-center justify-between rounded-t-[2rem] bg-surface-container-low px-8 py-7">
              <div>
                <p className="label mb-2">Protocol Registry</p>
                <h2 className="text-3xl font-black tracking-tight text-primary">
                  {editingId ? 'Update steward' : 'Provision steward'}
                </h2>
              </div>
              <button className="btn btn--ghost" onClick={() => { setShowModal(false); setEditingId(null); }}>Close</button>
            </div>

            <form onSubmit={handleCreateOrUpdateStaff} className="space-y-6 p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="input-group">
                  <label className="label">Full name</label>
                  <input required className="input-field" value={staffData.fullName} onChange={(event) => setStaffData({ ...staffData, fullName: event.target.value })} />
                </div>
                <div className="input-group">
                  <label className="label">Email</label>
                  <input required type="email" className="input-field" value={staffData.email} onChange={(event) => setStaffData({ ...staffData, email: event.target.value })} />
                </div>
                <div className="input-group">
                  <label className="label">Mobile number</label>
                  <input className="input-field" value={staffData.mobileNumber} onChange={(event) => setStaffData({ ...staffData, mobileNumber: event.target.value })} />
                </div>
                <div className="input-group">
                  <label className="label">Password</label>
                  <input required={!editingId} type="password" className="input-field" value={staffData.password} onChange={(event) => setStaffData({ ...staffData, password: event.target.value })} />
                </div>
              </div>

              <AdminPanel muted>
                <AdminSectionTitle eyebrow="Clearance" title="Primary role" />
                <div className="grid gap-3 md:grid-cols-3">
                  {primaryRoles.map((role) => (
                    <button
                      key={role}
                      type="button"
                      className={`rounded-[1.5rem] px-4 py-4 text-sm font-black tracking-tight ${staffData.roles.includes(role) ? 'bg-primary text-background' : 'bg-surface-container-lowest text-on-surface-variant'}`}
                      onClick={() => {
                        const additionalRoles = staffData.roles.filter((item) => !primaryRoles.includes(item));
                        setStaffData({ ...staffData, roles: [role, ...additionalRoles] });
                      }}
                    >
                      {role.replace('ROLE_', '').replace('_', ' ')}
                    </button>
                  ))}
                </div>
              </AdminPanel>

              <div className="grid gap-3 md:grid-cols-2">
                {['ROLE_SLOTS', 'ROLE_PRICING', 'ROLE_BOOKINGS', 'ROLE_ANALYTICS'].map((role) => (
                  <label key={role} className="flex items-center gap-3 rounded-[1.5rem] bg-surface-container-low px-4 py-4">
                    <input
                      type="checkbox"
                      checked={staffData.roles.includes(role)}
                      onChange={(event) => {
                        setStaffData((current) => ({
                          ...current,
                          roles: event.target.checked
                            ? [...current.roles, role]
                            : current.roles.filter((item) => item !== role),
                        }));
                      }}
                    />
                    <span className="text-sm font-semibold text-on-surface">{role.replace('ROLE_', '').replace('_', ' ')}</span>
                  </label>
                ))}
              </div>

              <div className="flex gap-3">
                <button type="submit" className="btn btn--primary flex-1 justify-center">
                  {editingId ? 'Update steward' : 'Create steward'}
                </button>
                <button type="button" className="btn btn--ghost flex-1 justify-center" onClick={() => { setShowModal(false); setEditingId(null); }}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserManagementStitch;

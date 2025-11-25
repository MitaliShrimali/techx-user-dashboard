import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/slices/userSlice';
import { Overlay, ModalBox } from '../common/Modal';
import Button from '../common/Button';
import { useTheme } from 'styled-components';

function AddUserForm({ onClose }) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addUser(form));
    onClose();
  };

  return (
    <Overlay>
      <ModalBox style={{
        borderRadius: '12px',
        boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
        background: theme.colors.card,
        padding: '32px',
        width: '100%',
        maxWidth: '440px',
        color: theme.colors.text
      }}>
        <h2 style={{ marginBottom: '24px', fontSize: '1.5rem' }}>Add New User</h2>
        <form onSubmit={handleSubmit}>
          {['name', 'email', 'phone', 'company'].map(field => (
            <div key={field} style={{ marginBottom: '16px' }}>
              <label htmlFor={field} style={{
                display: 'block',
                marginBottom: '6px',
                fontWeight: '500',
                color: theme.colors.text
              }}>
                {field === 'company' ? 'Company name' : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                id={field}
                name={field}
                type="text"
                value={form[field]}
                onChange={handleChange}
                required
                placeholder={field === 'phone' ? '+91 XXXXX XXXXX' : ''}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '8px',
                  border: `1px solid ${theme.colors.border}`,
                  fontSize: '0.95rem',
                  background: theme.colors.inputBg,
                  color: theme.colors.text
                }}
              />
            </div>
          ))}

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
            <Button type="submit">Add</Button>
            <Button variant="danger" type="button" onClick={onClose}>Cancel</Button>
          </div>
        </form>
      </ModalBox>
    </Overlay>
  );
}

export default AddUserForm;

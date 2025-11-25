import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../store/slices/userSlice';

function UserCard({ user }) {
  const dispatch = useDispatch();

  return (
    <Card
      style={{
        marginBottom: '16px',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)';
      }}
    >
      <h2 style={{ margin: '0 0 8px', fontSize: '1.25rem' }}>{user.name}</h2>
      <p style={{ margin: '4px 0', fontSize: '0.95rem' }}>
        <strong>Email:</strong> {user.email}
      </p>
      <p style={{ margin: '4px 0', fontSize: '0.95rem' }}>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p style={{ margin: '4px 0', fontSize: '0.95rem' }}>
        <strong>Company:</strong> {user.company?.name}
      </p>

      <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="danger"
          onClick={() => dispatch(deleteUser(user.id))}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
}

export default UserCard;

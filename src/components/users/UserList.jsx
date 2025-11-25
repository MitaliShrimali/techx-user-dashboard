import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, hydrateStatic } from '../../store/slices/userSlice';
import UserCard from './UserCard';

function UserList() {
  const dispatch = useDispatch();
  const { list, status } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers()).unwrap().catch(() => dispatch(hydrateStatic()));
  }, [dispatch]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
      {list.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
      {status === 'loading' && <p>Loading users...</p>}
    </div>
  );
}

export default UserList;

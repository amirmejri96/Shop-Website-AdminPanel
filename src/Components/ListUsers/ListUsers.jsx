import React, { useEffect, useState } from 'react';
import './ListUsers.css';

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/allusers')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className='list-users'>
      <h1>All Users</h1>
      <div className="listusers-format-main">
        <p>Name</p>
        <p>Email</p>
        <p>Signup Date</p>
      </div>
      <div className="listusers-allusers">
        <hr />
        {users.map((user, index) => (
          <div key={index} className="listusers-format-main listusers-format">
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{new Date(user.Date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListUsers;
import React, { useState, useEffect, Fragment } from 'react';

const Logout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') == null) {
      window.location.replace('http://localhost:3000/login');
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogout = e => {
    e.preventDefault();

    fetch('/api/v1/accounts/auth/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        localStorage.clear();
        window.location.replace('http://localhost:3000/login');
      });
  };

  return (
    <div>
      {loading === false && (
        <Fragment>
         <div className='container p-5 card mt-3'>
          <div className='row'>
              <div className='col-md-12 text-center'>
                <h1>Are you sure you want to logout?</h1>
                <input type='button' className='btn btn-primary' value='Logout' onClick={handleLogout} />
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Logout;
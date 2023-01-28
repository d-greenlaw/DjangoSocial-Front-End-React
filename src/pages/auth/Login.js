import React, { useState, useEffect } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('http://localhost:3000/dashboard');
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      email: email,
      password: password
    };

    fetch('/api/v1/accounts/auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          window.location.replace('http://localhost:3000/');
        } else {
          setEmail('');
          setPassword('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div className="wrapper">
      {/* {loading === false && <h1>Login</h1>} */}
      {errors === true && <h2>Cannot log in with provided credentials</h2>}
      {loading === false && (

      <section class="sign-in-page">
            <div id="container-inside">
                <div id="circle-small"></div>
                <div id="circle-medium"></div>
                <div id="circle-large"></div>
                <div id="circle-xlarge"></div>
                <div id="circle-xxlarge"></div>
            </div>
            <div class="container p-0">
                <div class="row no-gutters">
                    <div class="col-md-6 text-center pt-5">
                        <div class="sign-in-detail text-white">
                            <a class="sign-in-logo mb-5" href="#"><img src="images/logo-full.png" class="img-fluid" alt="logo"/></a>
                            <div class="sign-slider overflow-hidden ">
                                <ul  class="swiper-wrapper list-inline m-0 p-0 ">
                                    <li class="swiper-slide">
                                        <img src="images/login/1.png" class="img-fluid mb-4" alt="logo"/>
                                        <h4 class="mb-1 text-white">Find new friends</h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                    </li>
                                    <li class="swiper-slide">
                                        <img src="images/login/2.png" class="img-fluid mb-4" alt="logo"/> 
                                        <h4 class="mb-1 text-white">Connect with the world</h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                    </li>
                                    <li class="swiper-slide">
                                        <img src="images/login/3.png" class="img-fluid mb-4" alt="logo"/>
                                        <h4 class="mb-1 text-white">Create new events</h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 bg-white pt-5 pt-5 pb-lg-0 pb-5">
                        <div class="sign-in-from">
                            <h1 class="mb-0">Log In</h1>
                            <p>Enter your email address and password to access admin panel.</p>
                            <form onSubmit={onSubmit}>
                              <label className="form-label" htmlFor='email'>Email address:</label> <br />
                              <input
                                className="form-control mb-0"
                                name='email'
                                type='email'
                                value={email}
                                required
                                onChange={e => setEmail(e.target.value)}
                              />{' '}
                              <br />
                              <label className="form-label" htmlFor='password'>Password:</label> <br />
                              <input
                                className="form-control mb-0"
                                name='password'
                                type='password'
                                value={password}
                                required
                                onChange={e => setPassword(e.target.value)}
                              />{' '}
                              <br />
                              <input className='btn btn-primary float-end' type='submit' value='Login' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
      </section>

      )}
    </div>


  );
};

export default Login;
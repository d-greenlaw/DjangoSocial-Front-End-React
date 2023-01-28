import React, { useState, useEffect } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('http://localhost:3000/');
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      email: email,
      password1: password1,
      password2: password2
    };

    fetch('/api/v1/accounts/auth/register/', {
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
          setPassword1('');
          setPassword2('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div className="wrapper">
      {/* {loading === false && <h1>Signup</h1>} */}
      {errors === true && <h2>Cannot signup with provided credentials</h2>}

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
                            <h1 class="mb-0">Sign Up</h1>
                            <p>Enter your email address and password to access admin panel.</p>
                            <form className='mt-4' onSubmit={onSubmit}>
                            <label className="form-label" htmlFor='email'>Email address:</label> <br />
                            <input
                              className="form-control mb-0"
                              name='email'
                              type='email'
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                              required
                            />{' '}
                            <br />
                            <label className="form-label" htmlFor='password1'>Password:</label> <br />
                            <input
                              className="form-control mb-0"
                              name='password1'
                              type='password'
                              value={password1}
                              onChange={e => setPassword1(e.target.value)}
                              required
                            />{' '}
                            <br />
                            <label className="form-label" htmlFor='password2'>Confirm password:</label> <br />
                            <input
                              className="form-control mb-0"
                              name='password2'
                              type='password'
                              value={password2}
                              onChange={e => setPassword2(e.target.value)}
                              required
                            />{' '}
                            <br />
                            <input className='btn btn-primary float-end' type='submit' value='Signup' />
                          </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
};

export default Signup;
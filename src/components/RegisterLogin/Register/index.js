import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../registerLogin.scss';
import './register.scss';

/** Actions */
import { signUp } from '../../../Actions/userActions';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: ''
  });

  const { email, password, password2 } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    /*
    if (password !== password2) {
      //error
    } else {
      //await signUp({ email, password });
      console.log(email, password, password2);
    }
    */

    console.log(email, password, password2);
  };

  return (
    <div className='container'>
      <div className='wrapper'>
        <h2 className='heading-secondary'>Registraté</h2>
        <p>(Logos de facebook, twitter, etc)</p>
        <span>
          Ya tienes una cuenta?
          <Link to='/signIn' className='link'>
            Login
          </Link>
        </span>

        <form onSubmit={onSubmit} className='form'>
          <div className='form__content'>
            <input type='email' name='email' autoComplete='off' required />
            <label className='form__label'>
              <span className='form__txt'>Email</span>
            </label>
          </div>

          <div className='form__content'>
            <input type='password' name='password' required />
            <label className='form__label'>
              <span className='form__txt'>Password</span>
            </label>
          </div>

          <div className='form__content'>
            <input type='password' name='password2' required />
            <label className='form__label'>
              <span className='form__txt'>Repeat Password</span>
            </label>
          </div>

          <div>
            <button type='submit' className='btn btn--blue' onChange={onChange}>
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  signUp: PropTypes.func.isRequired
};

export default connect(
  null,
  { signUp }
)(Register);

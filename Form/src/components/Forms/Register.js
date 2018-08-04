import React from 'react';

export default function Register (props) {
  const {
    login,
    password,
    confirmPassword,
    policy,
    email,
  } = props;
  return(
      <div>
        <form onSubmit={(e)=>props.onSubmitRegister(e)}>
          <input
            type ='text'
            name ='login'
            value = {login} 
            placeholder='login..'
            className='form-control'
            onChange={(e) => props.OnChange(e)}
          />
          <input
            type='text'
            name='email'
            value = {email}
            placeholder='email'
            className='form-control'
            onChange={(e) => props.OnChange(e)}
          />
          <input
            type='password'
            name='password'
            value = {password}
            placeholder='password..'
            className='form-control'
            onChange={(e) => props.OnChange(e)}
          />
          <input
            type='password'
            name='confirmPassword'
            value = {confirmPassword}
            placeholder='confirm password..'
            className='form-control'
            onChange={(e) => props.OnChange(e)}
          />
          <input 
            type='checkbox'
            value = {policy}
            name='policy'
            className=''
            onChange={(e) => props.OnChange(e)}
            />
          <a href='https://www.google.ru/'>  privacy policy tuda-suda</a>
          <div className="btn-group btn-submit" role="group">
                <button
                    type="submit"
                    className="btn btn-secondary"
                    
                    >SUBMIT
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick = {props.onCancelRegister}
                    >CANCEL
                </button>
            </div>
        </form>
      </div>
    )
} 
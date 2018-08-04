import React from 'react';

export default (props) =>{
    return(
        <div>
            <form onSubmit={(e)=>props.onSubmitLogin(e)}>
                <input
                    type='text'
                    name='login'
                    value = {props.login}
                    placeholder='login..'
                    className='form-control'
                    onChange={(e) => props.OnChange(e)}
                />
                <input
                    type='password'
                    name='password'
                    value = {props.password}
                    placeholder='password..'
                    className='form-control'
                    onChange={(e) => props.OnChange(e)}
                />
                <a href='https://www.google.ru/'>forget ur pass?</a>
                <div className="btn-group btn-submit" role="group">
                    <button
                        type="submit"
                        className="btn btn-secondary"
                        >SUBMIT
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick = {props.onCancelLogin}
                        >CANCEL
                    </button>
                </div>
            </form>
        </div>
    )
}
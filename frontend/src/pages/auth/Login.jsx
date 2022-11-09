import React from 'react'
import styles from "./auth.module.scss"
import { BiLogIn } from "react-icons/bi"
import Card from '../../components/card/Card'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className={`container ${styles.auth}`}>
        <Card>
            <div className={styles.form}>
                <div className="--flex-center">
                    <BiLogIn size={30} color="#333"/>
                </div>
                <h2>Login</h2>

                <form action="">
                    <input type="text" placeholder='email' required name='email' />
                    <input type="password" placeholder='password' required name='password' />
                    <button type='submit' className='--btn --btn-primary --btn-block'>Login</button>
                    <form action="">
                        <Link to ="/forgot">Forgot Password</Link>
                        <span className={styles.register}>
                            <Link to="/">Home</Link>
                            <p>&nbsp; Don't have a account? &nbsp;</p>
                            <Link to="/register">Register</Link>
                        </span>
                    </form>
                </form>
            </div>
        </Card>
    </div>
  )
}

export default Login
import React from 'react'
import styles from "./auth.module.scss"
import { BiReset } from "react-icons/bi"
import Card from '../../components/card/Card'
import { Link } from 'react-router-dom'


const Reset = () => {
  return (
    <div className={`container ${styles.auth}`}>
        <Card>
            <div className={styles.form}>
                <div className="--flex-center">
                    <BiReset size={35} color="#333"/>
                </div>
                <h2>Reset Password</h2>

                <form action="">
                    <input type="password" placeholder='New Password' required name='password' />
                    <input type="password" placeholder='Confirm New Password' required name='password' />
                    <button type='submit' className='--btn --btn-primary --btn-block'>Reset Password</button>
                    <form action="">
                        <div className={styles.links}>
                            <Link to="/">Home</Link>
                            <Link to="/login">Login</Link>
                        </div>
                    </form>
                </form>
            </div>
        </Card>
    </div>
  )
}

export default Reset
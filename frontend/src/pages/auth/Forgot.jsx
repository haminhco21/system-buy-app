import React from 'react'
import styles from "./auth.module.scss"
import { AiOutlineMail } from "react-icons/ai"
import Card from '../../components/card/Card'
import { Link } from 'react-router-dom'


const Forgot = () => {
  return (
    <div className={`container ${styles.auth}`}>
        <Card>
            <div className={styles.form}>
                <div className="--flex-center">
                    <AiOutlineMail size={35} color="#333"/>
                </div>
                <h2>Forgot Password</h2>

                <form action="">
                    <input type="text" placeholder='email' required name='email' />                  
                    <button type='submit' className='--btn --btn-primary --btn-block'>Get Reset Email</button>
                    <form action="">
                        <div className={styles.links}>
                            <p>
                            <Link to="/">Home</Link>
                            </p>
                            <p>
                            <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </form>
                </form>
            </div>
        </Card>
    </div>
  )
}

export default Forgot
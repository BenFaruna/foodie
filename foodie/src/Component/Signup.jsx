import React from 'react';
import styles from '../Styles/signup.module.css';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom'

function pag() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className={`col-md-3 ${styles.side}`}>

        </div>
        <div className='col-md-9'>
          <div className='text-center p-5'>
          <h2>Sign Up to Foodie</h2>
          <h4 className='mt-5 mb-5'>Already have an account? <span> <Link to="/Login">Log in</Link></span></h4>
          <Button className={`btn-lg ${styles.bol}`}>Continue with Email</Button>
          </div>

          {/* Form */}
          <div className={styles.form}>
          <form action="" method="post">
           <div className='mb-5'>
            <input type="text" name="" placeholder='First Name' id="" />
            </div>
            <div className='mb-5'>
              <input type="email" name="email" placeholder='Email' id="" />
              </div>
              <div className='mb-5'>
            <input type="password" name="password" placeholder='Password' id="" />
              </div>
              <div className='mb-5'>
              <Button className='btn-lg'> Sign Up</Button>
              </div>
              <p>By creating an account, you automatically <br />
                accept our Terms of Service, Privacy Policy</p>
          </form>
          </div>
        </div>

      </div>

    </div>
      
    </>
  )
}

export default pag;
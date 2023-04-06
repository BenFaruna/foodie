import React from 'react';
import styles from '../Styles/mainpage.module.css';
import Home from '../assests/home.png';
import Category from '../assests/category.png';
import feed from '../assests/feed.png';
import Order from '../assests/order.png';
import Account from '../assests/account.png';
import {Link} from 'react-router-dom';


function Sidebar() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
        <div className={`col-md-1 ${styles.side}`}>
                <ul>
                    <li><img src={Home} className="img-fluid" alt="" width={50}/> <figcaption className={styles.fig}>  <Link to="/Landingpage"> Home</Link>   </figcaption></li>
                    <li><img src={Category}  className="img-fluid" alt="" width={50} /> <figcaption className={styles.fig}>Category</figcaption></li>
                    <li><img src={feed}  className="img-fluid" alt="" width={50} /> <figcaption className={styles.fig}>Feed</figcaption></li>
                    <li><img src={Order} className="img-fluid" alt="" width={50} /> <figcaption className={styles.fig}> <Link to="/Checkoutpage"> Orders</Link> </figcaption></li>
                    <li><img src={Account} className="img-fluid" alt="" width={50}/> <figcaption className={styles.fig}>Account</figcaption></li>
                    
                </ul>
            </div>


        </div>

    </div>
    </>
  )
}

export default Sidebar
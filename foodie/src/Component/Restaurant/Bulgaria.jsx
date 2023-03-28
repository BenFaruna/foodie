import React from 'react';
import {useState} from 'react'; 
// import styles from '../Styles/mainpage.module.css';
import styles from '../Styles/mainpage.module.css';
import Home from '../assests/home.png';
// import Home from '../assests/home.png';
import Category from '../assests/category.png';
import feed from '../assests/feed.png';
import Order from '../assests/order.png';
import Account from '../assests/account.png';
import {Link} from 'react-router-dom';


function Bulgaria () {

    const [emps, setEmps] = useState ( [
        {
            "_id": "642150dedefea0673f3e38f8",
            "name": "Extra Large Boli",
            "description": "6 Large Boli with Beef Peppered Sauce",
            "image": "/boli.png"
        },
        {
            "_id": "642150e4defea0673f3e38fc",
            "name": "Sweet Treats Tray",
            "description": "Chicken Burger, 4 Doughnuts, 2 500ml Milkshakes",
            "image": "/Treattray.png"
        },
        {
            "_id": "642150ebdefea0673f3e3900",
            "name": "Chinese Noodles",
            "description": "A bowl of well garnished Chinese noodles",
            "image": "/noodles.png"
        },
        {
            "_id": "642150f2defea0673f3e3904",
            "name": "Jollof Rice and Chicken",
            "description": "A bowl of Jollof rice chicken with Roasted Chicken",
            "image": "/jollofrice.png"
        },
        {
            "_id": "642150f9defea0673f3e3908",
            "name": "A full bowl of Nkwobi",
            "description": "A bowl of Spiced Nkwobi Garnished with vegetables",
            "image": "/nkwobi.png"
        }
    ] 
    )
    
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

<div className='col-md-11'>            
        {emps.map(  (emp, index)=> 
        (
            <div  className='mt-4' key={index}>
                <div className=' d-flex'>
                <img src={emp.image} alt="" />
                <h3>{emp.name}  </h3> 
                </div>

                <div className='d-flex'>
                <p>{emp.description} </p> 
                </div>

                </div>
        )
        ) 
    }
    </div>
        
    </div>
    </div>
    </>
  )
}

export default Bulgaria
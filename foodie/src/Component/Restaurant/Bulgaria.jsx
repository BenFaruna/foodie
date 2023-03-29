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
import Clicked from '../assests/click.png';
import BulgariaCover from '../assests/bulgaria.png';
import {Link} from 'react-router-dom';


function Bulgaria () {

    const [emps, setEmps] = useState ( [
        {
            "_id": "642150dedefea0673f3e38f8",
            "name": "Extra Large Boli",
            "description": "6 Large Boli with Beef Peppered Sauce",
            "image": "/boli.png",
            "price": "#4550"
        },
        {
            "_id": "642150e4defea0673f3e38fc",
            "name": "Sweet Treats Tray",
            "description": "Chicken Burger, 4 Doughnuts, 2 500ml Milkshakes",
            "image": "/Treattray.png",
            "price": "#4050"
        },
        {
            "_id": "642150ebdefea0673f3e3900",
            "name": "Chinese Noodles",
            "description": "A bowl of well garnished Chinese noodles",
            "image": "/noodles.png",
            "price": "#3500"
        },
        {
            "_id": "642150f2defea0673f3e3904",
            "name": "Jollof Rice and Chicken",
            "description": "A bowl of Jollof rice chicken with Roasted Chicken",
            "image": "/jollofrice.png",
            "price": "#2600"
        },
        {
            "_id": "642150f9defea0673f3e3908",
            "name": "A full bowl of Nkwobi",
            "description": "A bowl of Spiced Nkwobi Garnished with vegetables",
            "image": "/nkwobi.png",
            "price": "#3500"
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
        <div>
            <img src={BulgariaCover} alt="" />
        </div>
    <div className='col-md-4 offset-4 mt-5'>
                            <input type="search"  placeholder='Search in bulgaria foods' name="search" id="" />

                        </div>
         
        {emps.map(  (emp, index)=> 
        (
            <div  className='mt-4' key={index}>
                <div className=' d-flex'>
                    <div>
                <img src={emp.image} alt="" />
                    </div>
                    <div>
                        <li><h3>{emp.name}  </h3></li>
                        <li><p>{emp.description} </p></li>
                        <li className='float-end'><h5>{emp.price}</h5> </li>
                        
                        <li><img src={Clicked} className="mt-5" alt="" /></li>

                    </div>
                
                 
                </div>

                <div className=''>
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
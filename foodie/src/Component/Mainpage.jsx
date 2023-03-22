import React from 'react';
import styles from '../Styles/mainpage.module.css';
import Home from '../assests/home.png';
import Category from '../assests/category.png';
import feed from '../assests/feed.png';
import Order from '../assests/order.png';
import Account from '../assests/account.png';
import cr from "../assests/cr.png";
import kfc from "../assests/kfc.png";
import bul from "../assests/bul.png";
import cafe from "../assests/cafe.png";
import keje from "../assests/keje.png";
import wells from "../assests/wells.png";
import food from "../assests/food.png";
import delivery from "../assests/delivery.png";
import line from "../assests/Line 6.png";
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';


function MainPage() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className={`col-md-1 ${styles.side}`}>
                <ul>
                    <li><img src={Home} className="img-fluid" alt="" width={50}/> <figcaption className={styles.fig}>  <Link to="/Homepage"> Home</Link>   </figcaption></li>
                    <li><img src={Category}  className="img-fluid" alt="" width={50} /> <figcaption className={styles.fig}>Category</figcaption></li>
                    <li><img src={feed}  className="img-fluid" alt="" width={50} /> <figcaption className={styles.fig}>Feed</figcaption></li>
                    <li><img src={Order} className="img-fluid" alt="" width={50} /> <figcaption className={styles.fig}>Orders</figcaption></li>
                    <li><img src={Account} className="img-fluid" alt="" width={50}/> <figcaption className={styles.fig}>Account</figcaption></li>
                    
                </ul>
            </div>
            <div className='col-md-11'>
                <div className='row'>
                    <div className='row'>
                        <div className='col-md-4 offset-4 mt-5'>
                            <input type="search"  placeholder='search' name="search" id="" />

                        </div>

                    </div>
                    <div className='col-md-3'>
                        <div><img src={food} className="img-fluid" alt="" /><figcaption>Food</figcaption></div>
                    </div>
                    <div className='col-md-3 offset-2'>
                        <div><img src={delivery} className="img-fluid" alt="" /><figcaption>Delivery</figcaption></div>
                    </div>


                </div>
            <div className='row'>
            <h3 className='text-center mt-4 mb-4'>Restaurants You might like</h3>
        <div className='col-3'>
  <div class=""><img src={cr}  className="img-fluid" alt="chicken" /></div>
        <figcaption className='text-align-center'>Chicken Republic</figcaption>
        </div>
        <div className='col-3'>
  <div class=""><img src={kfc} className="img-fluid" alt="liness" /></div>
    <figcaption className='text-align-center'>KFC</figcaption>
        </div>
        <div className='col-3'>
  <div class=""><img src={bul} className="img-fluid" alt="liness" /></div>
  <figcaption className='text-align-center'>Bulgaria Foods</figcaption>
        </div>
        <div className='row mt-5'>
            <div className='col-3'>
  <div class=""><img src={cafe} className="img-fluid" alt="liness" /></div>
  <figcaption className='text-align-center'>Cafe La Roca</figcaption>
            </div>
            <div className='col-3'>
  <div class=""><img src={keje} className="img-fluid" alt="liness" /></div>
  <figcaption className='text-align-center'>Keji Grills</figcaption>
            </div>
            <div className='col-3'>
  <div class=""><img src={wells} className="img-fluid" alt="liness" />
  <figcaption className='text-align-center'>Wells</figcaption>
  </div>
            </div>
        </div>
    </div>
    <div>
        <img src={line} className="img-fluid" alt="liness" />
    </div>

    <div className='row'>
        <h3 className='text-center mt-4 mb-4'>Top Cities in Nigeria</h3>
        <div className='col-3'>
        <Button className={`btn-lg ${styles.bol}`}>Lagos</Button>
        </div>
        <div className='col-3'>
        <Button className={`btn-lg ${styles.bol}`}>Abuja</Button>
        </div>
        <div className='col-3'>
        <Button className={`btn-lg ${styles.bol}`}>Port-Harcourt</Button>
        </div>
        <div className='row mt-5'>
        <div className='col-3'>
        <Button className={`btn-lg ${styles.bol}`}>Ibadan</Button>
        </div>
        <div className='col-3'>
        <Button className={`btn-lg ${styles.bol}`}>Ondo</Button>
        </div>
        <div className='col-3'>
        <Button className={`btn-lg ${styles.bol}`}>Enugu</Button>
        </div>
            </div>
    </div>

    <div className='row mt-4'>
        <h3 className='text-center mt-4 mb-4'>Top Category</h3>
        <div className='col-3'>
        <Button className={`btn-lg ${styles.bol}`}>Amala</Button>
        </div>
        <div className='col-3'>
        <Button className={`btn-lg ${styles.bol}`}>Asian</Button>
        </div>
        <div className='col-3'>
        <Button className={`btn-lg ${styles.bol}`}>Burgers</Button>
        </div>
        <div className='row mt-5'>

        <div className='col-3'>
        <Button className={`btn-lg ${styles.bol}`}>Chicken</Button>
        </div>
        <div className='col-3'>
        <Button className={`btn-lg ${styles.bol}`}>Rice</Button>
        </div>
        <div className='col-3'>
        <Button className={`btn-lg ${styles.bol}`}>Desserts</Button>
        </div>
            </div>
    </div>

    <div>
        <img src={line} className="img-fluid" alt="liness" />
    </div>

            </div>
        </div>
        
        

    </div>
        
    </>
    
  )
}

export default MainPage
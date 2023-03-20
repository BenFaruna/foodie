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
import line from "../assests/Line 6.png";
import { Button } from 'reactstrap';


function MainPage() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className={`col-md-3 ${styles.side}`}>
                <ul>
                    <li><img src={Home} className="img-fluid" alt="" /> <figcaption className={styles.fig}>Home</figcaption></li>
                    <li><img src={Category}  className="img-fluid" alt="" /> <figcaption className={styles.fig}>Category</figcaption></li>
                    <li><img src={feed}  className="img-fluid" alt="" /> <figcaption className={styles.fig}>Feed</figcaption></li>
                    <li><img src={Order} className="img-fluid" alt="" /> <figcaption className={styles.fig}>Orders</figcaption></li>
                    <li><img src={Account} className="img-fluid" alt="" /> <figcaption className={styles.fig}>Account</figcaption></li>
                    
                </ul>
            </div>
            <div className='col-md-9'>
            <div className='row'>
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
        <Button className='btn-light btn-lg'>Lagos</Button>
        </div>
        <div className='col-3'>
        <Button className='btn-light btn-lg'>Abuja</Button>
        </div>
        <div className='col-3'>
        <Button className='btn-light btn-lg'>Port-Harcourt</Button>
        </div>
        <div className='row mt-5'>
        <div className='col-3'>
        <Button className='btn-light btn-lg'>Ibadan</Button>
        </div>
        <div className='col-3'>
        <Button className='btn-light btn-lg'>Ondo</Button>
        </div>
        <div className='col-3'>
        <Button className='btn-light btn-lg'>Enugu</Button>
        </div>
            </div>
    </div>

    <div className='row mt-4'>
        <h3 className='text-center mt-4 mb-4'>Top Category</h3>
        <div className='col-3'>
        <Button className='btn-light btn-lg'>Amala</Button>
        </div>
        <div className='col-3'>
        <Button className='btn-light btn-lg'>Asian</Button>
        </div>
        <div className='col-3'>
        <Button className='btn-light btn-lg'>Burgers</Button>
        </div>
        <div className='row mt-5'>

        <div className='col-3'>
        <Button className='btn-light btn-lg'>Chicken</Button>
        </div>
        <div className='col-3'>
        <Button className='btn-light btn-lg'>Rice</Button>
        </div>
        <div className='col-3'>
        <Button className='btn-light btn-lg'>Desserts</Button>
        </div>
            </div>
    </div>


            </div>
        </div>
        
        

    </div>
        
    </>
    
  )
}

export default MainPage
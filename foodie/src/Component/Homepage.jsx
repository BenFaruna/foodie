import React from 'react';
import styles from "../Styles/homepage.module.css";
import { Button } from 'reactstrap';
import veg from '../assests/Vegs.jpg';
import line from "../assests/Line 6.png";
import cr from "../assests/cr.png";
import kfc from "../assests/kfc.png";
import bul from "../assests/bul.png";
import cafe from "../assests/cafe.png";
import keje from "../assests/keje.png";
import wells from "../assests/wells.png";
import bike from "../assests/bike.png";
import team from "../assests/team.png";


function Homepage() {
    return (
        <>
    <div className={`container-fluid ${styles.body1}`} >
        <div className='row'>
            <div className='col-6 mt-3'>
                <h1>FOODIE</h1>
                </div>
            <div className='col-6 mt-3'>
                <Button type='button' className='btn-light btn-lg' > Get Started</Button>
            </div>
    </div>
    
    <div className='row'>
        <div className='col-6'>
            <img src={veg} alt="vegss"  width={200} className="img-fluid" />
        </div>
        <div className='col-6'>
            <h3>Welcome</h3> <br />
            <h2>Food delivery and <br/> restaurant scouting</h2>
        </div>
    </div>

    <div>
        <img src={line} className="img-fluid" alt="liness" />
    </div>

    <div>
        <h3 className='text-center mb-5'>Trending Restaurants in Nigeria</h3>
    </div>

    <div className='row'>
        <div className='col-4'>
  <div class=""><img src={cr}  className="img-fluid" alt="chicken" /></div>
        <figcaption className='text-align-center'>Chicken Republic</figcaption>
        </div>
        <div className='col-4'>
  <div class=""><img src={kfc} className="img-fluid" alt="liness" /></div>
    <figcaption className='text-align-center'>KFC</figcaption>
        </div>
        <div className='col-4'>
  <div class=""><img src={bul} className="img-fluid" alt="liness" /></div>
  <figcaption className='text-align-center'>Bulgaria Foods</figcaption>
        </div>
        <div className='row mt-5'>
            <div className='col-4'>
  <div class=""><img src={cafe} className="img-fluid" alt="liness" /></div>
  <figcaption className='text-align-center'>Cafe La Roca</figcaption>
            </div>
            <div className='col-4'>
  <div class=""><img src={keje} className="img-fluid" alt="liness" /></div>
  <figcaption className='text-align-center'>Keji Grills</figcaption>
            </div>
            <div className='col-4'>
  <div class=""><img src={wells} className="img-fluid" alt="liness" />
  <figcaption className='text-align-center'>Wells</figcaption>
  </div>
            </div>
        </div>
    </div>

    <div>
        <img src={line} className="img-fluid" alt="liness" />
    </div>

    <div className='row mt-3'>
        <div className='col-4'>
        <div class=""><img src={bike} className="img-fluid" alt="liness" /></div>
        <figcaption className='text-align-center'>Fast Delivery</figcaption>
        </div>
        <div className='col-4 offset-4'>
        <div class=""><img src={team} className="img-fluid" alt="liness" /></div>
        <figcaption className='text-align-center'>Become a Dispatch</figcaption>
        <figcaption className='text-align-center'>Become your own boss! Enjoy flexibility, freedom and competitive earnings by delivering for Foodie.</figcaption>
        </div>
    </div>

    <div className='row'>
        <h3 className='text-center mt-4 mb-4'>Top Cities in Nigeria</h3>
        <div className='col-3'>
        <Button className='btn-light btn-lg'>Ibadan</Button>
        </div>
        <div className='col-3'>
        <Button className='btn-light btn-lg'>Lagos</Button>
        </div>
        <div className='col-3'>
        <Button className='btn-light btn-lg'>Abuja</Button>
        </div>
        <div className='col-3'>
        <Button className='btn-light btn-lg'>Port-Harcourt</Button>
        </div>
    </div>

    <div className='row mt-4'>
        <h3 className='text-center mt-4 mb-4'>Top Category</h3>
        <div className='col-3'>
        <Button className='btn-light btn-lg'>African</Button>
        </div>
        <div className='col-3'>
        <Button className='btn-light btn-lg'>Asian</Button>
        </div>
        <div className='col-3'>
        <Button className='btn-light btn-lg'>Pastries</Button>
        </div>
        <div className='col-3'>
        <Button className='btn-light btn-lg'>Grilled Foods</Button>
        </div>
    </div>

        <h3 className='text-center mt-4 mb-4' >See all categories</h3>


    <div>
        <img src={line} className="img-fluid" alt="liness" />
    </div>

    {/* footer */}
        <footer>
    <div className='row'>
        <div className='col-4'>
            <ul>
                <li><h3>Foodie</h3></li>
                <li>About Us</li>
                <li>FAQ</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className='col-4'>
            <ul>
                <li><h3>Follow Us</h3></li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
            </ul>
        </div>
        <div className='col-4'>
            <ul>
                <li><h3>Terms and condition</h3></li>
                <li>Privacy Policy</li>
                <li>FAQ</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>
        </div>


        


    </div>
        </footer>
    


    </div>
    </>
  )
}

export default Homepage
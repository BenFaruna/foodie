import React from 'react';
import styles from "../Styles/homepage.module.css";
import { Button } from 'reactstrap';
import veg from '../assests/Vegs.jpg';
import line from "../assests/Line 6.png";


function Homepage() {
  return (
    <>
    <div className='container-fluid'>
    <div className={styles.body1}>
    <h1>FOODIE</h1>
    <Button color='link' > Get Started</Button>
    <div>
    <img src={veg} alt="vegss"  width={200} className="img-fluid" />
    <h3>Welcome</h3> <br />
    <h2>Food delivery and <br/> resturant scouting</h2>
    </div>
    <div>
        <img src={line} alt="liness" />
    </div>
    <div>
        <h3 className='text-center'>Trending Resturants in Nigeria</h3>
    </div>
    <div>
    <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight">Flex item 1</div>
  <div class="p-2 bd-highlight">Flex item 2</div>
  <div class="p-2 bd-highlight">Flex item 3</div>
</div>
<div class="d-flex flex-row">
  <div class="p-2 bd-highlight">Flex item 1</div>
  <div class="p-2 bd-highlight">Flex item 2</div>
  <div class="p-2 bd-highlight">Flex item 3</div>
</div>
    </div>

    </div>
    </div>
    </>
  )
}

export default Homepage
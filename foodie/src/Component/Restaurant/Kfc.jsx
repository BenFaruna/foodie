import React from 'react';
import { useState } from 'react';
import Sidebars from '../Sidebar';
import Clicked from '../assests/click.png';
import Kfccover from '../assests/kfccover.png';


function Kfc() {

    const [emps, setEmps] = useState ( [  
        {
            "_id": "642150bfdefea0673f3e38e4",
            "name": "Extra Large Fries",
            "description": "Fried Potatoes perfectly paired with Our secret hot sauce",
            "image": "/chips.png",
            "price": "#1350.00"

        },
        {
            "_id": "642150c5defea0673f3e38e8",
            "name": "Zinger Triple Threat Friday",
            "description": "three Delicious Burgers with 40 percent Discount every Friday",
            "image": "/burger.png",
            "price": "#4050.00"

        },
        {
            "_id": "642150cadefea0673f3e38ec",
            "name": "MVP Box",
            "description": "Enjoy 3 pieces of deep fried Chicken, 1 Regular Chips and 500ml Pepsi",
            "image": "/mvp.png",
            "price": "#4500.00"

        },
        {
            "_id": "642150d1defea0673f3e38f0",
            "name": "Double Zinger Burger Meal",
            "description": "1 Double Zinger Burger, Regular chips,  500ml Pepsi",
            "image": "/pepsi.png",
            "price": "#4600.00"

        },
        {
            "_id": "642150d7defea0673f3e38f4",
            "name": "21 Pieces KFC Bucket",
            "description": "T21 Pieces of Hot and Crispy Original Chicken with 1.5L Pepsi",
            "image": "/pot.png",
            "price": "#22,000.00"

        }

      ] 
        )
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-1'>
                <Sidebars/>
            </div>
            <div className='col-md-11'>   
        <div>
            <img src={Kfccover} alt="" />
        </div>
    <div className='col-md-4 offset-4 mt-5'>
                            <input type="search"  placeholder='Search in KFC' name="search" id="" />

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

export default Kfc
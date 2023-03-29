import React, { Component } from 'react';
import styles from '../Styles/checkoutpage2.css';
import {Link} from 'react-router-dom';

class Checkoutpage2 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       phoneNumber: "234-5555555555",
       payment1: "Pay in one click",
       payment2: "Mastercard",
       payment3: "Visacard",
       orderQty: "1x",
       orderDes1: "A Bowl of Nkwobi",
       orderDes2: "A Bowl of Jollof Rice and Chicken",
       bill1: "N3,500",
       bill2: "N2,600",
       subTot: "N6,100.00",
       vat: "N432.56",
       deliveryFee: "N350",
       total: "N6,900",
       address: "Lekki, Lagos",
       vendor: "Bulgaria Foods",
       orderID: "N2FC5524"
    }
  }
  
  render() {
    return (
    <div>
      <h2>Checkout</h2>
      {/* codes for the phoneNumber block */}
      <div className='phn-no'>
        <div className="phn-no-1">
            <span>Phone Number</span>
            {/* the phoneNumber property is called here */}
            <div className="phn-no-2">{this.state.phoneNumber}</div>
        </div>
        <div className="phn-no-ed">Edit</div>
      </div>
      {/* codes for the Payment details block*/}
      <div className='pay-det'>
        <div className="pay-det-1">
            <span>Payment Details</span>
            {/* The different payment option properties are called here */}
            <div className="pay-det-2">{this.state.payment1}, {this.state.payment2}, and {this.state.payment3}</div>
        </div>
        <div className="pay-det-ed">Edit</div>
      </div>
      {/* codes for order details block*/}
      <div className='ord-det'>
        <span>Your Order Details</span>
        {/* The different order options tab */}
        <div className="ord-det-tab">
          <div className="ord-det-tab-1">
            {/* the quantity tab */}
            <div className="ord-det-tab-qty">
              <article className="ord-det-tab-qty-1">{this.state.orderQty}</article>
              <article className="ord-det-tab-qty-2">{this.state.orderQty}</article>
            </div>
            {/* the order description tab */}
            <div className="ord-det-tab-des">
              <article className="ord-det-tab-des-1">{this.state.orderDes1}</article>
              <article className="ord-det-tab-des-2">{this.state.orderDes2}</article>
            </div>
            {/* the bills tab */}
            <div className="ord-det-tab-bil">
              <article className="ord-det-tab-bil-1">{this.state.bill1}</article>
              <article className="ord-det-tab-bil-2">{this.state.bill2}</article>
            </div>
          </div>
          {/* subtotal */}
          <div className="ord-det-tab-2">
            <article className="ord-det-tab-sub">SubTotal</article>
            <article className="ord-det-tab-sub-2">{this.state.subTot}</article>
          </div>
          {/* vat */}
          <div className="ord-det-tab-3">
            <article className="ord-det-tab-vat">Vat (7.50%)</article>
            <article className="ord-det-tab-vat-3">{this.state.vat}</article>
          </div>
          {/* delivery fee */}
          <div className="ord-det-tab-4">
            <article className="ord-det-tab-del">Delivery Fee</article>
            <article className="ord-det-tab-del-2">{this.state.deliveryFee}</article>
          </div>
          {/* total */}
          <div className="ord-det-tab-5">
            <article className="ord-det-tab-tot">Total</article>
            <article className="ord-det-tab-tot-2">{this.state.total}</article>
          </div>
          {/* delivery address */}
          <div className="ord-det-tab-6">
            <article className="ord-det-tab-add">Delivery Address: </article>
            <article className="ord-det-tab-add-2">{this.state.address}</article>
          </div>
          {/* vendor */}
          <div className="ord-det-tab-7">
            <article className="ord-det-tab-ven">Vendor: </article>
            <article className="ord-det-tab-ven-2">{this.state.vendor}</article>
          </div>
          {/* order id */}
          <div className="ord-det-tab-8">
            <article className="ord-det-tab-id">Order ID: </article>
            <article className="ord-det-tab-id-2">{this.state.orderID}</article>
          </div>
        </div>
      </div>
      <button>Place Order</button>
    </div>
    )
  }
}

export default Checkoutpage2




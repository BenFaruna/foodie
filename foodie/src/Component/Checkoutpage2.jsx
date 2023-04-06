import React, { Component } from 'react';
import styles from '../Styles/checkoutpage2.module.css';
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
      <div className={`${styles.phn_no}`}>
        <div className={`${styles.phn_no_1}`}>
            <span>Phone Number</span>
            {/* the phoneNumber property is called here */}
            <div className={`${styles.phn_no_2}`}>{this.state.phoneNumber}</div>
        </div>
        <div className={`${styles.phn_no_ed}`}>Edit</div>
      </div>
      {/* codes for the Payment details block*/}
      <div className={`${styles.pay_det}`}>
        <div className={`${styles.pay_det_1}`}>
            <span>Payment Details</span>
            {/* The different payment option properties are called here */}
            <div className={`${styles.pay_det_2}`}>{this.state.payment1}, {this.state.payment2}, and {this.state.payment3}</div>
        </div>
        <div className={`${styles.pay_det_ed}`}>Edit</div>
      </div>
      {/* codes for order details block*/}
      <div className={`${styles.ord_det}`}>
        <span>Your Order Details</span>
        {/* The different order options tab */}
        <div className={`${styles.ord_det_tab}`}>
          <div className={`${styles.ord_det_tab_1}`}>
            {/* the quantity tab */}
            <div className={`${styles.ord_det_tab_qty}`}>
              <article className={`${styles.ord_det_tab_qty_1}`}>{this.state.orderQty}</article>
              <article className={`${styles.ord_det_tab_qty_2}`}>{this.state.orderQty}</article>
            </div>
            {/* the order description tab */}
            <div className={`${styles.ord_det_tab_des}`}>
              <article className={`${styles.ord_det_tab_des_1}`}>{this.state.orderDes1}</article>
              <article className={`${styles.ord_det_tab_des_2}`}>{this.state.orderDes2}</article>
            </div>
            {/* the bills tab */}
            <div className={`${styles.ord_det_tab_bil}`}>
              <article className={`${styles.ord_det_tab_bil_1}`}>{this.state.bill1}</article>
              <article className={`${styles.ord_det_tab_bil_2}`}>{this.state.bill2}</article>
            </div>
          </div>
          {/* subtotal */}
          <div className={`${styles.ord_det_tab_2}`}>
            <article className={`${styles.ord_det_tab_sub}`}>SubTotal</article>
            <article className={`${styles.ord_det_tab_ub_2}`}>{this.state.subTot}</article>
          </div>
          {/* vat */}
          <div className={`${styles.ord_det_tab_3}`}>
            <article className={`${styles.ord_det_tab_vat}`}>Vat (7.50%)</article>
            <article className={`${styles.ord_det_tab_vat_3}`}>{this.state.vat}</article>
          </div>
          {/* delivery fee */}
          <div className={`${styles.ord_det_tab_4}`}>
            <article className={`${styles.ord_det_tab_del}`}>Delivery Fee</article>
            <article className={`${styles.ord_det_tab_del_2}`}>{this.state.deliveryFee}</article>
          </div>
          {/* total */}
          <div className={`${styles.ord_det_tab_5}`}>
            <article className={`${styles.ord_det_tab_tot}`}>Total</article>
            <article className={`${styles.ord_det_tab_tot_2}`}>{this.state.total}</article>
          </div>
          {/* delivery address */}
          <div className={`${styles.ord_det_tab_6}`}>
            <article className={`${styles.ord_det_tab_add}`}>Delivery Address: </article>
            <article className={`${styles.ord_det_tab_add_2}`}>{this.state.address}</article>
          </div>
          {/* vendor */}
          <div className={`${styles.ord_det_tab_7}`}>
            <article className={`${styles.ord_det_tab_ven}`}>Vendor: </article>
            <article className={`${styles.ord_det_tab_ven_2}`}>{this.state.vendor}</article>
          </div>
          {/* order id */}
          <div className={`${styles.ord_det_tab_8}`}>
            <article className={`${styles.ord_det_tab_id}`}>Order ID: </article>
            <article className={`${styles.ord_det_tab_id_2}`}>{this.state.orderID}</article>
          </div>
        </div>
      </div>
      <button>Place Order</button>
    </div>
    )
  }
}

export default Checkoutpage2




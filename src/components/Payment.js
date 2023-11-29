import React from 'react'

const Payment = () => {
     return (
          <section className="pay-container">
               <h2 className="heading">Buy course</h2>
               <div className="pay-wrapper">
                    <div className="payment-section orange">
                         <img src="images/orange.png" alt="Orange Logo" />
                         <input type="text" name="name" placeholder="Account name" />
                         <input type="number" name="phone" placeholder="Phone Number" />
                         <input type="number" name="amount" placeholder="Amount" />
                         <button type="submit" className="btn btn-orange">Pay with Orange</button>
                    </div>

                    <div className="payment-section mtn">
                         <img src="images/mtn.png" alt="MTN Logo" />
                         <input type="text" name="name" placeholder="Account name" />
                         <input type="number" name="phone" placeholder="Phone Number" />
                         <input type="number" name="amount" placeholder="Amount" />
                         <button type="submit" className="btn btn-mtn">Pay with MTN</button>
                    </div>
               </div>
          </section>
     )
}

export default Payment

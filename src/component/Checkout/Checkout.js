import React from 'react';
const Checkout = () => {
    return (
        <>
        <h1>Enter Information for Booking Services!</h1>
       <div className='form-container'>
       <form className='input-group'>
                    
                    <div className="input-group">
                        <label htmlFor='text' > Your Name</label>
                        <input type="text" name="text" id="" required />
                    </div> 
                    <div className="input-group">
                        <label htmlFor='text' >Which Service Do you Want?</label>
                        <input type="text" name="text" id="" required />
                    </div> 
                    <div className="input-group">
                        <label htmlFor='number' > Your Phone Number</label>
                        <input type="number" name="number" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='email'>Your Email</label>
                        <input  type="email" name="email" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Submit" />

                </form>
       </div>
       </>
    );
};

export default Checkout;
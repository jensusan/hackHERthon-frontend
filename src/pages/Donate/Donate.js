import {Wrapper} from './Donate-styles'

const Donate = () => {
    return (
        <Wrapper>
            <h2>Donation Information</h2>
            <h4>Amount</h4>
            <div className='amount-btns'>
            <button>$50</button>
            <button>$100</button><button>$150</button><button>$Other</button>
            </div>
            <h4>Type of Donation</h4>
            <label>
                <input type="radio" />One Time Donation
            </label>
            <label>
                <input type="radio" />Recurring Monthly Donation
            </label>
            
            <h4>Contact Information</h4>
            <label>First Name
                <input type="text" />
            </label>
            <label>Last Name
                <input type="text" />
            </label>
            <h4>Credit Card Information</h4>
            <label>Card Holder Name
                <input type="text" />
            </label>
            <label>Card Account Number
                <input type="text" />
            </label>
            <label>Expiration Date
                <input type="text" />
            </label>
            <label>Security Code
                <input type="text" />
            </label>
            <h4>Billing Address</h4>
            <label>Address
                <input type="text" />
            </label>
            <label>City
                <input type="text" />
            </label>
            <label>State
                <input type="text" />
            </label>
            <label>Zip Code
                <input type="text" />
            </label>
            <input className='donate-btn' type='submit' value='Donate'/>
            <div className="privacy">
            <p>Privacy Policy</p>
            <p>We take precautions to protect your information. We collect credit card or bank account information, names, addresses, and other data related to your transaction when you make a payment through our site. We use this information to process your payment.
            </p>
            </div>


        </Wrapper>
    )
};

export default Donate;
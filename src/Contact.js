import "./Contact.css"
import location from "./images/location-pin.png"
import phone from "./images/phone-call.png"
import mobile from "./images/cell-phone.png"
import clock from "./images/clock.png"

export default function Contact () {
    return (
        <div id="contact">

            <div className="contact-info"> 
                <div className="contact-info-section">
                    <img src={location} alt="" className="contact-image"/>
                    <h3 className="contact-info-text">Nikole Tesle 66, Bijeljina</h3>
                </div>
                <div className="contact-info-section">
                    <img src={phone} alt="" className="contact-image"/>
                    <h3 className="contact-info-text">+387 55 421 990</h3>
                </div>
                <div className="contact-info-section">
                    <img src={mobile} alt="" className="contact-image"/>
                    <h3 className="contact-info-text">+387 66 183 222</h3>
                </div>
                <div className="contact-info-section">
                    <img src={clock} alt="" className="contact-image"/>
                    <h3 className="contact-info-text">Mon - Sun 07:00 - 23:00</h3>
                </div>
            </div>

            <form className="contact-form" method="POST" target="blank" action="https://formspree.io/f/mbjeekqq" id="">
                <div className="form-row">
                    <div className="input-group personal-info" data-id="full-name">
                        <label for="full-name">Your Name</label>
                        <input id="full-name" placeholder="Enter your name" type="text" name="name" required="required"/>
                    </div>
                    <div className="input-group personal-info" data-id="email">
                        <label for="email">Email Adress</label>
                        <input id="full-name" placeholder="Enter your email address" type="email" name="_replyto" required="required"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-group message" data-id="message">
                        <label>Your Message</label>
                        <textarea placeholder="Enter your message" id="message" name="message" required="required" rows="7" minlength="30" />
                    </div>
                </div>
                <button className="send-button" type="submit" id="submit-button">send</button>
            </form>
        </div>
    )
}
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div id="Contact" className="Contact-container">
            <div class='contactContent'>
                    <h1>Contact <span>Us</span></h1>
                    <p>"Get in Touch with Our Legal Team."</p>
                    <div class='contactInfo'>
                        <div class='contactInfoDiv'>
                        <h3><FontAwesomeIcon icon={faPhone} style={{ color: '#e5bb69' }} /><span> Phone : </span></h3>
                        <p>+639271234567 / +421-0101</p>
                        <h3><FontAwesomeIcon icon={faEnvelope} style={{ color: "#e5bb69" }} /><span> Email : </span></h3>
                        <p>lawyers@gmail.com</p>
                        <h3><FontAwesomeIcon icon={faLocationDot} style={{ color: '#e5bb69' }} /><span> Address : </span></h3>
                        <p>PC Hill, Rosary Heights 1, Mabini Street, Cotabato City</p>
                            <iframe 
                                title="Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.1822253449486!2d124.24387102290233!3d7.22004478229875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32563bd7005fa563%3A0x85a2f9280fe1ddae!2sPDEA%20BARMM!5e0!3m2!1sen!2sph!4v1698118551257!5m2!1sen!2sph"
                                width="500"
                                height="400"
                                style={{ border: "1px solid white" }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"/>
                        </div>
                        <div class='contactInfoDiv'>
                        {/* <div class='contactForm'>
                            <form action="/action_page.php">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name.."></input>
                            <label for="Email">Email</label>
                            <input type="text" id="Email" name="Email" placeholder="Your email.." ></input>
                            <label for="Message">Message</label>
                            <textarea type="text" id="Message" rows="4" name="message" placeholder="Message.."></textarea>
                            <input type="submit" value="Submit"></input>
                            </form>
                            </div> */}
                        </div>
                    </div>
            </div>       
        </div>
    );
  }
  export default Contact;
  
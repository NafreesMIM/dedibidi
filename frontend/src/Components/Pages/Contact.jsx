import "./Contact.css";
import contactImage from '../Pictures/contact.jpg';

function Contactform() {
  return (
    <div className="form-container">
      <div className="form-content">
        <img
          src={contactImage} alt="Contact"
          className="contact-image"
        />
        <div className="form-wrapper">
          <h1>Send a message to us!</h1>
          <form>
            <input placeholder="Name" />
            <input placeholder="Email" />
            <input placeholder="Subject" />
            <textarea placeholder="Message" row="4"></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contactform;


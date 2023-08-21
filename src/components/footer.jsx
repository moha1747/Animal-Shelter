import  { useState } from "react";
import "../styles/footer.css";

export const Footer = () => {
  const [submitted, setSubmitted] = useState(false);
  const [validInputs, setValidInputs] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // You can implement your own validation rules here
    const nameInput = event.target.name.value;
    const emailInput = event.target.email.value;
    const messageInput = event.target.message.value;

    const isNameValid = nameInput !== "";
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput); // Basic email validation
    const isMessageValid =
      messageInput.length > 0 && messageInput.length <= 500;

    if (isNameValid && isEmailValid && isMessageValid) {
      setValidInputs(true);
      setSubmitted(true);
    }
  };

  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Contact</h2>
        {submitted && validInputs ? (
          <p>Your submission has been sent. Thank you!</p>
        ) : (
          <form method="post" action="#" onSubmit={handleSubmit}>
            <div className="fields">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>
            <ul className="actions">
              <li>
                <input
                  type="submit"
                  className="btn btn__submit"
                  value="Send a message"
                />
              </li>
            </ul>
          </form>
        )}
        <ul className="contact">
          <li className="icon">
            Happy Place!
            <br />
            1234 Main Street #2894
            <br />
            New York, NY 00000-0000
          </li>
          <li className="icon">(123) 345-6789</li>
          <li className="icon">
            <a href="#">information@HappyPlace.com</a>
          </li>
        </ul>
        <ul className="copyright"></ul>
      </div>
    </section>
  );
};

export default Footer;

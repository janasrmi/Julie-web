import "../styles/home.css";
import "../styles/Contact.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Contact() {
  const bookingLink =
    "https://secure.helloalma.com/providers/julie-attalla/";

  return (
    <div className="contact-page">
      <nav className="navbar">
        <Navbar />
      </nav>

      <main className="contact-main">
        <section className="contact-heading">
          <p className="contact-eyebrow">GET IN TOUCH</p>
          <h1>I'd love to hear from you.</h1>
          <p>
            Have a question about counseling or getting started? Send a message
            below and I’ll get back to you as soon as possible.
          </p>
        </section>

        <section className="contact-form-section">
          <div className="contact-form-card">
            <h2>Get in touch via form</h2>

            <form
                action="https://api.web3forms.com/submit"
                method="POST"
                >
                <input
                    type="hidden"
                    name="access_key"
                    value="57570bbc-5ab8-4480-91f4-4ac1d476b593"
                />

                <input
                    type="hidden"
                    name="subject"
                    value="New Serene Corner Contact Form Submission"
                />

                <input
                    type="hidden"
                    name="from_name"
                    value="Serene Corner Website"
                />

                <div className="form-group full-width">
                    <label htmlFor="name">Name</label>

                    <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                    <label htmlFor="email">Email</label>

                    <input7
                        id="email"
                        type="email"
                        name="email"
                        required
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="phone">Phone</label>

                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                    />
                    </div>
                </div>

                <div className="form-group full-width">
                    <label htmlFor="message">Message</label>

                    <textarea
                    id="message"
                    name="message"
                    required
                    ></textarea>
                </div>

                <button className="send-button" type="submit">
                    Send
                </button>
                </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <div className="logo-icon">🌿</div>

          <div>
            <h3>Serene Corner</h3>
            <p>Counseling</p>
          </div>
        </div>

        <p>Compassionate support for a calmer, more confident life.</p>

        <p className="copyright">
          © {new Date().getFullYear()} Serene Corner Counseling
        </p>
      </footer>
    </div>
  );
}

export default Contact;
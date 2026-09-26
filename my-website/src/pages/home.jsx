import "../styles/home.css";
import chair from "../assets/chair.png";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  const bookingLink =
    "https://secure.helloalma.com/providers/julie-attalla/";

  return (
    <div className="home-page">
      <nav className="navbar">
        <Navbar />
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">INDIVIDUAL THERAPY FOR ADULTS</p>

            <h1>
              Find peace, and imprace growth

            </h1>

            <p className="hero-description">
              Virtual therapy for adults across Texas struggling with anxiety, stress, self-esteem, trauma, and life transitions.
            </p>

            <div className="hero-buttons">
              <a className="primary-button" href={bookingLink}>
                Schedule a Consultation
              </a>

              <a className="text-button" href="#services">
                Explore Services
                <span>→</span>
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="image-background"></div>

            <img
              className="hero-image"
              src={chair}
              alt="A peaceful and comfortable counseling space"
            />

            <div className="image-note">
              <span className="note-icon">✦</span>

              <div>
                <p>Supportive care</p>
                <span>In a calm, welcoming space</span>
              </div>
            </div>
          </div>
        </section>

        <section className="welcome-section" id="about">
          <div className="section-decoration">❧</div>

          <p className="section-label">WELCOME TO SERENE CORNER</p>

          <h2>A gentle space to pause, reflect, and heal.</h2>

          <p>
            Therapy can help you better understand your thoughts, develop
            healthier coping skills, and move forward with greater confidence.
            Together, we can create a path that feels right for you.
          </p>
        </section>

        <section className="services-section" id="services">
          <div className="services-heading">
            <div>
              <p className="section-label">HOW I CAN HELP</p>
              <h2>Support for where you are right now.</h2>
            </div>

            <p className="services-intro">
              Personalized counseling designed around your experiences, needs,
              and goals.
            </p>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <div className="service-icon">✦</div>
              <h3>Anxiety &amp; Stress</h3>
              <p>
                Learn practical strategies to manage overwhelming thoughts and emotions with greater confidence and calm.
              </p>
            </article>

            <article className="service-card">
              <div className="service-icon">☼</div>
              <h3>Trauma Recovery</h3>
              <p>
                Process difficult experiences in a safe and supportive environment while building resilience.

              </p>
            </article>

            <article className="service-card">
              <div className="service-icon">♡</div>
              <h3>Self-Esteem</h3>
              <p>
                Build confidence, challenge self-critical thinking, and develop a healthier relationship with yourself.
              </p>
            </article>

            <article className="service-card">
              <div className="service-icon">◌</div>
              <h3>Life Transitions</h3>
              <p>
                Navigate career changes, relationship challenges, and major life adjustments with clarity and support.
              </p>
            </article>

            <article className="service-card">
              <div className="service-icon">❋</div>
              <h3>Women’s Issues</h3>
              <p>
               Explore self-worth, relationships, life transitions, and the unique challenges women face throughout life.
              </p>
            </article>
             <article className="service-card">
              <div className="service-icon">✧</div>
              <h3>Christian-Based Counseling</h3>
              <p>
                Integrate faith and evidence-based therapy to address challenges while honoring your Christian values.

              </p>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-content">
            <p className="section-label light">READY TO BEGIN?</p>

            <h2>You deserve support that feels safe and personal.</h2>

            <p>
              Take the first step by scheduling a consultation with Serene
              Corner Counseling.
            </p>

            <a className="light-button" href={bookingLink}>
              Book a Session
            </a>
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

export default Home;
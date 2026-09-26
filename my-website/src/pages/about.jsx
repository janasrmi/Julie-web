
import "../styles/about.css";
import Navbar from "../components/Navbar";
import julie from "../assets/julie.png";
import { Link } from "react-router-dom";


function About() {
  const bookingLink =
    "https://secure.helloalma.com/providers/julie-attalla/";

  return (
    <div className="about-page">

      <nav className="navbar">
        <Navbar />
      </nav>

      <main>

        {/* MEET JULIE */}
        <section className="about-hero">
          <div className="about-hero-text">

            <p className="about-label">ABOUT YOUR THERAPIST</p>

            <h1>Meet Julie</h1>

            <div className="about-full-text">
              <p>
                You may be used to carrying everything on your own—managing
                stress, meeting expectations, and showing up for others while
                quietly struggling yourself. Over time, that weight can leave
                you feeling overwhelmed, anxious, stuck, or disconnected. You
                don’t have to navigate it alone.
              </p>

              <p>
                As a first-generation American, I understand how culture,
                family dynamics, personal values, and life transitions can
                shape the way we experience life’s challenges. My goal is to
                provide a warm, supportive space where you feel heard,
                understood, and empowered to create meaningful change.
              </p>

              <p>
                I work with adults experiencing anxiety, stress, burnout,
                trauma, self-esteem concerns, relationship challenges, life
                transitions, women’s issues, and faith-related concerns. My
                approach is collaborative and tailored to your unique needs,
                integrating evidence-based therapies including Cognitive
                Behavioral Therapy (CBT), Acceptance and Commitment Therapy
                (ACT), Dialectical Behavior Therapy (DBT) skills, and
                Emotionally Focused Therapy (EFT) principles.
              </p>

              <p>
                Together, we’ll build practical coping skills, strengthen
                emotional resilience, improve relationships, and help you move
                toward a more balanced, fulfilling life. For those who desire
                it, I also offer Christian counseling that thoughtfully
                integrates faith with evidence-based therapy while honoring
                your personal beliefs and values.
              </p>

              <p>
                Seeking support is a courageous first step, and I would be
                honored to walk alongside you on your journey toward healing
                and growth.
              </p>
            </div>
          </div>

          {/* JULIE IMAGE */}
          <div className="about-image-area">
            <div className="about-image-background"></div>

            <img
              className="about-image"
              src={julie}
              alt="Julie from Serene Corner Counseling"
            />
          </div>
        </section>

        {/* MY APPROACH */}
        <section className="about-values">
          <div className="values-heading">
            <p className="about-label">MY APPROACH</p>

            <h2>What Therapy Looks Like</h2>

            <p className="approach-intro">
              Therapy isn’t about “fixing” you. It’s about helping you better
              understand yourself, strengthen your coping skills, and move
              toward the life you want to live.
            </p>
          </div>

          <div className="values-grid">

            <article className="value-card">
              <div className="value-number">01</div>

              <h3>Identify What’s Keeping You Stuck</h3>

              <p>
                We explore the patterns, thoughts, emotions, and experiences
                that may be making it difficult to move forward.
              </p>
            </article>

            <article className="value-card">
              <div className="value-number">02</div>

              <h3>Develop Practical Coping Skills</h3>

              <p>
                We build tools you can use in everyday life to manage stress,
                regulate emotions, and respond to challenges more effectively.
              </p>
            </article>

            <article className="value-card">
              <div className="value-number">03</div>

              <h3>Create Lasting Change</h3>

              <p>
                We work toward meaningful changes that align with your values,
                goals, relationships, and the life you want to create.
              </p>
            </article>

          </div>
        </section>

        {/* PERSONALIZED CARE */}
        <section className="therapy-details">

          <div className="therapy-details-heading">
            <p className="about-label">PERSONALIZED CARE</p>

            <h2>Therapy is not one-size-fits-all.</h2>
          </div>

          <div className="therapy-details-content">
            <p>
              I believe the most effective counseling experience is one that
              is tailored to your unique needs, goals, and life experiences.
              My goal is to provide a supportive, nonjudgmental space where
              you feel heard, understood, and empowered to create meaningful
              change.
            </p>

            <p>
              I help adults navigate anxiety, stress, burnout, trauma,
              self-esteem concerns, life transitions, relationship challenges,
              and women’s issues through evidence-based therapy that is both
              practical and compassionate.
            </p>
          </div>

        </section>

        {/* HOW THERAPY CAN HELP */}
        <section className="approach-list-section">

          <div className="approach-list-heading">
            <p className="about-label">HOW THERAPY CAN HELP</p>

            <h2>My approach can help you:</h2>
          </div>

          <div className="approach-list">

            <div className="approach-item">
              <span>✦</span>
              <p>Manage anxiety, stress, and overwhelming thoughts</p>
            </div>

            <div className="approach-item">
              <span>✦</span>
              <p>
                Develop healthier coping skills and emotional regulation
              </p>
            </div>

            <div className="approach-item">
              <span>✦</span>
              <p>Improve self-esteem and self-confidence</p>
            </div>

            <div className="approach-item">
              <span>✦</span>
              <p>
                Navigate life transitions and relationship challenges
              </p>
            </div>

            <div className="approach-item">
              <span>✦</span>
              <p>Heal from difficult past experiences</p>
            </div>

            <div className="approach-item">
              <span>✦</span>
              <p>
                Create meaningful change aligned with your values and goals
              </p>
            </div>

          </div>
        </section>

        {/* BOOKING SECTION */}
        <section className="about-callout">

          <div className="callout-content">

            <p className="about-label about-label-light">
              READY TO TAKE THE NEXT STEP?
            </p>

            <h2>You don’t have to navigate it alone.</h2>

            <p>
              Schedule a consultation to learn more about therapy and see
              whether Serene Corner Counseling feels like the right fit for
              you.
            </p>

            <a className="about-light-button" href={bookingLink}>
              Book a Session
            </a>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-brand">
          <div className="logo-icon">🌿</div>

          <div>
            <h3>Serene Corner</h3>
            <p>Counseling</p>
          </div>
        </div>

        <p>
          Compassionate support for a calmer, more confident life.
        </p>

        <p className="copyright">
          © {new Date().getFullYear()} Serene Corner Counseling
        </p>

      </footer>

    </div>
  );
}

export default About;
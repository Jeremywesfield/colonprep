import { useState, useEffect, useRef } from "react";
import OrderModal from "./components/OrderModal";
import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const learnMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.3);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToLearnMore = () => {
    learnMoreRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page">
      {/* Decorative background */}
      <div className="bg-grain" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />

      {/* Nav */}
      <header className="nav">
        <div className="nav-inner">
          <a href="#" className="brand">
            <span className="brand-mark" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M12 2v20M2 12h20" strokeLinecap="round" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </span>
            <span className="brand-name">Placeholder Co.</span>
          </a>
          <nav className="nav-links">
            <a href="#facts">The Facts</a>
            <a href="#how">How it works</a>
            <a href="#science">Science</a>
            <button
              className="btn btn-ghost"
              onClick={() => setModalOpen(true)}
            >
              Order prep
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-eyebrow">
          <span /> A better way to prepare
        </div>
        <h1 className="hero-title">
          Without clean prep, <em>there's nothing to see.</em>
        </h1>
        <p className="hero-sub">
          1 in 5 colonoscopies fail because of inadequate bowel preparation. We
          make sure yours isn't one of them — with a clear plan, the right
          products, and guidance through every step.
        </p>

        {/* Facts grid */}
        <div className="facts" id="facts">
          <article className="fact">
            <div className="fact-number">
              <span className="num">
                20<span className="percent">%</span>
              </span>
            </div>
            <p className="fact-text">
              of all colonoscopies have{" "}
              <strong>inadequate or suboptimal</strong> bowel preparation — and
              the procedure fails because of it.
            </p>
          </article>

          <article className="fact fact-accent">
            <div className="fact-number">
              <span className="num">
                42<span className="percent">–48%</span>
              </span>
            </div>
            <p className="fact-text">
              adenoma miss rate when prep is inadequate. Bad prep dramatically
              increases the chance of missing{" "}
              <strong>polyps and precancerous growths.</strong>
            </p>
          </article>

          <article className="fact">
            <div className="fact-number">
              <span className="num">
                3<span className="percent">×</span>
              </span>
            </div>
            <p className="fact-text">
              higher risk of missing adenomas with poor prep compared with{" "}
              <strong>excellent prep.</strong> Prep quality is the procedure.
            </p>
          </article>
        </div>

        {/* Why it fails */}
        <div className="why-fails">
          <span className="why-label">Why prep fails →</span>
          <span className="why-item">not finishing the prep solution</span>
          <span className="why-dot" aria-hidden="true">
            ·
          </span>
          <span className="why-item">
            solid &amp; high-fiber foods too close to the procedure
          </span>
          <span className="why-dot" aria-hidden="true">
            ·
          </span>
          <span className="why-item">timing and hydration errors</span>
        </div>

        {/* CTAs */}
        <div className="cta-row">
          <button
            className="btn btn-primary"
            onClick={() => setModalOpen(true)}
          >
            Order your prep now
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M5 12h14M13 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Floating Learn more — only visible at top of page */}
      <button
        className={`learn-more ${scrolled ? "learn-more-hidden" : ""}`}
        onClick={scrollToLearnMore}
        aria-label="Learn more"
      >
        <span>Learn more</span>
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M12 5v14M5 12l7 7 7-7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Below the fold — placeholder content */}
      <section className="below" ref={learnMoreRef} id="how">
        <div className="below-inner">
          <div className="section-eyebrow">How it works</div>
          <h2 className="section-title">
            Three steps. Designed around the <em>night before.</em>
          </h2>

          <div className="steps">
            <div className="step">
              <div className="step-num">01</div>
              <h3>Tell us your procedure date</h3>
              <p>
                Lorem ipsum placeholder copy describing the personalization
                step. Replace with your real workflow — calendar sync, doctor's
                instructions, etc.
              </p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <h3>We ship the prep + a clear plan</h3>
              <p>
                Placeholder text for the shipping and instructions module. Add
                your fulfillment timing, what's in the box, and the schedule.
              </p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <h3>Hour-by-hour guidance</h3>
              <p>
                Placeholder — reminders, hydration tracking, what to eat, what
                to avoid, and what success looks like when you get there.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pullquote">
        <div className="below-inner">
          <div className="pullquote-mark" aria-hidden="true">
            "
          </div>
          <blockquote className="pullquote-text">
            Bad prep doesn't delay your colonoscopy. <em>It wastes it.</em>
          </blockquote>
        </div>
      </section>

      <section className="science" id="science">
        <div className="below-inner">
          <div className="section-eyebrow">The science</div>
          <h2 className="section-title">What the research actually says.</h2>
          <p className="science-body">
            Placeholder paragraph for the evidence section. This is where you'll
            add citations, links to the gastroenterology literature, miss-rate
            studies, and the rationale for split-dose prep. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="science-body">
            Second placeholder paragraph. Use this space for plain-language
            explanations of why prep quality matters more than most patients are
            told — and what counts as "excellent" prep versus "adequate" versus
            "inadequate."
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="below-inner footer-inner">
          <div className="footer-brand">
            <span className="brand-mark" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M12 2v20M2 12h20" strokeLinecap="round" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </span>
            <span>Placeholder Co.</span>
          </div>
          <p className="footer-note">
            Educational information, not medical advice. Always follow your
            physician's instructions for your specific procedure.
          </p>
        </div>
      </footer>

      {/* Order modal */}
      <OrderModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;

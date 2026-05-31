import { useState, useRef } from "react";
import "./App.css";

type Plan = {
  id: string;
  name: string;
  when: string;
  price: number;
  cadence: string;
  items: string[];
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    id: "low-residue",
    name: "Low-Residue Box",
    when: "Days 3–1 before",
    price: 49,
    cadence: "3 days of meals",
    items: [
      "Gentle low-fiber breakfasts, lunches & dinners",
      "No seeds, nuts, skins or whole grains",
      "Heat-and-eat — nothing to plan or shop for",
    ],
  },
  {
    id: "complete",
    name: "The Complete Prep",
    when: "Full timeline",
    price: 79,
    cadence: "Everything, on schedule",
    featured: true,
    items: [
      "The Low-Residue Box (3 days)",
      "The Clear-Day Kit (1 day)",
      "Labeled by day so you always know what's next",
      "A gentle recovery meal for afterward",
    ],
  },
  {
    id: "clear-day",
    name: "Clear-Day Kit",
    when: "Day before",
    price: 39,
    cadence: "1 clear-liquid day",
    items: [
      "Clear broths, electrolyte drinks & light gelatin",
      "Strictly no red or purple dyes",
      "Spaced out to keep you comfortable all day",
    ],
  },
];

export default function App() {
  const [selected, setSelected] = useState<string>("complete");
  const [form, setForm] = useState({ name: "", phone: "", date: "" });
  const [submitted, setSubmitted] = useState(false);
  const orderRef = useRef<HTMLDivElement>(null);

  const plan = PLANS.find((p) => p.id === selected)!;
  const valid = form.name.trim().length > 1 && form.phone.trim().length >= 7;

  const choosePlan = (id: string) => {
    setSelected(id);
    orderRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    // TODO: send `form` + `selected` to your backend / scheduling system here.
    setSubmitted(true);
  };

  return (
    <div className="pw-root">
      {/* NAV */}
      <nav className="pw-nav">
        <div className="pw-wrap pw-nav-inner">
          <div className="pw-logo">
            <span className="dot" />
            Prepwell
          </div>
          <div className="pw-nav-links">
            <a href="#how">How it works</a>
            <a href="#plans">Plans</a>
            <a href="#why">Why Prepwell</a>
            <button className="pw-btn" onClick={() => choosePlan(selected)}>
              Order now
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="pw-hero">
        <div className="pw-wrap pw-hero-grid">
          <div>
            <h1 className="pw-anim d2">
              Prep food, delivered <em>right on schedule.</em>
            </h1>
            <p className="pw-anim d3">
              The hardest part of a colonoscopy is the prep. We send the right
              food for each day — so you eat correctly, feel ready, and don't
              have to think about it.
            </p>
            <div className="pw-hero-cta pw-anim d3">
              <button
                className="pw-btn pw-btn-clay"
                onClick={() => choosePlan(selected)}
              >
                Find my plan
              </button>
              <a className="pw-btn pw-btn-ghost" href="#how">
                See how it works
              </a>
            </div>
            <div className="pw-trust pw-anim d4">
              <div>
                <span className="chk">✓</span> Dietitian-designed menus
              </div>
              <div>
                <span className="chk">✓</span> Timed to your procedure
              </div>
              <div>
                <span className="chk">✓</span> No red or purple dyes
              </div>
            </div>
          </div>

          <div className="pw-hero-card pw-anim d4">
            <h3>Your prep, day by day</h3>
            <p className="sub">Delivered to match your procedure date.</p>
            <div className="pw-mini-step">
              <div className="pw-mini-num">3</div>
              <div>
                <b>Three days before — low-residue meals</b>
                <small>Gentle, low-fiber food that's easy to digest.</small>
              </div>
            </div>
            <div className="pw-mini-step">
              <div className="pw-mini-num">1</div>
              <div>
                <b>The day before — clear liquids</b>
                <small>
                  Broths, electrolytes and light gelatin, spaced out.
                </small>
              </div>
            </div>
            <div className="pw-mini-step clay">
              <div className="pw-mini-num">✓</div>
              <div>
                <b>After — a gentle recovery meal</b>
                <small>Something kind to your system when it's over.</small>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HOW IT WORKS */}
      <section className="pw-section" id="how">
        <div className="pw-wrap">
          <div className="pw-section-head">
            <h2>Three steps, zero guesswork</h2>
            <p>
              You tell us when your procedure is. We do the planning, shopping,
              and timing.
            </p>
          </div>
          <div className="pw-timeline">
            <div className="pw-tl-card">
              <div className="glyph">🗓️</div>
              <div className="pw-tl-tag">Step one</div>
              <h3>Pick a plan</h3>
              <p>
                Choose the box that fits your prep, and tell us your procedure
                date. That's all we need to get started.
              </p>
            </div>
            <div className="pw-tl-card">
              <div className="glyph">📦</div>
              <div className="pw-tl-tag">Step two</div>
              <h3>We deliver on time</h3>
              <p>
                Everything arrives labeled by day, so the right food is always
                ready exactly when you need it.
              </p>
            </div>
            <div className="pw-tl-card">
              <div className="glyph">🌿</div>
              <div className="pw-tl-tag">Step three</div>
              <h3>Prep with confidence</h3>
              <p>
                Follow the simple day-by-day cards. No diet research, no
                last-minute store runs, no second-guessing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="pw-section" id="plans">
        <div className="pw-wrap">
          <div className="pw-section-head">
            <h2>Choose your prep plan</h2>
            <p>Tap a plan to select it — then add your details below.</p>
          </div>
          <div className="pw-plans">
            {PLANS.map((p) => (
              <div
                key={p.id}
                className={`pw-plan${p.featured ? " featured" : ""}${
                  selected === p.id ? " selected" : ""
                }`}
                onClick={() => setSelected(p.id)}
              >
                {p.featured && <div className="pw-plan-flag">Most chosen</div>}
                <div className="pw-radio" />
                <h3>{p.name}</h3>
                <div className="when">{p.when}</div>
                <div className="price">
                  ${p.price} <small>· {p.cadence}</small>
                </div>
                <ul>
                  {p.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                <button
                  className={`pw-btn${p.featured ? " pw-btn-clay" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    choosePlan(p.id);
                  }}
                >
                  Select &amp; order
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="pw-section" id="why">
        <div className="pw-wrap">
          <div className="pw-band">
            <div>
              <span className="ico">🥣</span>
              <h4>Designed for prep</h4>
              <p>Menus built around low-residue and clear-liquid guidelines.</p>
            </div>
            <div>
              <span className="ico">⏱️</span>
              <h4>Timed to you</h4>
              <p>Boxes scheduled backward from your procedure date.</p>
            </div>
            <div>
              <span className="ico">🚫</span>
              <h4>Nothing off-limits sneaks in</h4>
              <p>No nuts, seeds, skins, or red and purple dyes — ever.</p>
            </div>
            <div>
              <span className="ico">☎️</span>
              <h4>Real people too</h4>
              <p>
                Prefer to talk it through? A quick call still works any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ORDER */}
      <section className="pw-section" ref={orderRef} id="order">
        <div className="pw-wrap">
          <div className="pw-order">
            {!submitted ? (
              <>
                <aside className="pw-order-aside">
                  <h2>Place your order</h2>
                  <p>
                    Just a couple of details and we'll take it from here. We'll
                    call to confirm timing.
                  </p>
                  <div className="pw-summary">
                    <div className="row">
                      <span>Plan</span>
                      <span>{plan.name}</span>
                    </div>
                    <div className="row">
                      <span>Covers</span>
                      <span>{plan.cadence}</span>
                    </div>
                    <div className="row total">
                      <span>Total</span>
                      <span>${plan.price}</span>
                    </div>
                  </div>
                </aside>

                <form className="pw-form" onSubmit={handleSubmit}>
                  <h3>Your details</h3>
                  <p className="lead">We'll confirm everything by phone.</p>

                  <div className="pw-field">
                    <label htmlFor="plan">Plan</label>
                    <select
                      id="plan"
                      value={selected}
                      onChange={(e) => setSelected(e.target.value)}
                    >
                      {PLANS.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} — ${p.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="pw-field">
                    <label htmlFor="name">Full name</label>
                    <input
                      id="name"
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={update("name")}
                    />
                  </div>

                  <div className="pw-row2">
                    <div className="pw-field">
                      <label htmlFor="phone">Phone number</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={form.phone}
                        onChange={update("phone")}
                      />
                    </div>
                    <div className="pw-field">
                      <label htmlFor="date">Procedure date</label>
                      <input
                        id="date"
                        type="date"
                        value={form.date}
                        onChange={update("date")}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="pw-btn pw-btn-clay"
                    disabled={!valid}
                  >
                    Confirm my order
                  </button>
                </form>
              </>
            ) : (
              <div className="pw-done">
                <div className="seal">✓</div>
                <h2>Thank you, {form.name.split(" ")[0]}!</h2>
                <p>
                  Your order is in. We'll call you at{" "}
                  <strong>{form.phone}</strong> shortly to confirm delivery
                  timing around your procedure.
                </p>
                <div className="recap">
                  <div>
                    <small>Plan</small>
                    <b>{plan.name}</b>
                  </div>
                  <div>
                    <small>Total</small>
                    <b>${plan.price}</b>
                  </div>
                  {form.date && (
                    <div>
                      <small>Procedure</small>
                      <b>
                        {new Date(form.date + "T00:00").toLocaleDateString()}
                      </b>
                    </div>
                  )}
                </div>
                <div>
                  <button
                    className="pw-btn pw-btn-ghost"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", phone: "", date: "" });
                    }}
                  >
                    Place another order
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pw-footer">
        <div className="pw-wrap pw-footer-inner">
          <div className="pw-logo" style={{ fontSize: "1.1rem" }}>
            <span className="dot" />
            Prepwell
          </div>
          <div>
            Questions? Call us at (555) 000-0000 · © {new Date().getFullYear()}{" "}
            Prepwell
          </div>
        </div>
      </footer>
    </div>
  );
}

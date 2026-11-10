import React, { useState } from "react";

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First item open by default like screenshot

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => (prev === index ? null : index));
  };

  const handleClaimClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetUrl =
      "https://giftclick.org/aff_c?offer_id=4258&aff_id=190937";
    try {
      const win = window.open(targetUrl, "_blank", "noopener,noreferrer");
      if (!win || win.closed || typeof win.closed === "undefined") {
        window.location.href = targetUrl;
      }
    } catch {
      window.location.href = targetUrl;
    }
  };

  const faqs = [
    {
      question: "How do I get my discount code?",
      answer:
        "Once you complete the required number of sponsor deals, your unique $500 Sam's Club reward code will be sent immediately to the email address you provide.",
    },
    {
      question: "What are Deals?",
      answer:
        "Deals are sponsor promotions, free trials, surveys, or apps from our brand partners. Completing the required number unlocks your full reward value.",
    },
    {
      question: "Can I use the coupon online or in stores?",
      answer:
        "Yes! The digital $500 reward code can be redeemed online at samsclub.com or used directly at any physical Sam's Club warehouse location nationwide.",
    },
  ];

  return (
    <div className="container" id="app-container">
      {/* Brand Header */}
      <div className="header" id="brand-header">
        <div className="brand-box" id="brand-box">
          <img
            src="/sams-club-logo.svg"
            alt="Sam's Club"
            className="brand-logo-img sams-club-logo-img"
            id="sams-club-logo"
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-content" id="main-content-section">
        <h1 className="promo-title" id="promo-headline">
          Get up to <span className="promo-brand-highlight">$500</span><br />
          Discount Code
        </h1>

        {/* 3 Step Cards */}
        <div className="steps-container" id="steps-list">
          {/* Step 1 */}
          <div className="step-card" id="step-1-card">
            <div className="step-badge" id="step-1-badge">
              01
            </div>
            <div className="step-label" id="step-1-label">
              CLICK "START NOW"
            </div>
          </div>

          {/* Step 2 */}
          <div className="step-card" id="step-2-card">
            <div className="step-badge" id="step-2-badge">
              02
            </div>
            <div className="step-label" id="step-2-label">
              COMPLETE 3–5 DEALS
            </div>
          </div>

          {/* Step 3 */}
          <div className="step-card" id="step-3-card">
            <div className="step-badge" id="step-3-badge">
              03
            </div>
            <div className="step-label" id="step-3-label">
              RECEIVE YOUR COUPON
            </div>
          </div>
        </div>

        {/* Primary CTA Button */}
        <div className="btn-container" id="claim-btn-container">
          <a
            href="https://giftclick.org/aff_c?offer_id=4258&aff_id=190937"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClaimClick}
            className="claim-button"
            id="claim-now-button"
          >
            <span>START NOW</span>
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        {/* Social Proof & Instructions */}
        <div className="trust-card" id="trust-card">
          <div className="trust-badge" id="trust-badge">
            <span className="check-box-icon" aria-hidden="true">✓</span>
            <span className="trust-text">50,000+ Verified Users</span>
          </div>
          <div className="trust-stars" id="trust-stars">
            <span className="star-icons">★★★★★</span>
            <span className="rating-score">4.8/5</span>
          </div>
        </div>


        {/* FAQ Section */}
        <div className="faq-section" id="faq-section">
          <div className="faq-card" id="faq-card">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`faq-item ${isOpen ? "open" : ""}`}
                  id={`faq-item-${index}`}
                >
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    id={`faq-btn-${index}`}
                  >
                    <span className={`faq-question-text ${isOpen ? "highlight" : ""}`}>
                      {faq.question}
                    </span>
                    <span className={`faq-chevron ${isOpen ? "rotated" : ""}`} aria-hidden="true">
                      ⌄
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer-content" id={`faq-answer-${index}`}>
                      <p className="faq-answer-text">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

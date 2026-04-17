export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fff7f2" }}>

      {/* HERO SECTION */}
      <section style={{ padding: "60px 20px", textAlign: "center", backgroundColor: "#ffefe6" }}>
        <h1 style={{ color: "#d2691e", fontSize: "36px" }}>
          Yum Rosie’s Cakes & Pastries 🎂
        </h1>

        <p style={{ fontSize: "18px", marginTop: "10px" }}>
          Learn how to bake cakes, puff puff, and small chops in 30 days — even if you are a complete beginner.
        </p>

        <a href="https://selar.com/62771693d7" style={{ display: "inline-block", marginTop: "20px", padding: "14px 24px", backgroundColor: "#ff7a00", color: "#fff", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}>
          Enroll Now on Selar 💰
        </a>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section style={{ padding: "40px 20px" }}>
        <h2>What You Will Learn 🍰</h2>
        <ul>
          <li>How to bake soft cakes from scratch</li>
          <li>Puff puff & small chops mastery</li>
          <li>Correct measurements (no more failed baking)</li>
          <li>How to start selling your baked products</li>
        </ul>
      </section>

      {/* CERTIFICATE */}
      <section style={{ padding: "60px 20px", textAlign: "center", backgroundColor: "#fff" }}>
        <h2>Get Certified 🎓</h2>
        <p>After your 30-day practice, you receive your certificate.</p>

        <img src="/certificate.png" alt="Certificate" style={{ width: "100%", maxWidth: "500px", marginTop: "20px" }} />

        <a href="/certificate.png" download style={{ display: "inline-block", marginTop: "20px", padding: "12px 20px", backgroundColor: "#28a745", color: "#fff", borderRadius: "6px", textDecoration: "none" }}>
          Download Your Certificate
        </a>
      </section>

      {/* FAQ */}
      <section style={{ padding: "40px 20px" }}>
        <h2>Frequently Asked Questions ❓</h2>

        <h4>What if I have never baked before?</h4>
        <p>This course is designed for complete beginners. You will be guided step by step.</p>

        <h4>Why do my cakes always fail?</h4>
        <p>Most beginners use wrong measurements. This course fixes that.</p>

        <h4>Do I need an oven?</h4>
        <p>No. You can start with simple methods from home.</p>

        <h4>Can I really make money from this?</h4>
        <p>Yes. Many beginners start selling even before finishing the course.</p>

        <h4>How do I access the course?</h4>
        <p>Immediately after payment, you get access on your phone.</p>

        <h4>Will I get a certificate?</h4>
        <p>Yes, after completing your 30-day practice.</p>

        <h4>What if I am too busy?</h4>
        <p>You can learn at your own pace, anytime.</p>

        <h4>Is this worth it?</h4>
        <p>If you want a skill that can feed you and make money, yes.</p>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "60px 20px", textAlign: "center", backgroundColor: "#ffefe6" }}>
        <h2>Start Your Baking Journey Today 🍰</h2>

        <a href="https://selar.com/62771693d7" style={{ display: "inline-block", marginTop: "20px", padding: "16px 28px", backgroundColor: "#ff7a00", color: "#fff", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}>
          Join Now on Selar 💰
        </a>
      </section>

    </main>
  );
}

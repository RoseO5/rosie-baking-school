export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#fff7f2",
      color: "#2b2b2b",
      padding: "0"
    }}>

      {/* HERO SECTION */}
      <section style={{
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#ffefe6"
      }}>
        <h1 style={{ color: "#d2691e", fontSize: "36px" }}>
          Yummy Rosie’s Cakes & Pastries 🎂
        </h1>

        <p style={{ fontSize: "18px", marginTop: "10px" }}>
          Learn how to bake cakes, puff puff, and small chops in 30 days — even if you are a complete beginner.
        </p>

        <a
          href="https://selar.com/62771693d7"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "14px 24px",
            backgroundColor: "#ff7a00",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Enroll Now on Selar 💰
        </a>
      </section>

      {/* WHAT YOU GET */}
      <section style={{ padding: "40px 20px" }}>
        <h2>What You Will Learn</h2>
        <ul>
          <li>Cake baking from scratch</li>
          <li>Puff puff & small chops mastery</li>
          <li>Basic decoration skills</li>
          <li>How to sell your baked products</li>
        </ul>
      </section>

      {/* CERTIFICATE */}
      <section style={{
        padding: "40px 20px",
        textAlign: "center",
        backgroundColor: "#fff"
      }}>
        <h2>Get Certified 🎓</h2>
        <p>After completing your 30-day practice, you receive a certificate.</p>

        <img
          src="/certificate.png"
          alt="Certificate"
          style={{
            width: "100%",
            maxWidth: "500px",
            marginTop: "20px",
            borderRadius: "10px"
          }}
        />
      </section>

      {/* TESTIMONIALS */}
      <section style={{
        padding: "40px 20px",
        backgroundColor: "#fff7f2"
      }}>
        <h2>What Students Say 💬</h2>

        <p>"I never knew I could bake before this course!" – Beginner Student</p>
        <p>"Now I sell cakes every weekend!" – Happy Learner</p>
      </section>

      {/* FAQ */}
      <section style={{ padding: "40px 20px" }}>
        <h2>Frequently Asked Questions ❓</h2>

        <h4>Do I need an oven?</h4>
        <p>No, you can start with simple stovetop methods.</p>

        <h4>Can a complete beginner learn this?</h4>
        <p>Yes, this course is designed for beginners.</p>

        <h4>Will I get a certificate?</h4>
        <p>Yes, after completing the 30-day practice.</p>

        <h4>Can I make money from this?</h4>
        <p>Yes, many students start selling their baked goods during training.</p>
      </section>

      {/* FINAL CTA */}
      <section style={{
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#ffefe6"
      }}>
        <h2>Start Your Baking Journey Today 🍰</h2>

        <a
          href="https://selar.com/62771693d7"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "16px 28px",
            backgroundColor: "#ff7a00",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Join Now on Selar
        </a>
      </section>

    </main>
  );
}

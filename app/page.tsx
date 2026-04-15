export default function Home() {
  return (
    <main>

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

      {/* CERTIFICATE */}
      <section style={{ padding: "60px 20px", textAlign: "center", backgroundColor: "#fff" }}>
        <h2>Get Certified 🎓</h2>

        <img src="/certificate.png" alt="Certificate" style={{ width: "100%", maxWidth: "500px", marginTop: "20px" }} />

        <a href="/certificate.png" download style={{ display: "inline-block", marginTop: "20px", padding: "12px 20px", backgroundColor: "#28a745", color: "#fff", borderRadius: "6px", textDecoration: "none" }}>
          Download Your Certificate
        </a>
      </section>

    </main>
  );
}

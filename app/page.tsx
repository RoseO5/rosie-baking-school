export default function Home() {
  return (
    <main style={{
      padding: "40px",
      fontFamily: "sans-serif",
      backgroundColor: "#fff8f5",
      color: "#333"
    }}>
      
      <h1 style={{ color: "#d2691e" }}>
        Yummy Rosie’s Cakes & Pastries
      </h1>

      <p style={{ fontSize: "18px" }}>
        Learn how to bake cakes, puff puff, and small chops in 30 days — even if you are a beginner.
      </p>

      <a 
        href="https://selar.com/62771693d7"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "12px 20px",
          backgroundColor: "#ff7a00",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "6px"
        }}
      >
        Enroll Now
      </a>

      <h2 style={{ marginTop: "40px" }}>
        Get Certified 🎓
      </h2>

      <img 
        src="/certificate.png" 
        alt="Certificate"
        style={{ width: "100%", maxWidth: "500px", marginTop: "20px" }} 
      />

    </main>
  );
}

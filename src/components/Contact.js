import React from "react";

function Contact(props) {
  return (
    <div
      className="contact-container"
      style={{ padding: "2rem", textAlign: "center" }}
    >
      <h1>Contact Us</h1>
      <p>
        Have questions, feedback, or want to get in touch? We’d love to hear
        from you!
      </p>

      <div
        style={{ maxWidth: "400px", margin: "2rem auto", textAlign: "left" }}
      >
        <form>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />

          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />

          <label>Message:</label>
          <textarea
            placeholder="Write your message..."
            style={{
              width: "100%",
              padding: "8px",
              height: "100px",
              marginBottom: "10px",
            }}
          ></textarea>

          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>📍 Address</h3>
        <p>123 Main Street, Hospet, Karnataka, India</p>

        <h3>📞 Phone</h3>
        <p>+91 9035531011</p>

        <h3>📧 Email</h3>
        <p>support@uneed.in</p>
      </div>
    </div>
  );
}

export default Contact;

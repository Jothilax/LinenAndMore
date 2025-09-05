import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Contact Info */}
        <div className={styles.contact}>
          <h3>📌 Get In Touch</h3>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@lamlinen.com">support@lamlinen.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919566380568">+91 95663 80568</a>
          </p>
          <p>
            <strong>Address:</strong> <br />
            5/405 Kamanayakanpalayam Road, <br />
            Karadivavi, Palladam, Tirupur - 641658, India
          </p>
        </div>

        {/* Google Map */}
        <div className={styles.map}>
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.329395445249!2d77.309!3d10.978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9ab4f3d56df3b%3A0xabcdef!2sTirupur!5e0!3m2!1sen!2sin!4v1693912032173"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className={styles.copyRight}>
        <p>© 2025 Linen and More. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

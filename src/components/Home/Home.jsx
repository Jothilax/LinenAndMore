import React, { useState, useRef, useEffect } from "react";
import styles from "./home.module.css";
import Vedio from "../../assets/home.mp4";
import home1 from "../../assets/home1.jpg";
import p1 from "../../assets/products/prd1.jpg";
import p2 from "../../assets/products/prd2.jpg";
import p3 from "../../assets/products/prd3.jpg";
import p4 from "../../assets/products/prd4.jpg";
import p5 from "../../assets/products/prd5.jpg";
import p6 from "../../assets/products/prd6.jpg";

function Home() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    comments: "",
  });

  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            // in view → unmute + play
            videoRef.current.muted = false;
            videoRef.current.play();
          } else {
            // out of view → mute
            videoRef.current.muted = true;
          }
        }
      },
      { threshold: 0.5 } // 50% must be visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Submitted:", form);
  //   alert("Thank you! We’ll get back to you soon.");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    alert("Thank you! We will get back to you soon.");
  
    // reset form after submit
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      comments: "",
    });
  };

  return (
    <div className={styles.home}>
      {/* Video Section */}
      <div className={styles.vedio}>
        <video ref={videoRef} autoPlay loop playsInline>
          <source src={Vedio} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroImg}>
          <img src={home1} alt="Home" />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.head}>LINEN & BEYOND</h1>
          <h3 className={styles.subhead}>"Where comfort meets craftsmanship"</h3>
          <p className={styles.heroContent}>
            For generations, countless families have trusted us to deliver premium textile
            solutions that bring elegance and comfort into everyday living. Building on this
            legacy, we have extended our expertise to the hospitality world, crafting
            specialized services tailored for hotels, resorts, and guesthouses. Today, our
            mission is to combine tradition with innovation, positioning our brand at the
            forefront of textile solutions for the modern hospitality industry.
          </p>
        </div>
      </div>

      {/* HoReCa Section */}
      <div className={styles.horeca}>
        <h1 className={styles.head}>HoReCa</h1>
        <p className={styles.horecaContent}>
          We specialize in delivering high-quality textile solutions for the hospitality
          sector, including hotels, resorts, restaurants, cafés, and wellness spaces. Our
          collections are crafted to combine comfort, durability, and elegance, ensuring
          every guest experience is memorable. With expertise in design and sourcing, we
          provide customized products that meet the unique demands of the HoReCa industry
          while maintaining international quality standards.
        </p>
      </div>

      {/* Products Section */}
      <div className={styles.product}>
        <h1 className={styles.head}>Products</h1>
        <div className={styles.prdImg}>
          <img src={p1} alt="Product 1" />
          <img src={p2} alt="Product 2" />
          <img src={p3} alt="Product 3" />
          <img src={p4} alt="Product 4" />
          <img src={p5} alt="Product 5" />
          <img src={p6} alt="Product 6" />
        </div>
      </div>

      {/* Benefits Section */}
      <div className={styles.benifits}>
        <h1 className={styles.head}>Why we?</h1>

        <h3 className={styles.subhead}>Growth</h3>
        <p className={styles.whyWeContent}>
          As a B2B-focused brand, our foundations are built on more than four decades of
          textile excellence inherited from our sister companies. Established to deliver
          enhanced solutions, we continue to expand by offering tailored services that
          address customer expectations and set new benchmarks in the industry.
        </p>

        <h3 className={styles.subhead}>Partnership</h3>
        <p className={styles.whyWeContent}>
          Evolving market needs and rising demand for refined textile solutions have opened
          new opportunities. By aligning with trusted global partners, we are able to extend
          our reach, strengthen client relationships, and provide customized offerings that
          appeal to a broader and more diverse audience.
        </p>

        <h3 className={styles.subhead}>Design</h3>
        <p className={styles.whyWeContent}>
          Our dedicated design team creates innovative product lines that balance aesthetics
          with functionality. By translating client needs into practical and stylish textile
          solutions, we help businesses express their identity while ensuring long-lasting
          quality and guest satisfaction.
        </p>

        <h3 className={styles.subhead}>Marketing</h3>
        <p className={styles.whyWeContent}>
          We are committed to promoting and distributing premium textile collections across
          the US and European markets. By partnering with leading retailers and digital
          platforms, we ensure our products reach customers who value quality, style, and
          comfort through innovative online and offline channels.
        </p>

        <h3 className={styles.subhead}>Sales</h3>
        <p className={styles.whyWeContent}>
          We collaborate with renowned brands and institutions throughout North America and
          Europe, reflecting our strong reputation for reliability. Our growing client
          network demonstrates our ability to deliver superior textile products that meet
          the strict quality standards of international hospitality and retail markets.
        </p>

        <h3 className={styles.subhead}>Know-How</h3>
        <p className={styles.whyWeContent}>
          With decades of expertise in textile manufacturing, our team brings deep technical
          knowledge and advanced production methods. From specialized stitching to
          customized finishes, we adapt to emerging trends and client demands, making every
          collection unique and impactful.
        </p>
      </div>

      {/* Contact Form */}
      <div className={styles.contact}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>First Name *</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First name here"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last name here"
                required
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Add email"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Subject *</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Comments / Questions *</label>
            <textarea
              name="comments"
              value={form.comments}
              onChange={handleChange}
              placeholder="Write your comments here..."
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;

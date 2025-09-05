import React from 'react';
import styles from './aboutus.module.css';
import founder from '../../assets/about/ceo.jpeg';
import gm from '../../assets/about/GM.jpg';
import aboutImg from '../../assets/about/abtimg.jpg';
import abt1 from '../../assets/about/abt1.jpg';
import abt2 from '../../assets/about/abt2.jpg';
import abt3 from '../../assets/about/abt3.jpg';

function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <h1 className={styles.head}>About Us</h1>

      {/* About section */}
      <div className={styles.abt}>
        <div className={styles.aboutContent}>
          <p className={styles.aboutP}>
            Linen and More Ltd. is part of the B&E Group, a trusted name in textiles with more than 45 years of industry experience. With operations in Israel and India and an upcoming facility in Egypt, we employ over 150 dedicated professionals who share a commitment to quality and innovation.
          </p>
          <p className={styles.aboutP}>
            For decades, families around the world have chosen our textiles to bring comfort and elegance into their homes. Building on this foundation, we have expanded our expertise into the hospitality and HoReCa sector, where our solutions are tailored for hotels, resorts, restaurants, spas, and wellness spaces.
          </p>
          <p className={styles.aboutP}>
            Our collections include bed linen, duvets, pillows, tablecloths, bathrobes, towels, slippers, and decorative textiles—crafted with precision to combine style, durability, and functionality. Every product is designed not only to meet international standards but also to reflect the unique brand identity of our clients.
          </p>
          <p className={styles.aboutP}>
            With successful projects across Europe and the USA, we bring proven experience in delivering large-scale and customized solutions. Our mission is to provide flexible, high-quality textiles that save time, reduce costs, and elevate guest experiences—helping hospitality businesses thrive in a dynamic market.
          </p>
          <p className={styles.aboutP}>
            At Linen and More, we blend tradition with innovation to create textile solutions that go beyond products—contributing to the growth and success of our partners worldwide.
          </p>
        </div>

        <div className={styles.aboutImg}>
          <img src={aboutImg} alt="About Linen and More" />
        </div>
      </div>

      {/* CEO & GM in one row */}
      <div className={styles.leaders}>
        <div className={styles.founder}>
          <img src={founder} alt="Founder - Marco Abergel" />
          <h4 className={styles.name}>Marco Abergel</h4>
          <p>
            Marco Abergel is a hands-on Chief Executive Officer (CEO) with over 30 years of experience managing production companies and supply chains worldwide. Mr. Abergel has a successful track record in creation and execution of large scale and complex projects, improving overall company effectiveness and maximizing revenue generation.
          </p>
        </div>

        <div className={styles.gm}>
          <img src={gm} alt="General Manager - Robinson" />
          <h4 className={styles.name}>Robinson</h4>
          <p>
            Our Coimbatore operations are led by our General Manager, Robinson, a seasoned professional with extensive expertise in the textile industry. With 35 years of hands-on experience in managing large-scale operations and driving sustainable growth, he plays a key role in strengthening our company’s presence in India.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className={styles.imgs}>
        <img src={abt1} alt="Textile work 1" />
        <img src={abt2} alt="Textile work 2" />
        <img src={abt3} alt="Textile work 3" />
      </div>
    </div>
  );
}

export default AboutUs;

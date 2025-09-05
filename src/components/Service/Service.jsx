import React from "react";
import styles from "./service.module.css";

// Replace with your actual images
import factory from "../../assets/infrastructure/factory.jpg";
import office from "../../assets/infrastructure/office.jpg";
import showroom from "../../assets/infrastructure/showroom.jpg";
import reception from "../../assets/infrastructure/reception.jpg";
import cutting from "../../assets/infrastructure/cutting.jpg";
import sewing from "../../assets/infrastructure/sewing.png";
import packing from "../../assets/infrastructure/packing.png";

const infrastructureData = [
  {
    img: factory,
    title: "Factory Overview",
    desc: "A state-of-the-art manufacturing unit equipped with advanced technology to ensure precision and consistency in every product."
  },
  {
    img: office,
    title: "Corporate Office",
    desc: "A professional workspace for our management and operations teams to coordinate global and local activities."
  },
  {
    img: showroom,
    title: "Showroom & Meeting Hall",
    desc: "A dedicated space to showcase our product collections and host clients, partners, and business meetings."
  },
  {
    img: reception,
    title: "Reception & Working Area",
    desc: "A welcoming reception and collaborative workspace that foster productivity and client engagement."
  },
  {
    img: cutting,
    title: "Cutting Section",
    desc: "A specialized unit for accurate fabric cutting, ensuring minimal wastage and optimal resource use."
  },
  {
    img: sewing,
    title: "Confection – Sewing Section",
    desc: "Skilled craftsmanship and modern sewing techniques to bring our textile designs to life with precision."
  },
  {
    img: packing,
    title: "Checking & Packing",
    desc: "Strict quality control and packaging department, ensuring every product meets international standards before delivery."
  }
];

function Service() {
  return (
    <div className={styles.infrastructure}>
      <h1 className={styles.head}>Our Infrastructure</h1>
      <div className={styles.grid}>
        {infrastructureData.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;

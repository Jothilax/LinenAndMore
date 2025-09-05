import React from "react";
import styles from "./product.module.css";

// Import product images (replace with actual paths)
import marrow from "../../assets/products/marrow.jpg";
import picoting from "../../assets/products/picoting.jpg";
import lace from "../../assets/products/lace.jpg";
import flange from "../../assets/products/flange.jpg";
import hemming from "../../assets/products/hemming.jpg";
import embroidery from "../../assets/products/embroidery.jpg";
import framed from "../../assets/products/framed.jpg";
import quilted from "../../assets/products/quilted.jpg";
import waterproof from "../../assets/products/waterproof.jpg";
import muslin from "../../assets/products/muslin.jpg";
import waffle from "../../assets/products/waffle.jpg";

const products = [
  {
    img: marrow,
    title: "Marrow Stitches",
    desc: "Delicate and refined bedding finished with precision marrow stitching, offering elegance and durability."
  },
  {
    img: picoting,
    title: "Picoting Stitches",
    desc: "Beautiful bedding with picoting stitch details that add a subtle decorative touch."
  },
  {
    img: lace,
    title: "Lace Bedding",
    desc: "Timeless lace-trimmed designs that bring sophistication and charm to any bedroom."
  },
  {
    img: flange,
    title: "Flange Models",
    desc: "Modern bedding with flange borders for a tailored and stylish appearance."
  },
  {
    img: hemming,
    title: "Hemming Models",
    desc: "Elegant bedding with fine hemming, delivering durability and a neat finish."
  },
  {
    img: embroidery,
    title: "Embroidery Bedding",
    desc: "Luxurious bedding embroidered with intricate patterns, crafted for a unique identity."
  },
  {
    img: framed,
    title: "Framed Bedding",
    desc: "Bold framed designs that add structure, style, and elegance to the collection."
  },
  {
    img: quilted,
    title: "Quilted Bedding",
    desc: "Soft, layered, and quilted bedding for superior comfort and year-round use."
  },
  {
    img: waterproof,
    title: "Waterproof Bedding",
    desc: "Functional bedding with waterproof protection, combining comfort with practicality."
  },
  {
    img: muslin,
    title: "4-Layer Muslin Blanket",
    desc: "Lightweight, breathable, and versatile muslin blankets ideal for all seasons."
  },
  {
    img: waffle,
    title: "Waffle Blanket",
    desc: "Textured waffle blankets that provide coziness with a modern design."
  },
];

function Product() {
  return (
    <div className={styles.products}>
      <h1 className={styles.head}>Our Products</h1>
      <div className={styles.grid}>
        {products.map((product, index) => (
          <div key={index} className={styles.card}>
            <img src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;

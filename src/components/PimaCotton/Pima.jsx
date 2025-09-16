import React from 'react'
import styles from './pima.module.css'
import pima1 from '../../assets/pima/pima1.jpg';
import pima2 from '../../assets/pima/pima2.jpg';
import pima3 from '../../assets/pima/pima3.jpg';
import pima4 from '../../assets/pima/pima4.jpg';
import pima5 from '../../assets/pima/pima5.jpg';
import pima6 from '../../assets/pima/pima6.jpg';

export default function Pima() {
  return (
    <div>

        <h2 className={styles.head}>What is Pima Cotton?</h2>
        <p className={styles.cont}>Pima cotton is a premium, extra-long staple (ELS) cotton known for its unmatched softness, durability, and natural sheen. Derived from the Gossypium barbadense plant, it was named after the Pima Native American tribe, who were among the first to cultivate it in the arid regions of the southwestern United States.</p>

        <h2 className={styles.head}>Origins of Pima Cotton</h2>
        <ul className={styles.list}>
          <li className={styles.listItm}>Developed in the early 1900s through a cross of Egyptian and American Upland cotton.</li>
          <li className={styles.listItm}>Named after the Pima tribe, who played a key role in its cultivation.</li>
          <li className={styles.listItm}>Grown mainly in Arizona, California, and New Mexico, where the hot, dry climate is ideal for high-quality cotton.</li>
        </ul>
      
        <h2 className={styles.head}>Why Choose Pima Cotton?</h2>

        <dl className={styles.subhead}>🌿 Superior Softness </dl>
        <dd className={styles.listItm}>Silky-smooth to the touch and gets softer with every wash. Perfect for clothing, bedding, and everyday comfort.</dd>
       
        <dl className={styles.subhead}>💪 Lasting Durability</dl>
        <dd className={styles.listItm}>Stronger, longer fibers mean fewer pills, less wear, and products that last for years.</dd>
       
        <dl className={styles.subhead}>🌬️ Breathable & Cool</dl>
        <dd className={styles.listItm}>Naturally breathable and moisture-wicking, keeping you fresh in warm or active conditions.</dd>
       
        <dl className={styles.subhead}>✨ Elegant Sheen</dl>
        <dd className={styles.listItm}>Its natural luster gives fabrics a refined, luxurious look and feel.</dd>

        <dl className={styles.subhead}>🤍 Gentle on Skin</dl>
        <dd className={styles.listItm}>Hypoallergenic and free from harsh chemicals, making it safe for sensitive skin.</dd>
       
  
        <h2 className={styles.head}>The Pima Difference</h2>
        <p className={styles.cont}>Unlike regular cotton, Pima cotton fibers are longer, smoother, and stronger, creating fabric that’s softer, more durable, and beautifully lustrous — a true mark of luxury.</p>

        <div className={styles.imgs}>
        <img src={pima1} alt="Textile work 1" />
        <img src={pima2} alt="Textile work 2" />
        <img src={pima3} alt="Textile work 3" />
        <img src={pima4} alt="Textile work 4" />
        <img src={pima5} alt="Textile work 5" />
        <img src={pima6} alt="Textile work 6" />
      </div>


    </div>
  )
}

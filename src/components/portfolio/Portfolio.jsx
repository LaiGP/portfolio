import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";

const items = [
  { id: 1, img: "pets.jpg" },
  { id: 2, img: "restaurante.jpg" },
  { id: 3, img: "spiderweb.jpg" },
  { id: 4, img: "theater.jpg" },
  { id: 5, img: "computer.png" },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { t } = useTranslation();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{t(`portfolio.items.${item.id}.title`)}</h2>
            <p>{t(`portfolio.items.${item.id}.desc`)}</p>
            <a href={t(`portfolio.items.${item.id}.url`)} target="_blank" rel="noopener noreferrer">
              <button>{t("portfolio.seeDemo")}</button>
            </a> 
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { t } = useTranslation();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>{t("portfolio.title")}</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
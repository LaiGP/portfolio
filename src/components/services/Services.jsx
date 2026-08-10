import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const { t } = useTranslation();

  // eslint-disable-next-line no-unused-vars
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          {t("services.subtitle1")}
          <br /> {t("services.subtitle2")}
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/dailart-woman-8119716.jpg" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>{t("services.title1")}</motion.b> {t("services.title2")} <motion.b whileHover={{color:"orange"}}></motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            {t("services.title3")} <motion.b whileHover={{color:"orange"}}>{t("services.title4")}</motion.b>
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>{t("services.servei1")}</h2>
          <p>
            {t("services.servei1p")}
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>{t("services.servei2")}</h2>
          <p>
            {t("services.servei2p")}
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>{t("services.servei3")}</h2>
          <p>
            {t("services.servei3p")}
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>{t("services.servei4")}</h2>
          <p>
            {t("services.servei4p")}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
    
  );
};

export default Services;
/* eslint-disable no-unused-vars */
import { useRef } from "react";
import "./helpdesk.scss";
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

const Helpdesk = () => {
  const ref = useRef();
  const { t } = useTranslation();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="helpdesk"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          {t("helpdesk.subtitle1")}
          <br /> {t("helpdesk.subtitle2")}
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/service.jpg" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>{t("helpdesk.title1")}</motion.b> {t("helpdesk.title2")}
          </h1>
        </div>
        <div className="title">
          <h1>
            {t("helpdesk.title3")}<motion.b whileHover={{color:"orange"}}> {t("helpdesk.title4")}</motion.b>
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>{t("helpdesk.servei1")}</h2>
          <p>
            {t("helpdesk.servei1p")}
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>{t("helpdesk.servei2")}</h2>
          <p>
            {t("helpdesk.servei2p")}
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>{t("helpdesk.servei3")}</h2>
          <p>
            {t("helpdesk.servei3p")}
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>{t("helpdesk.servei4")}</h2>
          <p>
            {t("helpdesk.servei4p")}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
    
  );
};

export default Helpdesk;
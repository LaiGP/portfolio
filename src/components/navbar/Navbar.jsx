import Sidebar from "../sidebar/Sidebar";
import LanguageSelector from "../languageSelector/LanguageSelector";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <div className="social">
          <a href="https://github.com/LaiGP/">
            <img src="/GitHub_Invertocat_White.png" alt="" />
          </a>
          {}
        </div>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Laia Gabarrós
        </motion.span>       
        <LanguageSelector />
      </div>
    </div>
  );
};

export default Navbar;
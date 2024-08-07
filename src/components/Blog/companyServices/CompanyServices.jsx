// src/components/Blog/CompanyServices/CompanyServices.js
import React from "react";
import styles from "./CompanyServices.module.css";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const CompanyServices = () => {
  return (
    <div className={styles.container}>
      <h1 className="title">Discover Our Services</h1>
      <p className="des">
        At Sarte Solution, we offer a range of services to meet your digital needs:
      </p>
      <ul className={styles.ulist}>
        <li><a href="https://sartesolution.com/services" target="blank"><h1 className="text"  style={{fontWeight:'400'}}>Digital Marketing </h1></a></li>
        <li><a href="https://sartesolution.com/services" target="blank"><h1 className="text" style={{fontWeight:'400'}}>Web Development</h1></a></li>
        <li><a href="https://sartesolution.com/services" target="blank"><h1 className="text" style={{fontWeight:'400'}}>IT Solutions</h1></a></li>
        <li><a href="https://sartesolution.com/services" target="blank"><h1 className="text" style={{fontWeight:'400'}}>Creative Services</h1></a></li>
        <li><a href="https://sartesolution.com/services" target="blank"><h1 className="text" style={{fontWeight:'400'}}>Emerging Technologies</h1></a></li>
        <li><a href="https://sartesolution.com/services" target="blank"><h1 className="text" style={{fontWeight:'400'}}>Education and Training</h1></a></li>
      </ul>
      <p className="des">
        For more information, visit our website or get in touch with us!
      </p>
      <div className={styles.cta}>
        <a  href="https://www.sartesolution.com" target="_blank" rel="noopener noreferrer">
          Visit Our Website
        </a>
        <div className={styles.icons}>
          <a
            href="https://wa.me/+923038661499"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="mailto:sartesolution@gmail.com"
            className={styles.icon}
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyServices;

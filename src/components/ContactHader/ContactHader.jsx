import React from "react";
import styles from "../ContactHader/ContactHeader.module.css"

const ContactHader = () => {
  return (
    <div className={` ${styles.contact_section }`} >
      <h1>Contact Us</h1>
      <p>
        LEST'S CONNECT,WE ARE HERE TO HELP,AND WOULD LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUSTION,COMMENT OR JUST WANT TO CHAT,YOU CAN REACH
        OUT TO US THROUGH THE CONTACT FROM OF THIS PAGE ,OR BY
        PHONE,EMAIL,SOCIAL MEDIA.
      </p>
    </div>
  );
};

export default ContactHader;

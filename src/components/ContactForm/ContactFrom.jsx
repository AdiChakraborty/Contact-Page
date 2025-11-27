import React from "react";
import styles from "../ContactForm/ContactFrom.module.css";
import Button from "../Button/Button";
import { TbBrandMessengerFilled, TbMessageChatbotFilled } from "react-icons/tb";
import { IoIosCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { BsJustify } from "react-icons/bs";

const ContactFrom = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_from}>
        <div className={styles.top_btn}>
          <Button
            text=" VIA SUPPORT CHAT"
            icon={<TbMessageChatbotFilled fontSize="23px" />}
          />
          <Button text=" VIA CALL " icon={<IoIosCall fontSize="23px" />} />
        </div>
        <Button
          isOutline={true}
          text=" VIA  EMAIL FORM "
          icon={<MdAlternateEmail fontSize="23px" />}
        />

        <form>
        <div className={styles.form_control}>
        <label htmlFor="name">Name</label>
          <input type="text" name="name" />
          </div>
        <div className={styles.form_control}>
        <label htmlFor="email">E-mail</label>
          <input type="email" name="email" />
          </div>
        <div className={styles.form_control}>
        <label htmlFor="text">Text</label>
          <textarea name="text" rows='8' />
          </div>
          <div style={{
            display:"flex",
            justifyContent:'end',
          }}>
             <Button
          isOutline={false}
          text=" SUBMIT BUTTON"
        />
          </div>
        </form>  

      </div>
      <div className={styles.contct_image}>
        <img src="https://raw.githubusercontent.com/anshuopinion/React-10-Projects/f3baadbbaca5c4dab15b4a811e8649d1f9f79473/project-2/public/images/contact.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactFrom;

"use client"
import React from 'react'
import { useForm, ValidationError } from "@formspree/react";
import styles from '../styles/Contact.module.css'
function Contact() {
      const [state, handleSubmit] = useForm("xpzgwybb");
    
  return (
    <div className={styles.main} id='contact'>
      <div>
        <h2 className={styles.heading}>Contact me</h2>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.email}>
          <label htmlFor="email" className={styles.title}>Email Address</label>
          <input id="email" type="email" name="email" className={styles.emailInput} />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className={styles.textWrap}>
         <label htmlFor="message" className={styles.title}>A Short talk</label>
          <textarea id="message" name="message" className={styles.textarea} />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button type="submit" disabled={state.submitting} className={styles.submit}>
          Submit
        </button>
              <div className={styles.msg}>
                  {state.succeeded?<p>Your response is sent!</p>:""}
              </div>
      </form>
    </div>
  );
}

export default Contact
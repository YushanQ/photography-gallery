import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ne8v7ad','template_e9cclva', form.current, 'FVDNYfx6Ar9qsg0Ze')
        .then((res) => {
            console.log(res.text);
        }, (err) => {
            console.log(err.text);
        });
    };
    return (
        <div className='contact-form-section-container d-flex flex-column' id="contact">
            <h1>
                <span>UNIVERSE</span>
                <br></br>
                INNOVATION
            </h1>
            <form ref={form} onSubmit={sendEmail}>
                <div className='email-input d-flex'>
                    <input type='email' name=
                    "email" placeholder='Your email'></input>
                    <button type="submit">SUBMIT</button>
                </div>
            </form>
            <p>
                Contact me to be the first to know about my trip, and more!
            </p>
        </div>
    )
}

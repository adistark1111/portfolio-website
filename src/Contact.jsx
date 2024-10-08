import React from 'react'
import Header from './Header'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <>
            <Header />
            <div id="contact">
                <div className="contact-content">
                    <div className="row">
                        <div className="contact-left">
                            <h1 className="sub-title">Contact Me</h1>
                            <p><i className="fa-solid fa-paper-plane"></i>adityastark1111@gmail.com</p>
                            <p><i className="fa-solid fa-square-phone"></i>9304014672</p>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                                <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                                <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                            </div>
                            <a href="https://drive.google.com/uc?export=download&id=1-h4O5H4dIc1bVipRrZhOGCJfIaoIzYO1" download className="btn btn2">Download CV</a>
                        </div>
                        <div className="contact-right">
                            <ContactForm />
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright <i className="fa-regular fa-copyright"></i> 2024 | <span>Made with <i className="fa-solid fa-heart"></i> by Aditya</span></p>
                </div>
            </div>
        </>
    )
}

export default Contact;
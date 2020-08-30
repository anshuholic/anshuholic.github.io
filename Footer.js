import React from 'react';

const Footer = () => {
    const fDate = new Date().getFullYear();


    return (
        <>
            <footer className="w-100 bg-light text-center">
            
            <div class="contact-links">
                <a
                    id="profile-link"
                    href="https://github.com/anshuholic"
                    target="_srv"
                    class="btn contact-details"
                ><i class="fa fa-github"></i> GitHub</a>
                <a
                    id="profile-link"
                    href="https://www.instagram.com/anshuholic/"
                    target="_srv"
                    class="btn contact-details"
                ><i class="fa fa-instagram"></i> Instagram</a>
                
                
                
                <a
                    href="https://www.linkedin.com/in/anshumanbhushan/"
                    target="_srv"
                    class="btn contact-details">
                        <i class="fa fa-linkedin"></i> LinkedIn</a
                >
                <a href="mailto:anshuman.singh.96995@gmail.com" class="btn contact-details"
                ><i class="fas fa-at"></i> E-mail</a
                >
                <a
                    href="https://twitter.com/anshuholic"
                    target="_srv"
                    class="btn contact-details"
                ><i class="fa fa-twitter"></i> Twitter</a
                >
            </div>
            <p><br />{fDate} © ANSHUHOLIC</p>


        </footer>
        </>
    );

};

export default Footer;
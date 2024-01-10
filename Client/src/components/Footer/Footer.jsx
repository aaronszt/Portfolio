import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
    return (
        <div className={style.footer}>
            <h3>Contact</h3>
            <div>
                <a href="https://www.linkedin.com/in/aaron-sztychmasjter-218307266/" target="_blank" rel="noopener noreferrer" className={style.link}>Linkedin</a> |{' '}
                <a href="https://github.com/aaronszt" target="_blank" rel="noopener noreferrer" className={style.link}>Github</a> |{' '}
                <a href="tel:+5403874072071" className={style.link}>Phone</a>
            </div>
        </div>
    );
};

export default Footer;

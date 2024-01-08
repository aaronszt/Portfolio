import React from 'react';
import Footer from '../Footer/Footer';
import miFoto from '../../img/Mi-foto.png';
import style from './HomeTrue.module.css';
import { Link } from 'react-router-dom';

const HomeTrue = () => {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>Full Stack Web Developer</h1>
                <Link to = '/proyects'>
                    <h3>Proyects</h3>
                </Link>
                <img src={miFoto} alt="Mi foto" className={style.image} />
                <a href="./CV-S-Aaron.Sztychmasjter.pdf" download className={style.cv}>CV</a>
            </div>
            <Footer />
        </div>
    );
}

export default HomeTrue;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import apiPokemon from '../../img/api-pokemon1.jpg';
import imagen1 from '../../img/imagen1.jpg';
import style from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: 'TheFourthElement',
    description: 'Descripción del proyecto 1...',
    imageUrl: imagen1,
  },
  {
    id: 2,
    title: 'Pokemon WebApi',
    description: 'Web con CRUD completo y perfil de usuario.',
    imageUrl: apiPokemon,
  },
];

const Projects = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={style.container}>
      <Slider {...sliderSettings}>
        {projects.map((project) => (
          <div key={project.id} className={style.projectContainer}>
            <img src={project.imageUrl} alt={project.title} className={style.image} />
            <div className={style.projectInfo}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;

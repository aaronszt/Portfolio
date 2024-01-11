import React from 'react';
import apiPokemon from '../../img/api-pokemon1.jpg';
import imagen1 from '../../img/imagen1.jpg';
import style from './Projects.module.css';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'TheFourthElement',
    description: 'Plataforma para Estanislao Brachrach. El cual es un curso para deportistas de alto rendimiento, con	visualización de videos, pasarelas de pago, administración de usuarios, reproduccion multimedia. Tecnología utilizadas: Next js, React, Sass, Next UI, Node .js, MongoDB, Next-Auth, Express, Tailwind, SCRUM, GIT, MVC, POO, vista entidad relacion, Docker, Notion, AWS, Lucidchart, Swagger, Figma.  ',
    imageUrl: imagen1,
  },
  {
    id: 2,
    title: 'Pokemon WebApi',
    description: 'REST APis. Pagina con contenido "Pokemon", CRUD completo, administracion de usuario. Tecnología utilizadas: Node.js, Express.js, PostgreSQL, Sequelize, React, React Redux, HTML, CSS, Docker.',
    imageUrl: apiPokemon,
  },
];

const Projects = () => {

  return (
    <div className={style.container}>
        {projects.map((project) => (
          <div key={project.id} className={style.classContainer}>
              <img src={project.imageUrl} alt={project.title}/>
            <div className={style.classColor}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
        <div className={style.arrowContainer}>
          <Link to="/" className={style.arrowLink}>&#x2190;</Link>
        </div>
    </div>
  );
};

export default Projects;

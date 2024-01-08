import React from 'react';
import apiPokemon from '../../img/api-pokemon.jpg';
import { useEffect} from 'react';

const projects = [
  {
    id: 1,
    title: 'Proyecto 1',
    description: 'Descripción del proyecto 1...',
    imageUrl: 'url_de_la_imagen_1.jpg',
  },
  {
    id: 2,
    title: 'Pokemon WebApi',
    description: 'Web con crud completo y perfil de usuario.',
    imageUrl: apiPokemon,
  },
];

const Proyects = () => {
  
  return (
    <div>
      <h1>My Portfolio</h1>
      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <h2>{project.title}</h2>
            <button>dasdass</button>
            <p>{project.description}</p>
            <img src={project.imageUrl} alt={project.title} style={{ maxWidth: '100%' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyects;
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';


type TArticle = {

  id: number,
  title: String,
  slug: String,
  thumbnail: String,
  author: String,
  difficulty: String,
  description: String,
  instructions: [
    String
  ],
  ingredients: [
    {
      name: String,
      id: 0,
      quantity: 0,
      unit: String
    }
  ]
}

interface PropsAside {
  article: TArticle[]
}

const Aside = ({ article }: PropsAside) => {

  return (
    <aside className="bg-cyan-950 text-white min-h-screen p-8 fixed w-64 z-10">
      <nav className="flex flex-col gap-2 items-baseline text-lg">
        <NavLink to={'/'} className={({ isActive }) => isActive ? "text-blue-400" : "text-white"}>Accueil</NavLink>
        {article && article.map((art) =>
          <NavLink className={({ isActive }) => isActive ? "text-blue-400" : "text-white"} key={art.id} to={`/categorie/${art.slug}`}>{art.title}</NavLink>
        )}

      </nav>
    </aside>
  );
};

export default Aside;
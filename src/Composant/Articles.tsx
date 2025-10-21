import React, { useEffect, useState } from 'react';
import Article from './Article';
import { data } from 'react-router';


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

interface PropsArticle {
  tabArticle: TArticle[];
}



const Articles = ({ tabArticle }: PropsArticle) => {
  const [isLoading, setIsLoading] = useState(true);

  console.log(tabArticle);




  return (
    <main className='flex flex-col gap-4'>
      <h1 className='text-cyan-700 text-4xl pt-8'>
        Les recettes oRecipes
      </h1>
      <div className='border border-gray-300 w-full '></div>
      <p className='text-md font-bold '>Voici nos {tabArticle.length} recettes</p>
      <div className='w-full flex flex-wrap'>
        {
          tabArticle.map((article) => (
            <Article key={article.id} article={article} />
          ))
        }
      </div>
    </main>
  )
}

export default Articles
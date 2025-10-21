import React from 'react'
import Logo from '../assets/logo.png'
import ArticlePage from '../Page/ArticlePage'
import { Link, Navigate } from 'react-router'



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
  article: TArticle

}
const Article = ({ article }: PropsArticle) => {

  return (
    <div className='m-3 p-3 border-2 rounded-2xl border-gray-300 max-w-[300px] '>
      <div>
        <img src={String(article.thumbnail)} alt={String(article.title)} />
        <div className='p-3 flex flex-col items-start gap-1.5'>
          <h2 className='text-md font-bold'>{article.title}</h2>
          <span className='text-sm text-gray-400'>{article.difficulty} </span>

          <Link className='bg-cyan-950 rounded-xl w-full text-white text-sm p-3' to={`/categorie/${article.slug}`}>
            Voir la recette</Link>
        </div>
      </div>
    </div>
  )
}

export default Article
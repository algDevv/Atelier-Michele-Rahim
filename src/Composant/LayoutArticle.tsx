import React from 'react'
import { NavLink, Link } from 'react-router'



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

interface PropsLayoutArticle {
    article: TArticle
}

const LayoutArticle = ({ article }: PropsLayoutArticle) => {
    return (
        <div className='m-6 p-6 border-2 rounded-2xl border-gray-300 gap-16'>

            <img className='max-w-[600px] rounded-2xl' src={String(article.thumbnail)} alt={String(article.title)} />
            <div className='p-3 flex flex-col justify-center'>
                <div className='max-h-full flex flex-col'>
                    {article.ingredients.map((ingredients) => (
                        <ul className='flex flex-col justify-center py-3' key={ingredients.id}>
                            <li className='flex gap-2 flex-col '>
                                <div className='flex flex-row justify-start gap-10'>
                                    <div className='flex flex-row items-center gap-10'>
                                        <span className='bg-cyan-950 rounded-2xl p-3 text-white'>{ingredients.quantity}</span>
                                        <span>{ingredients.name}</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    ))}
                    <span className='w-full border border-gray-300 '></span>
                    {
                        article.instructions.map((instruction, index) => (
                            <ul className="py-5 flex items-start" key={index}>
                                <li className='flex gap-4 justify-center'>
                                    <span className='text-sm'>{instruction}</span>
                                </li>
                            </ul>
                        ))}

                </div>
            </div>
        </div >
    )
}

export default LayoutArticle
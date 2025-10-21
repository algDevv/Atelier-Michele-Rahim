import React from 'react'
import { useParams } from 'react-router'
import LayoutArticle from '../Composant/LayoutArticle'



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

interface PropsArticlePage {
    article: TArticle[]
}

const ArticlePage = ({ article }: PropsArticlePage) => {

    const { slug } = useParams();


    return (
        <div className='flex justify-center items-center gap-6 px-10'>
            {
                article.map((article) => (
                    article.slug === slug &&
                    <LayoutArticle article={article} />
                ))
            }
        </div>
    )
}

export default ArticlePage
import { data, Route, Routes } from 'react-router';
import './App.css';
import Article from './Composant/Article';
import Articles from './Composant/Articles';
import Aside from './Composant/Aside';
import Footer from './Composant/Footer';
import Header from './Composant/Header';
import { useState, useEffect } from 'react';
import ArticlePage from './Page/ArticlePage';




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

function App() {

  const [dataArticle, setDataArticle] = useState<TArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  const fetchArticle = async () => {
    try {
      const URL = "https://orecipesapi.onrender.com/api/recipes";

      const res = await fetch(URL);
      if (!res.ok) {
        throw new Error("Erreur lors de la reponse de requete");
      }
      const data = await res.json();
      setDataArticle(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchArticle();
    setDataArticle(dataArticle);
    setIsLoading(false);
  }, [])

  return (


    <div className="flex min-h-screen">
      {!isLoading && <Aside article={dataArticle} />}

      <div className="ml-70 w-full gap-3 mr-6">
        <Header />
        <Routes>
          <Route path='/' element={<Articles tabArticle={dataArticle} />}></Route>
          <Route path='/categorie/:slug' element={<ArticlePage article={dataArticle} />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;

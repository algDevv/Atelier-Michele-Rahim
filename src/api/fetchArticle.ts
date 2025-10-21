export const fetchArtcle = async () => {
    try {
      const URL = "https://orecipesapi.onrender.com/api/recipes";

      const res = await fetch(URL);
      if (!res.ok) {
        throw new Error("Erreur lors de la reponse de requete");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error)
    }
  }
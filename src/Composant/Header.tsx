/* eslint-disable @stylistic/indent */

// eslint-disable-next-line @stylistic/quotes
import Logo from "../assets/logo.png";
import { useState } from "react";



const Header = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault(); 
    
        try {
          const response = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
    
          if (!response.ok) {
            throw new Error("Identifiants incorrects");
          }
    
          const data = await response.json();
          console.log("Utilisateur connecté :", data);
    
          setUser(data.user); 
          setError(""); 
    
        } catch (error)
         {
          console.log(error);
        }
      };

    return (
        <header className="w-full bg-white/70 backdrop-blur-md shadow-lg">
            <div className="flex justify-between px-8 py-4 gap-4">

                <img className="h-12 w-12" src={Logo} alt="imageLogo" />

                <form className="flex items-center gap-3" onSubmit={handleSubmit}>
                    <input className="p-2 border border-gray-500 "
                        type="text"
                        name="email"
                        placeholder="Adresse email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }} />

                    <input className="p-2 border border-gray-500 " 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => 
                            setPassword(e.target.value)
                        }
                        />
                    <button className="bg-cyan-950 rounded-2xl w-12 h-12 text-white">
                        OK
                    </button>
                </form>
            </div>

            {user && (
                <div className="mt-4 text-green-600">
                ✅ Connecté avec l’adresse email : <strong>{email}</strong>
                </div>
)}

        </header>
    );
};

export default Header;
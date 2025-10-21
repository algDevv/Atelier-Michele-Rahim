import React from 'react'

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className="text-[14px] text-center border-t border-gray-300 py-4">
      
      <p>oRecipes - {year} - Tous droits réservés</p>
    </footer>
  )
}

export default Footer
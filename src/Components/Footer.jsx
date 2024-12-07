import React from 'react'
import '../index.css'
import DHLogo from "../images/DH.png"

const Footer = () => {
  return (
    <footer>
        <p>Powered by</p>
        <img src={DHLogo} alt='DH-logo' />
    </footer>
  )
}

export default Footer

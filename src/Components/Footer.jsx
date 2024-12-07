import React from 'react'
import '../index.css'
import DHLogo from "../images/DH.png"
import FacebookIcon from "../images/ico-facebook.png"
import InstagramIcon from "../images/ico-instagram.png"
import TiktokIcon from "../images/ico-tiktok.png"
import WhatsappIcon from "../images/ico-whatsapp.png"

const Footer = () => {
  return (
    <footer>
      <div className="container-col">
        <p>© 2024 Dafna Peña - @thvx</p>
        </div>
      <div>
        <p>Powered by</p>
        <img className="footer-img" src={DHLogo} alt='DH-logo' />
      </div>
      <div className="container-row">
        <img className="img-icon" src={FacebookIcon} alt='Facebook-icon' />
        <img className="img-icon" src={InstagramIcon} alt='Instagram-icon' />
        <img className="img-icon" src={TiktokIcon} alt='Tiktok-icon' />
        <img className="img-icon" src={WhatsappIcon} alt='Whatsapp-icon' />
      </div>
    </footer>
  )
}

export default Footer

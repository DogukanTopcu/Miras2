import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container footer-content'>
            <div className='footer-top'>
                <div className='footer-top-one'>
                    <h3>Miras Eğitim</h3>
                    <p>Mollit incididunt amet do adipisicing. Ut reprehenderit ut qui irure do reprehenderit nostrud fugiat sit nulla irure anim. Velit et fugiat eu duis id exercitation pariatur dolore nostrud. Enim nostrud amet esse voluptate id. Culpa consequat amet labore ipsum esse nostrud commodo reprehenderit nisi laboris ullamco culpa ex minim. Laboris deserunt eiusmod nisi incididunt ipsum duis proident.</p>
                    <p>Miras Eğitim danışmanların basitçe ilan vermelerini </p>
                </div>
                <div className='footer-top-two'>
                    <h4>İletişim Bilgileri</h4>
                    <ul>
                        <p><strong>Email: </strong><a href='mirasegitim@gmail.com'>mirasegitim@gmail.com</a></p>
                        <p><strong>Telefon: </strong> 500 000 00 00</p>
                        <p><strong>Adres: </strong>.. Mahallesi, ... Caddesi, ../Bursa</p>
                    </ul>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='footer-left'>Copyright &copy; Tüm hakları gizlidir</div>
                <div className='footer-right'>Gizlilik Politikası</div>
            </div>
        </div>
    </div>
  )
}

export default Footer
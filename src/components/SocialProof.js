import React from 'react';

import { Image } from 'react-bootstrap';

import whatsappLogo from '../assets/whatsapp-logo.png';
import instagramLogo from '../assets/instagram-logo.png';

export default function SocialProof() {
    return <div className="social-proof">
        <div>
        <a href target="_blank" rel="noopener noreferrer" href="https://wa.me/6281374314469"><Image src={whatsappLogo}/></a>
        </div>
        <div>
        <a href target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/cv_nutrition_amazing_team/"><Image src={instagramLogo}/></a>
        </div>
    </div>
}
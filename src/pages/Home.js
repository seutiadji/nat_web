import React from 'react';

import { Image } from 'react-bootstrap';

import Feature from '../components/Feature';
import SocialProof from '../components/SocialProof';

import heroImage from '../assets/hero-img.png';
import ft1 from '../assets/ft1.gif';
import ft2 from '../assets/ft2.gif';
import ft3 from '../assets/ft3.gif';

import webinarImage from '../assets/webinars.png';
import avatarImage from '../assets/avatar.jpg';


export default function Home() {

    let waitListMembers = 12;

    return (
        <div>
            <div className="hero">
                <h1><b>Nutrition Amazing Team</b></h1>
                <h2>Nutrition Amazing Team dahulunya adalah organisasi yang bekerjasama dengan salah satu LSM Sumbar, dengan tujuan melakukan sosialisasi kesehatan ke masyarakat, pengecekan kesehatan, training kelas Public Speaking dan penyelenggaraan seminar kesehatan.</h2>
            </div>

            <div className="join">
            <h3><b>Ingin Mendaftar Webinar Terkini?</b></h3>
                <a href="#form"><button id="call-to-action"><h2>Daftar Sekarang!</h2></button></a>
                <p>Sebanyak {waitListMembers} orang sudah mendaftar! 🎉</p>
            </div>

            <div className="hero-image">
                <img src={webinarImage} width="100%" />
            </div>

            <SocialProof />

            <section className="details">
                <p><span className="highlight"><b>Nutrition Amazing Team</b></span> merupakan lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor <span className="highlight"><b>sit amet</b></span>,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>For the price of your afternoon coffee <span className="highlight"><b>(4$/month)</b></span>, we help you navigate the mess and aggregate this insight in a digestible way.</p>
                <p>We <span className="highlight"><b>save you time and energy</b></span> to do what you do best: <span className="highlight"><b>write</b></span>.</p>
            </section>

            <section className="features">
                <Feature gif={ft1} title="Kegiatan 1" description="We maintain a comprehensive view of all the various viewership channels so you don't have to." direction="left" />
                <Feature gif={ft2} title="Pelatihan Kesehatan" description="Based on viewer feedback, plan out your next blog post." direction="right" />
                <Feature gif={ft3} title="Seminar" description="Post weekly? Monthly? Sporadically? Keep your viewers engaged and excited for your content." direction="left" />
            </section>

            {/* <section className="features-list">
                <div>
                    <p>✅  A beautiful, powerful editor.</p>
                    <p>✅  Simple content management.</p>
                    <p>✅  Email newsletters built-in.</p>
                    <p>✅  SEO features included automatically.</p>
                    <p>✅  Publish once, distribute everywhere.</p>
                </div>
            </section> */}


            <section id="form" className="form">
            <h1>Webinar Terkini.</h1>
            <p>The Best Way for Bloggers to.</p>
            <iframe title="Google Form" src="https://docs.google.com/forms/d/e/1FAIpQLSefDyhgfY15PLFCVboPfPYRJGWDmn28DwmaOXApf_icxRT8RQ/viewform?usp=sf_link" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            </section>


            <section className="built-by">
                <div style={{ display: "inline-block", verticalAlign: "center" }}>
                    <Image src={avatarImage} roundedCircle />
                </div>

                <div style={{ display: "inline-block" }} className="built-by-details">
                    <p>Made with love by <a target="_blank" rel="noopener noreferrer" href="instagram.com/seutiadji">Setiadji</a>, Contact me at <a href="wa.me/6281220187760">WhatsApp</a> if you have any questions or concerns.</p>
                </div>
            </section>

        </div>
    )
}
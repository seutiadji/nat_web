import React from 'react';

import { Image } from 'react-bootstrap';

import Feature from '../components/Feature';

import ft1 from '../assets/pelatihan.png';
import ft2 from '../assets/seminar.png';
import ft3 from '../assets/webinar.png';

import natImage1 from '../assets/nat-img1.png';
import whatsappLogo from '../assets/whatsapp-logo.png';


export default function Home() {

    let waitListMembers = 12;

    return (
        <div>
            <div className="hero">
                <h1><b>Nutrition Amazing Team</b></h1>
                <h2>Nutrition Amazing Team merupakan Perusahaan yang bergerak di bidang pelayanan kesehatan dan pelatihan pengembangan sumber daya manusia.</h2>
            </div>

            <div className="hero-image">
                <img src={natImage1} width="100%" />
            </div>

            <section className="details">
                <p> <span className="highlight"><b>Nutrition Amazing Team</b></span> dahulunya adalah organisasi yang bekerjasama dengan salah satu LSM Sumbar, dengan tujuan melakukan sosialisasi kesehatan ke masyarakat, pengecekan kesehatan, training kelas Public Speaking dan penyelenggaraan seminar kesehatan. Organisasi ini berdiri pada tanggal 1 Desember 2012.</p>
                <p>Dengan motivasi dan keinginan yang sangat kuat untuk memajukan dan mengembangkan  program kerja, maka team melakukan pe-legalan yang sah secara hukum, sehingga berdirilah Nutriton Amazing Team pada tanggal 20 September 2013 menjadi <span className="highlight"><b>CV Nutrition Amazing Team</b></span>.</p>
            </section>

            <div className="paragraf">
                <h1><b>Visi</b></h1>
                <h2>Menjadi Perusahaan yang sukses di bidang pelayanan kesehatan Nutrisi dan Pelatihan Pengembangan SDM terkemuka, konsisten dalam pengembangan kualitas sumber daya manusia sesuai kebutuhan global, menghasilkan yang terbaik melalui pengelolaan professional.</h2>
            </div>

            <div className="paragraf">
                <h1><b>Misi</b></h1>
                <h2>Menyelenggarakan berbagai bidang Pelatihan dan Seminar di bidang kesehatan, pendidikan dan umum, baik lokal maupun Nasional  dengan kualitas terbaik guna meningkatkan kualitas sumber daya manusia untuk memenuhi kesempatan kerja sesuai dengan perkembangan dunia usaha, teknologi serta globalisasi.</h2>
            </div>
           

            <section className="features">
                <Feature gif={ft1} title="Pelatihan" description="Kegiatan pelatihan kesehatan yang dilaksanakan " direction="left" />
                <Feature gif={ft2} title="Seminar / Workshop" description="Seminar yang dilaksanakan pada" direction="right" />
                <Feature gif={ft3} title="Webinar" description="Webinar juga."  direction="left" />
            
            <div className="join">
                <a href="#form"><button id="call-to-action"><h2><b>Daftar Webinar!</b></h2></button></a>
            </div>
            </section>


            <section id="form" className="form">
            <h1>Form Registrasi Webinar</h1>
            <iframe title="Google Form" src="https://docs.google.com/forms/d/e/1FAIpQLSefDyhgfY15PLFCVboPfPYRJGWDmn28DwmaOXApf_icxRT8RQ/viewform?usp=sf_link" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            </section>


            <section className="built-by">
                <div style={{ display: "inline-block", verticalAlign: "center" }}>
                    <a href target="_blank" rel="noopener noreferrer" href="wa.me/6281220187760"><Image src={whatsappLogo}/></a>      
                </div>
            </section>

        </div>
    )
}
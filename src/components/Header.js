import React from 'react';
import logo from '../assets/logo.png';
import natlogo from '../assets/nat-logo.png';

export default function Home() {
    return (
        <div className="header">
            <div>
                <img src={natlogo} height="60%" />
                <h1>NAT PADANG</h1>
                <a href="#details"><b>Kegiatan</b></a>
                <a href="#visimisi"><b>Visi Misi</b></a>
                <a href="#kegiatan"><b>Sejarah</b></a>
            </div>
        </div>
    )
}
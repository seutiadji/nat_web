import React from 'react';
import logo from '../assets/logo.png';
import natlogo from '../assets/nat-logo.png';

export default function Home() {
    return (
        <div className="header">
            <div>
                <img src={natlogo} height="80%" />
                <h1>NAT PADANG</h1>
            </div>
        </div>
    )
}
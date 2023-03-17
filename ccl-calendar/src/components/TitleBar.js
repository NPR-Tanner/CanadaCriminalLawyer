import React from 'react';
import './../css/TitleBar.css'

const TitleBar = () => {
    return (
        <section className="flex-row">
            <div className="titleCTA">
                <p className="titleType">Talk to a Lawyer Day or Night 24/7 <button className="titleButton">Call Now</button></p>
            </div>
            <div className="titleSocials">
                <ul>
                    <li>Instagram Icon</li>
                    <li>YouTube Icon</li>
                    <li>LinkedIn Icon</li>
                    <li>Licensed Criminal Defence Lawyers Across Canada - <a href="tel:8555851777">(855) 585-1777</a></li>
                </ul>
            </div>  
        </section>
    );
}

export default TitleBar;
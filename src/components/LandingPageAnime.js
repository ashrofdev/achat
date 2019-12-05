import React from 'react'
import './anime.css'

const words = ['family', 'classmates', 'friends', 'co-workers']



const LandingPageAnime = ({}) =>{
       const anime = setInterval(() => {
            document.querySelector('.word').style = 'transform: translateY(2rem) rotateX(80deg); opacity: 0;'
            setTimeout(() => {
                document.querySelector('.word').style = 'transform: translateY(0) rotateX(0); opacity: 1; border: none;'
                let random = Math.round(Math.random() * words.length - 1)
                let word = words[random]
                document.querySelector('.word').textContent = word
                setTimeout(() => {
                    document.querySelector('.word').style = 'transform: translateY(-2rem) rotateX(-60deg);  opacity: 0'
                    setTimeout(() => {
                        document.querySelector('.word').style = 'display: none'
                        
                    }, 700);
                }, 2000);
            }, 100);
            
            console.log(5)
        }, 2900);
    return (
        <div className="anime">
            <h2 className="h1">The best chatting interface for you and your <span className="el"> <span span className="word"></span></span></h2>
        </div>
    )
}

export default LandingPageAnime
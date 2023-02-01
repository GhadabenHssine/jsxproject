import React from 'react'
import Typed from 'typed.js';
import "../../App.css"
const FullName = () => {


    return (

        <div className='container'>
            <nav>
                <div className='logo'>Folio <b>.</b></div>
                <ul className='navItems'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skils</a></li>


                </ul>
                <div className='links'>
                    <a href="https://github.com/GhadabenHssine">  <i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/ghada-ben-hssine-7a5372242">   <i className="fa-brands fa-linkedin"></i></a>


                </div>

            </nav>
            <div className='wrapper'>
                <div className='cols cols0'>
                    <span className='topline'>Hello</span>
                    <h1>I'm <span className='multitext'>Ghada</span></h1>
                    <p>Détient actuellement un Licence Fondamentale en Science Informatique obtenu à
                        Institut supérieur d'informatique de Mahdia (ISIMa) 2020 actuellement intéressé par
                        le développement web et j'ai une bonne maîtrise de MERN Stack.
                        Je suis ponctuel, motivé et capable de travailler en groupe</p>
                    <p> <i className="fa-solid fa-envelope"></i>GhadabenHssinessine69@gmail.com</p>
                    <div className='btn'>
                        <button>download cv</button>
                        <button>hire me</button>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default FullName
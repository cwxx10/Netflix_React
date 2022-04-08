import React from 'react'
import './css/Header.css'

function Header() {
    return (
        <>  
            <div className='header'>
                <div className="header_container">
                    <h2 className="logo_net">
                        NETFLIX
                    </h2>
                    <nav>
                        <a className ="cta" href="#"><span class="hover-underline-animation">Início</span></a>
                        <a className ="cta" href="#"><span class="hover-underline-animation">Séries</span></a>
                        <a className ="cta" href="#"><span class="hover-underline-animation">Filmes</span></a>
                        <a className ="cta" href="#"><span class="hover-underline-animation">Documentários</span></a>
                    </nav>
                </div>
            </div>
        </>     
    )
}

export default Header
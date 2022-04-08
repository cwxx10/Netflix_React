import React from 'react'
import './css/Main.css'

function Main () {

    return (
        <>
        <div className="main_movie">
                <h3 className='main_h3'>BREAKING BAD</h3>
                <p className='main_p'>O novo drama "Breaking Bad" narra a história de Walter White (Bryan Cranston), um humilde professor de química que vê sua vida se transformar quando descobre ser portador de um câncer terminal.</p>
                <div className="main_buttons">
                    <button role="button" className='main_btn'><i class="fa-solid fa-play"></i>ASSISTIR AGORA</button>
                    <button role="button" className='main_btn'><i class="fa-solid fa-circle-info"></i>MAIS INFORMAÇÕES</button>
            </div>
        </div>
        </>
    )
}

export default Main
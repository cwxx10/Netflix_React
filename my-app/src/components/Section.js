import React from "react"
import './/css/Section.css'
import image1 from '../img/mini1.jpg'
import image2 from '../img/mini2.jpg'
import image3 from '../img/mini3.jpg'
import image4 from '../img/mini4.jpg'
import image5 from '../img/mini5.jpg'

function Section() {
    return (
        <div className="section_container">
            <div className="section_carousel">
                <div className="section_item">

                    <div className="section_image">
                        <img src={image1} id="img" alt="image1" />
                    </div>

                    <div className="section_image">
                        <img src={image2} id="img" alt="image1" />
                    </div>

                    <div className="section_image">
                        <img src={image3} id="img" alt="image1" />
                    </div>

                    <div className="section_image">
                        <img src={image4} id="img" alt="image1" />
                    </div>

                    <div className="section_image">
                        <img src={image5} id="img" alt="image1" />
                    </div>
                    
                 




                    
                </div>
            </div>
            
        </div>
    )
}

export default Section
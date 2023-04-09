import React from 'react';
import icon1 from "../../img/icon-1.svg"
import icon2 from "../../img/icon-2.svg"
import Vector from "../../img/Vector.svg"

const Profise = () => {
    return (
        <div id="profise">
            <div className="container">
                <h1>Получите профессию прямо сейчас</h1>
                <div className="profise">
                    <div className="profise--block1">
                        <img src={icon1} alt=""/>
                        <h4>Только практические <br/>навыки в работе</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
                    </div>
                    <div className="profise--block1">
                        <img src={icon2} alt=""/>
                        <h4>Только практические навыки в работе</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
                    </div>
                    <div className="profise--block1">
                        <img src={Vector} alt=""/>
                        <h4>Только практические <br/>навыки в работе</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profise;
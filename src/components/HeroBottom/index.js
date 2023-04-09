import React from 'react';
import about from "../../img/about.png";
import elips from "../../img/elips.svg";

const HeroBottom = () => {
    return (
        <div id="heroBottom">
            <div className="container">
                <div className="heroBottom">
                    <img src={about} alt="#"/>
                    <div className="heroBottom--title">
                        <h1>Чем мы занимаемся?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat <br/> elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum <br/> vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean <br/> consequat. Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed interdum feugiat <br/> mattis elit, sollicitudin. Quam pharetra rhoncus risus, cursus id elementum aliquet. <br/> Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis. </p>
                    </div>
                </div>
                <div className="Starts">
                    <img src={elips} alt=""/>
                    <h1>Быстрый старт</h1>
                </div>
                <div className="bottomTitle">
                    <p>Больше 90% учеников прошли полный курс и смогли <br/> собрать свой первый компьютер</p>
                </div>
                <div className="rating">
                    <h1>100%</h1>
                    <h1>75%</h1>
                    <h1>50%</h1>
                    <h1>Итог</h1>
                </div>
                <div className="Rating">
                    <div className="Rating--block1"></div>
                    <div className="Rating--block2"></div>
                    <div className="Rating--block3"></div>
                    <div className="Rating--block4"></div>
                </div>
                <div className="Lorem">
                    <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Netus eget velit quisque <br/> accumsan amet tortor. Velit, volutpat egestas <br/> fringilla mi porttitor tempus. Placerat dui.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Netus eget velit quisque <br/> accumsan amet tortor. Velit, volutpat egestas <br/> fringilla mi porttitor tempus. Placerat dui.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Netus eget velit quisque <br/> accumsan amet tortor. Velit, volutpat egestas <br/> fringilla mi porttitor tempus. Placerat dui.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Netus eget velit quisque <br/> accumsan amet tortor. Velit, volutpat egestas <br/> fringilla mi porttitor tempus. Placerat dui.</p>
                </div>
            </div>
        </div>

    );
};

export default HeroBottom;
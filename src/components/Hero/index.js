import React from 'react';

const Hero = () => {
    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <button>Заказать курс</button>
                    <div className="hero--second">
                        <p>Учеников всего: <span>200</span></p>
                        <p>Успешно закончили курс: <span>190</span></p>
                    </div>
                    <div className="hero--block3">
                        <p>Заработано учениками: <span>400 000₽</span></p>
                        <div>
                            <div></div>
                        </div>
                        <h6>0 <span>1 000 000₽</span></h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
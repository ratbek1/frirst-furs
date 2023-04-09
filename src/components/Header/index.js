import React from 'react';
import logo from '../../img/logo.svg'

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <img src={logo} alt="#"/>
                    <div className="header--nav">
                        <a href="#">Главная</a>
                        <a href="#">Курсы</a>
                        <a href="#">Расписание</a>
                        <a href="#">Преподаватели</a>
                        <a href="#">Рассылка</a>
                        <a href="#">Контакты</a>
                    </div>
                    <button className="header--btn">Dark mode</button>
                </div>
                <div className="title">
                    <h1>Первый курс <br/> по компьютерной сборке</h1>
                    <div className="title--first">
                        <div className="title--first__block">
                            18
                            <span>Дней</span>
                        </div>
                        <div className="title--first__block">
                            18
                            <span>Часов</span>
                        </div>
                        <div className="title--first__block">
                            18
                            <span>Минут</span>
                        </div>
                        <div className="title--first__block">
                            18
                            <span>Секунд</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;
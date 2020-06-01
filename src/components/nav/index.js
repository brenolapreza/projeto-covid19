import React from 'react';
import coronaLogo from '../images/corona-icon.png'
import './styles.css'
import '../styles/default.css'


class Nav extends React.Component {

    render() {
        return (
            <>
                <div className="nav-main">
                    <img src={coronaLogo} alt="logo"/>
                    <ul className="nav-wrapper">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Pesquisar</a></li>
                        <li><a href="#">COVID-19</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                    <ul className="nav-mobile">
                        
                        <li><i class="fas fa-bars"></i>
                            <div className="nav-mobile-back">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Pesquisar</a></li>
                                <li><a href="#">COVID-19</a></li>
                                <li><a href="#">Sobre</a></li>
                                <li><a href="#">Contato</a></li>
                            </div>
                        </li>
                    </ul>
                </div>
               

            </>
        )
    }
}
export default Nav
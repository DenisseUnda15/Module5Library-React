import React from "react";
import UndrawBooks from '../assets/Undraw_Books.svg';
import { Link } from "react-router-dom";

const Landing = () => {
    return(
        <section className="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Auatralia's most famous awarded online library plataform</h1>
                        <h2>Find your dream book with<span className="purple">Library</span></h2>
                        <Link to="#features">
                            <button className="btn">Browse books</button>
                        </Link>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={UndrawBooks} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    )
}

export default Landing;

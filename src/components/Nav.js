import { Link, useNavigate } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png'
import { getAllCategories } from "../api";

export const Nav = () => {
    // const navigate = useNavigate();

    const [categories, setCategories] = useState([]);

    async function fetchCategories() {
        const allCategories = await getAllCategories();
        setCategories(allCategories);
    }

    useEffect(() => {
        fetchCategories();
        console.log(categories)
    }, []);


    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <a href="index.html" className="logo">
                                <img src={logo} />
                            </a>
                            <ul className="nav">
                                {categories?.length > 0 ?
                                    categories.map(item => {
                                        return <li class="scroll-to-section">
                                            <Link to={`/product/${item}`}>{item}</Link>
                                        </li>
                                    })
                                    : null}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
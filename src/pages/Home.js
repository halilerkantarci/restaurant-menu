import React from 'react';
import Categories from '../components/categories/Categories';
import Header from '../components/header/Header';
import Menus from '../components/menus/Menus';

const Home = () => {
    return (
        <div>
            <Header />
            <Categories />
            <Menus />
        </div>
    );
};

export default Home;
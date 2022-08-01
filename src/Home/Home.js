import React, { useState } from 'react';
import { UserContext } from '../Hooks/UseReact';
import './Home.css'

const Home = () => {

    const [isClick, setClick] = useState(false);


    const changeColor = () =>{
        setClick(!isClick)
    }

    return (
        <UserContext.Provider value='react'>
        <div id='main' className={`${isClick ? "red" : "blue"}`}>
            <h2>This is homePage.</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, reiciendis? Animi, corporis. Alias suscipit vitae est sunt, quo, dolores maiores voluptate doloribus dolorem nihil aspernatur. Quis assumenda natus aut dolor.</p>
            <button onClick={changeColor}>Change Color</button>
        </div>
        </UserContext.Provider>
    );
};

export default Home;
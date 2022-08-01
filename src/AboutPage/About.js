import React, { useContext } from 'react';
import { UserContext } from '../Hooks/UseReact';

const About = () => {

    const aboutContext = useContext(<UserContext></UserContext>)

    return (
        <div>
            <h2>This is about.</h2>
        </div>
    );
};

export default About;
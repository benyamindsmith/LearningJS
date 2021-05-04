import React from 'react';
import ReactDom from 'react-dom';

/*
 For this to display on your server your function needs to be capialized.
 */ 

function Greeting() {
    return (
        <>
            <Person />
            <Message/>
        </>

    );         
}

const Person = () => <h1>I like milk</h1>;
const Message = () => {
    return(
    <ul>
        <li>
            <a href="#"> really? </a>
        </li>
    </ul>);
};

ReactDom.render(<Greeting />, document.getElementById('root'));

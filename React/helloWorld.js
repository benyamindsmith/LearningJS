import React from 'react';
import ReactDom from 'react-dom';

/*
 For this to display on your server your function needs to be capialized.
 */ 

function Greeting() {
    return <h4>
        Hello World!
    </h4>;         
}

ReactDom.render(<Greeting />, document.getElementById('root'));

import React from 'react';
import ReactDom from 'react-dom';

/*
 For this to display on your server your function needs to be capialized.
 */ 

function BookList() {
    return (
        <section>
            <Book />
            <Image />
            <Book />
            <Image />
            <Book />
            <Image />
            <Book />
            <Image />
            <Book />
            <Image />
            <Book />
            <Image />
            <Book />
            <Image />
            <Book />
            <Image />
            <Book />
            <Image />
            <Book />
        </section>  

    );         
}

const Book = () => {
    return (
        <h1>
            This is a milk
        </h1>);
};

const Image = () => {
    return (
        <img src="https://ychef.files.bbci.co.uk/976x549/p07vvrpj.jpg" alt=""/>
        );
}

ReactDom.render(<BookList />, document.getElementById('root'));

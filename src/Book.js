import React from 'react';
import './App.css';




export default class Book extends React.Component{
    render(){
        let imgAlt = `${this.props.title} thumbnail`;
        let priceprice = '';
        if (this.props.price){
            priceprice = this.props.price.amount;
        }
        
        return(
            <li>
                <h2>{this.props.title}</h2>
                <div>
                    <img src={this.props.imageLinks.thumbnail} alt={imgAlt} />
                </div>
                <p>{this.props.author}</p>
                <p>{priceprice}</p>
                <p>{this.props.description}</p>
            </li>
        )
    }
}

//<div>
//<img src={this.props.imageLinks.thumbnail?this.props.imageLinks.thumbnail:null} alt={imgAlt} />
//</div>
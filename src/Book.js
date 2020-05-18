import React from 'react';





export default class Book extends React.Component{
    render(){
        return(
            <li>
                <h2>{this.props.title}</h2>
                <p>{this.props.author}</p>
                <p>{this.props.price}</p>
                <p>{this.props.description}</p>
            </li>
        )
    }
}
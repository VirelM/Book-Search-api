import React from 'react'

export default function ListItems(props) {

    let price = '';
    if(props.price.listPrice === undefined) {
       
        price += props.price.saleability; 
    }
    else {
        price += '$' + props.price.listPrice.amount.toString()
    }
    return (
        <div className="list-item">
            <h2>{props.title}</h2>
            <p>{props.author.toString()}</p>
            <p>{price}</p>
            <img src={props.img} alt={props.author}/>
            <p>{props.desc}</p>
        </div>
    )
}

ListItems.defaultProps = {
    title: '',
    author: '',
    price: '',
    img: '',
    desc: ''
}
import React from 'react';
import Book from './Book';



export default class BookList extends React.Component{
    render(){
        let books = this.props.books.map(ook=>
        <Book key={ook.id} title={ook.title}
         author={ook.authors} 
         description={ook.description}
        imageLinks={ook.imageLinks}/>)
        return(
            <ul>{books}</ul>
        )
    }
}

//<CountrySelector countries={[{name:"Barbados"}, {name:"Bahrain"}]}/>
//<Demonym name="Barbadian" country="Barbados"/>
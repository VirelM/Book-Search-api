import React from 'react';
import './App.css';
import Search from './Search'
import BookList from './BooksList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books:[]
    };
  }
  

  formsubmit = (sParam, printType, bookType)=>{
    console.log(sParam);
    console.log(printType);
    console.log(bookType);
    let FbookType = '';
    if(bookType==='None'){
      FbookType += ''
    }
    else {
      FbookType += `&filter=${bookType}`;
    }
    let FprintType = ''
    if(printType==='None'){
      FprintType += ''
    }
    else{
      FprintType += `&printType=${printType}`
    }
    console.log(FprintType);
    console.log(FbookType);
    let url = `https://www.googleapis.com/books/v1/volumes?q=${sParam}${FbookType}&maxResults=20${FprintType}`;
    console.log(url);
    fetch(url)
    .then(res=> res.json())
    .then(data=> {
      console.log(data);
      this.updateState(data)
    })
  }

  updateState = (data) => {
    let newbooks = [];
    data.items.forEach((book) => {
      let stateBook = {
        id: book.id,
        title: book.volumeInfo.title,
        imageLinks: book.volumeInfo.imageLinks,
        authors: book.volumeInfo.authors,
        listPrice: book.saleInfo.listPrice,
        description: book.volumeInfo.description
      }
      newbooks.push(stateBook)
    });
    console.log(newbooks);
    this.setState({
      books: newbooks
    })
  }

  render(){
    
    return (
      <div className="App">
        <header>
          <h1>Google Bookmark Search</h1>
        </header>
        <Search submit={this.formsubmit} />
        <BookList books={this.state.books}/>
      </div>
    );
  }
}

export default App;

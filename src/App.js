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
  componentDidMount(){
    fetch('https://www.googleapis.com/books/v1/volumes?q=Winter%20of%20the%20Ice%20Wizard&maxResults=3')
      .then(res=> res.json())
      .then(data=> {
        let justItems = data.items;
        console.log(justItems);
        this.setState({books:justItems})
        console.log(this.state.books[0].saleInfo);
      })
  }
  
  //'https://www.googleapis.com/books/v1/volumes?q=Winter%20of%20the%20Ice%20Wizard&filter=ebooks&maxResults=3&printType=all' \


  formsubmit = (sParam, printType, bookType)=>{
    console.log(sParam);
    console.log(printType);
    console.log(bookType);
    let base = 'https://www.googleapis.com/books/v1/volumes?q=';
    let compare = `${base}${sParam}&${bookType}&maxResults=3&${printType}`;
    console.log(compare);
    fetch(`${base}${sParam}&filter=${bookType}&maxResults=3&printType=${printType}`)
    .then(res=> res.json())
    .then(data=> {
      console.log(data)
    })
  }

  // updateState = (newData) => {
  //   this.setState({
  //     data: newData
  //   })
  // }

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

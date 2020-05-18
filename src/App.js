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
  
  formsubmit = (word)=>{
    console.log(word)
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

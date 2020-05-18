import React from 'react';
import Header from './componets/Header'
import Search from './componets/SearchBar'
import List from './componets/List'


class App extends React.Component {
  
  state = {
    data: null
  }

  updateState = (newData) => {
    this.setState({
      data: newData
    })
  }


  render() {
  return (
    <main className='App'>
      <Header/>
      <Search 
        state={this.state}
        onSearch={this.updateState}
      />
      <List data={this.state.data}/>
    </main>
  )
  }
}

export default App;


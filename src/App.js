import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks.js';
import SearchBooks from './SearchBooks.js';

class BooksApp extends React.Component {

  state = {
    query:"",
    booklists: [],
    searchLists:[]
  }
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {

      BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          booklists:books
        }))
      });
    });
  }

  searchHandler = (query) => {
    if(query.length === true){
      BooksAPI.search(query)
      .then((books) => {
        this.setState({searchLists:books !== undefined?books:[]});
      })
    }else{
      this.setState({searchLists:[]});
    }
    this.setState({query:query});
  }

  componentDidMount() {
      BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          booklists:books
        }));
      });
  }
  
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            booklists={this.state.booklists}
            changeShelf={this.changeShelf}
          />
        )} />
        <Route exact path="/serch" render={() => (
          <SearchBooks
            searchLists={this.state.searchLists}
            booklists={this.state.booklists}
            searchHandler={this.searchHandler}
            changeShelf={this.changeShelf}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp

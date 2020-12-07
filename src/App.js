import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ListBooks from './ListBooks.js';
import SearchBooks from './SearchBooks.js';

class BooksApp extends React.Component {

  state = {
    query: "",
    booklists: [],
    searchLists: []
  }

  NoMatchPage = () => {
    return (
      <h3>404 - Not found</h3>
    )
  };
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {

        BooksAPI.getAll()
          .then((books) => {
            this.setState(() => ({
              booklists: books
            }))
          });
      });
  };

  searchHandler = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query)
        .then((books) => {
          let searchResult = books !== undefined ? books : []
          this.setState({ searchLists: searchResult.error === undefined ? searchResult : [] });
        })
    } else {
      this.setState({ searchLists: [] });
    }
    this.setState({ query: query });
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          booklists: books
        }));
      });
  }

  render() {
    return (
      <div className="app">
        <Switch>
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
          <Route component={this.NoMatchPage} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp

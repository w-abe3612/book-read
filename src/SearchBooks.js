import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchItems from './SearchItems.js';

class SearchBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query: "" };
    }
    getSearchValue = event => {
        this.setState({query:event.target.value});
        this.props.searchHandler(event.target.value);
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/' >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            onChange={ e => this.getSearchValue(e)}
                            value={this.state.value}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <SearchItems
                            booklists={this.props.booklists}
                            searchLists={this.props.searchLists}
                            changeShelf={this.props.changeShelf}
                        />
                    </ol>
                </div>
            </div>
        )
    }
}

SearchBooks.propTypes = {
    searchLists:PropTypes.array.isRequired,
    booklists:PropTypes.array.isRequired,
    searchHandler:PropTypes.func.isRequired,
    changeShelf:PropTypes.func.isRequired
}


export default SearchBooks




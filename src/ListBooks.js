import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf.js';

const bookstates = [
    {shelf:"currentlyReading",title:"Currently Reading"},
    {shelf:"wantToRead",title:"Want to Read"},
    {shelf:"read",title:"Read"}
];

class ListBooks extends React.Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    {bookstates.map( bookstate =>(
                            <BookShelf
                                key={bookstate.title}
                                title={bookstate.title}
                                books={
                                    this.props.booklists.filter( book =>{
                                        return bookstate.shelf === book.shelf
                                    })
                                }
                                changeShelf={this.props.changeShelf}
                            />
                    ))}
                </div>

                <div className="open-search">
                    <Link to='/serch' >Add a book</Link>
                </div>

            </div>
        )
    }
}

ListBooks.propTypes = {
    booklists:PropTypes.array.isRequired,
    changeShelf:PropTypes.func.isRequired
}


export default ListBooks


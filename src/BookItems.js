import React from 'react';
import PropTypes from 'prop-types';
import MoveShelf  from './MoveShelf.js';

const BookItems = (props) => {
    let Lists = "";
    if(Array.isArray(props.booklists)){
        Lists = props.booklists.map(book => (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                        <div className="book-shelf-changer">
                            <MoveShelf
                                book={book}
                                currentStatus={book.shelf?book.shelf:"none"}
                                changeShelf={props.changeShelf}
                            />
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors"></div>
                </div>
            </li>
        ));
    }
    return (Lists);
}


BookItems.propTypes = {
    booklists:PropTypes.array.isRequired,
    changeShelf:PropTypes.func.isRequired
}


export default BookItems
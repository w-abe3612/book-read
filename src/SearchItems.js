import React from 'react';
import PropTypes from 'prop-types';
import MoveShelf  from './MoveShelf.js';


const SearchItems = (props) => {
    let Lists = "";

    const findShelf = (item,booklist) => {
        let result = "";
        let bookinfo = booklist.filter(book => book.id === item.id);
        if(bookinfo.length){
            result = bookinfo[0].shelf;
        }
        return result
    }

    if(Array.isArray(props.searchLists)){
        Lists = props.searchLists.map(book => (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                        <div className="book-shelf-changer">
                            <MoveShelf
                                book={book}
                                currentStatus={findShelf(book,props.booklists)}
                                changeShelf={props.changeShelf}
                            />
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors"></div>
                </div>
            </li>
        ))
    }
    return (Lists);
}


SearchItems.propTypes = {
    searchLists:PropTypes.array.isRequired,
    booklists:PropTypes.array.isRequired,
    changeShelf:PropTypes.func.isRequired
}


export default SearchItems
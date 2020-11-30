import React from 'react';
import PropTypes from 'prop-types';
import BookItems from './BookItems.js';

const BookShelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <BookItems
            booklists={props.books}
            changeShelf={props.changeShelf}
          />
        </ol>
      </div>
    </div>
  )
}

BookShelf.propTypes = {
  title:PropTypes.string.isRequired,
  books:PropTypes.array.isRequired,
  changeShelf:PropTypes.func.isRequired

}

export default BookShelf



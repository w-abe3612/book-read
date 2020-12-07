# MyReads Project

This project allows you to search for a book and save it to a specific shelf.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md 
├── package.json 
├── public
│   ├── favicon.ico 
│   └── index.html 
└── src
    ├── App.css 
    ├── App.js # This is the root of app. 
    ├── BookItems.js # This shows one book item.
    ├── BookShelf.js # This is a book shelf.
    ├── ListBooks.js # This show the saved book.
    ├── MoveShelf.js # Select UI to change the shelf. 
    ├── SearchBooks.js # This show the Searched book. 
    ├── SearchItems.js # This shows one book item what Searched  
    ├── App.test.js 
    ├── BooksAPI.js # A JavaScript API.
    ├── icons 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css 
    └── index.js
```


## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
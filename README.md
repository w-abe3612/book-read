# MyReads Project

これはWEB上に存在するあなたの本棚です。
- 現在読んでいる本
- 読みたい本
- 読み終わった本

に棚が分かれており、本のステータスを変更することで、本を別の棚に移動させ、その本が今あなたにとってどんな状態にあるのかを整理することができます。
棚画面と検索画面に分かれています。
検索画面から探した本にステータスを付与することで、本棚に移動することができます。

この課題には[スターター](https://github.com/udacity/reactnd-project-myreads-starter)が存在し、HTMLとCSSが存在している状態から、それらをコンポーネント化し、インタラクションを作成いたしました。

This is your bookshelf on the Web.
- Currently Reading
- Want to Read
- Read

By changing the status of a book, you can move it to a different shelf and organise what state it is in for you.
The system is divided into a shelf screen and a search screen.
You can assign a status to a book you find from the search screen and move it to the shelf.

For this assignment we had a [starter](https://github.com/udacity/reactnd-project-myreads-starter), and we took the HTML and CSS and made them into components to create the interaction.

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
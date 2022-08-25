import "./App.css";
import { useState } from "react";
import * as BooksApi from "./BooksAPI";
import { useEffect } from "react";
import { ListShelfs } from "./MainPage/ListShelfs";
import { Route, Routes, useNavigate } from "react-router-dom";
import { SearchPage } from "./SearchPage/SearchPage";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      const res = await BooksApi.getAll();
      setAllBooks(res);
    };
    getAll();
    console.log(allBooks);
  }, []);

  const updateListShelf = (book, shelf) => {
    BooksApi.update(book, shelf)
    setAllBooks(allBooks.map((target) => {
      if (target.id === book.id) {
        target.shelf = shelf
      }
      return target
    }))
    console.log("update ");
    console.log(allBooks);
  }

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={
          <ListShelfs allBooks={allBooks} updateListShelf={updateListShelf}></ListShelfs>
        } />
        <Route path="/search" element={
          <SearchPage></SearchPage>
        }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

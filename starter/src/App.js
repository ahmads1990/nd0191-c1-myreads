import "./App.css";
import { useState } from "react";
import * as BooksApi from "./BooksAPI";
import { useEffect } from "react";
import { ListShelfs } from "./MainPage/ListShelfs";
import { Route, Routes, useNavigate } from "react-router-dom";
import { SearchPage } from "./SearchPage/SearchPage";

function App() {
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
    BooksApi.update(book, shelf);
    setAllBooks(
      //if the changed into shelf is none delete the book from allbooks state
      shelf == 'none' ? allBooks.filter((target) => target.id != book) :
        //else if the book shelf is none its new to all books then add it
        book.shelf == 'none' ? allBooks.concat([book]) :
          //else its in the all books state just update it
          allBooks.map((target) => {
            if (target.id === book.id) {
              target.shelf = shelf;
            }
            return target;
          })
    );
    console.log("update ");
    console.log(allBooks);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ListShelfs
              allBooks={allBooks}
              updateListShelf={updateListShelf}
            ></ListShelfs>
          }
        />
        <Route path="/search" element={<SearchPage addNewBook={updateListShelf}></SearchPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;

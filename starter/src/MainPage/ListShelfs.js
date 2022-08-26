import { Link } from "react-router-dom";
import { BookShelf } from "./BookShelf/BookShelf";
import PropTypes from "prop-types";

export const ListShelfs = ({ allBooks, updateListShelf }) => {
  var shelves = [
    { id: '0', shelfName: 'currentlyReading', title: 'Currently Reading', data: [] },
    { id: '1', shelfName: 'wantToRead', title: 'Want to Read', data: [] },
    { id: '2', shelfName: 'read', title: 'Read', data: [] },
  ]

  const sortBooksToShelfs = (intialBooks) => {
    shelves[0].data = [];
    shelves[1].data = [];
    shelves[2].data = [];
    intialBooks.map((book) => {
      //console.log(book);
      switch (book.shelf) {
        case shelves[0].shelfName:
          shelves[0].data.push(book);
          //console.log("test " + currentlyReading);
          break;
        case shelves[1].shelfName:
          shelves[1].data.push(book);
          break;
        case shelves[2].shelfName:
          shelves[2].data.push(book);
          break;
        default:
      }
    });
  };

  sortBooksToShelfs(allBooks);

  //onClick={() => setShowSearchpage(!showSearchPage)}
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {
          shelves.map((shelf, index) => (
            <BookShelf
              key={index}
              books={shelf.data}
              title={shelf.title}
              updateListShelf={updateListShelf}
            ></BookShelf>
          ))
        }
      </div>
      <div className="open-search">
        <Link to={"/search"}>Add a book</Link>
      </div>
    </div>
  );
};

ListShelfs.propTypes = {
  allBooks: PropTypes.array.isRequired,
  updateListShelf: PropTypes.func.isRequired,
};

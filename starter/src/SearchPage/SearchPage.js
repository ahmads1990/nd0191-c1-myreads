import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import * as BooksApi from "../BooksAPI"
import { useEffect } from "react";
import { Book } from '../MainPage/BookShelf/Book/Book';
export const SearchPage = () => {
    const [query, setQuery] = useState('')
    const [searchBooks, setSearchBooks] = useState([]);

    useEffect(() => {
        const getAll = async () => {
            const res = await BooksApi.search(query, 20);
            console.log(res);
            setSearchBooks(res);
        };
        if (query != '') {
            getAll();
        }
        console.log(searchBooks);
    }, [query]);
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link
                    className="close-search"
                    to={'/'}
                >
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchBooks.map((book, index) => {
                        return (<Book
                            id={book.id}
                            title={book.title}
                            authors={book.authors}
                            backgroundUrl={book.imageLinks.thumbnail}
                            index={index}
                            intialShelf={book.shelf}
                            changeBookShelf={() => { }}
                        ></Book>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}

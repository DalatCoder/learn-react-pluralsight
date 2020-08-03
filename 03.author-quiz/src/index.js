import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { shuffle, sample } from 'underscore';

import authors from './components/testData';

function getTurnData(authors) {
  const allBooks = authors.reduce(function(p, c) {
    return p.concat(c.books);
  }, []);

  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: authors.find(author => author.books.includes(answer))
  };
}

const state = {
  turnData: getTurnData(authors)
};

ReactDOM.render(<App {...state} />, document.getElementById('root'));

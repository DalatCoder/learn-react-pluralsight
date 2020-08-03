import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { shuffle, sample } from 'underscore';

import authors from './components/testData';

function getTurnData(authors) {
  const allBooks = authors.reduce(function(p, c) {
    return p.concat(sample(c.books));
  }, []);

  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: authors.find(author => author.books.some(book => book === answer))
  };
}

const state = {
  turnData: getTurnData(authors),
  highlight: ''
};

function onAnswerSelected(answer) {
  const isCorrect = state.turnData.author.books.some(book => book === answer);
  state.highlight = isCorrect ? 'correct' : 'wrong';

  // Rerender
  render();
}

function render() {
  ReactDOM.render(
    <App {...state} onAnswerSelected={onAnswerSelected} />,
    document.getElementById('root')
  );
}

render();

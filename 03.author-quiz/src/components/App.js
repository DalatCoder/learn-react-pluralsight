import React from 'react';
import './App.css';

const Hero = () => {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  );
};

const Book = ({ title, onClick }) => {
  return (
    <div className="answer" onClick={() => onClick(title)}>
      <h4>{title}</h4>
    </div>
  );
};

const Turn = ({ author, books, highlight, onAnswerSelected }) => {
  function highlightToBgColor(highlight) {
    const mappings = {
      none: '',
      correct: 'green',
      wrong: 'red'
    };

    return mappings[highlight];
  }

  return (
    <div
      className="row turn"
      style={{ backgroundColor: highlightToBgColor(highlight) }}
    >
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author" />
      </div>

      <div className="col-6">
        {books.map(title => (
          <Book title={title} key={title} onClick={onAnswerSelected} />
        ))}
      </div>
    </div>
  );
};

const Continue = () => {
  return <div>Continue</div>;
};

const Footer = () => {
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">Nguyen Trong Hieu</p>
      </div>
    </div>
  );
};

const App = ({ turnData, highlight, onAnswerSelected }) => {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn
        {...turnData}
        highlight={highlight}
        onAnswerSelected={onAnswerSelected}
      />
      <Continue />
      <Footer />
    </div>
  );
};

export default App;

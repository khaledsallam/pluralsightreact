import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './AuthorQuiz.css';
import './bootstrap.min.css';

const Hero = () => {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select The Book Written By The Author Shown</p>
      </div>
    </div>
  );
}

const Book = ({ title, onClick }) => {
  return (
    <div className="answer" onClick={onClick(title)}>
      <h4>{title}</h4>
    </div>
  );
}
const Turn = ({ author, books, highlight, onAnswerSelected }) => {

  const highlightToBgColor = (highlight) => {
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red'
    }
    return mapping[highlight]
  };


  return (
    <div className="row turn" style={{ backgroundColor: highlightToBgColor(highlight) }}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorImage" alt="Author" />
      </div>
      <div className="col-6">
        {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected} />)}
      </div>
    </div>
  );
}

Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books: PropTypes.arrayOf(PropTypes.string.isRequired),
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
};

const Continue = () => {
  return (<div></div>);
}

const Footer = () => {
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">All images are from <a href="https://commons.wikimedia.org/wiki/Main_Page">Wikimedia Commons</a> and are in the public domain</p>
      </div>
    </div>
  );
}

const AuthorQuiz = ({ turnData, highlight, onAnswerSelected }) => {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
      <Continue />
      <p><Link to="/add">Add an Author</Link></p>
      <Footer />
    </div>
  );


}


export default AuthorQuiz;

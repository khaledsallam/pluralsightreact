import React from 'react';
import "./AddAuthorForm.css";

class AuthorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            books: []
        }
    }
    onFieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAddAuthor(this.state);
    }

    handleAddBook = (event) => {
        this.setState(prevState =>({books : prevState.books.concat([this.state.bookTemp])}) ); 
        this.state.books.push(this.state.bookTemp)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="AddAuthorForm__input">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange} />
                </div>
                <div className="AddAuthorForm__input">
                    <label htmlFor="imageUrl">Image URL</label>
                    <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange} />
                </div>
                <div className="AddAuthorForm__input">
                    <label htmlFor="bookTempl">Books</label>
                    {this.state.books.map((book) => <p key={book}>{book}</p>)}
                    <input type="text" name="bookTemp" value={this.state.bookTemp} />
                    <input type="button" value="+" onClick={this.handleAddBook} />

                </div>
                <input type="submit" value="Add" />

            </form>
        );
    }
}
const AddAuthorForm = ({ onAddAuthor }) => {
    return (
        <div className="AddAuthorForm">
            <h1>Add Author</h1>
            <AuthorForm onAddAuthor={onAddAuthor} />
        </div>
    );
}

export default AddAuthorForm;
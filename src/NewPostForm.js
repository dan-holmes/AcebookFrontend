import React from 'react';

class NewPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {message: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({message: event.target.value});
    }

    handleSubmit(event) {
        alert(`A post was submitted: ${this.state.message}`);
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="message" type="text" value={this.state.message} onChange={this.handleChange} />
                <input type="submit" value="Post" />
            </form>
        );
    }
}

export default NewPostForm;
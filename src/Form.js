import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    state = { userName: '' };

    // Create reference to access input (reads directly from dom)
    // userNameInput = React.createRef();
    handleSubmit = async (event) => {
        event.preventDefault();

        // extract in agent module
        const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);

        // handle error
        // - invalid input
        // - network problems

        this.props.onSubmit(response.data);

        this.setState({ userName: '' });

        // console.log(
        //     // with reference
        //     // this.userNameInput.current.value
        //     this.state.userName
        // );
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })}
                    placeholder="Github username"
                    // ref={this.userNameInput}
                    required
                />
                <button>Add card</button>
            </form>
        );
    }
}

export default Form;
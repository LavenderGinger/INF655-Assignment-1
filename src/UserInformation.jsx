import React from 'react';

class UserInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Someone",
            profession: "Web Developer"
        };
    }
    render() {
        const luckyNumber = Math.floor(Math.random() * 100);
        return (
            <div>
            <h1>User name is {this.state.name} and their profession is {this.state.profession}.</h1>
            <h2>Hello, {this.state.name}, your lucky number is {luckyNumber}!</h2>
            </div>
        );
    }
}

export default UserInfo;
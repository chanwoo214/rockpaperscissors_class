import React, { Component } from 'react'
import "./App.css";
import BoxClass from "./component/BoxClass";

const choice = {
    rock: {
        name: "Rock",
        img: "https://imageio.forbes.com/specials-images/imageserve/dv424076/Boulder--Namibia--Africa/960x0.jpg?format=jpg&width=960",
    },
    scissors: {
        name: "Scissors",
        img: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.625,f_auto,h_535,q_auto,w_950/c_pad,h_535,w_950/F3143807-01?pgw=1&pgwact=1",
    },
    paper: {
        name: "Paper",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2KgSETj1QwM6BzEysjPC31YCAPU5lUhDNSw&s",
    },
};

export default class AppClass extends Component {
    constructor() {
        super();
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: "",
        };
    }
    play = (userChoice) => {
        let computerChoice = this.randomChoice();
        this.setState({
            userSelect: choice[userChoice],
            computerSelect: computerChoice,
            result: this.judgement(choice[userChoice], computerChoice),
        });
    };

    judgement = (user, computer) => {
        //user == computer tie
        //user == rock, computer == "scissors" user wins
        //user == rock, computer == "paper" user loses
        //user == scissors, computer == "paper" user wins
        //user == scissors, computer == "rock" user loses
        //user == paper, computer == "rock" user wins
        //user == paper, computer == "scissors" user loses

        if (user.name === computer.name) {
            return "Tie";
        } else if (user.name === "Rock") return computer.name == "Scissors" ? "Win" : "Lose"
        else if (user.name === "Scissors") return computer.name == "Paper" ? "Win" : "Lose"
        else if (user.name === "Paper") return computer.name == "Rock" ? "Win" : "Lose"
    }

    randomChoice = () => {
        let itemArray = Object.keys(choice); // keys inside object becomes array
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return choice[final];
    };

    render() {
        return (
            <div>
                <div className="main">
                    <BoxClass
                        title="You"
                        item={this.state.userSelect}
                        result={this.state.result}
                    />
                    <BoxClass
                        title="Computer"
                        item={this.state.computerSelect}
                        result={this.state.result}
                    />
                </div>

                <div className="main">
                    <button onClick={() => this.play("paper")}>Paper</button>
                    <button onClick={() => this.play("rock")}>Rock</button>
                    <button onClick={() => this.play("scissors")}>Scissors</button>
                </div>
            </div>
        );
    }
}

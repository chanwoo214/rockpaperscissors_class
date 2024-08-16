// import { useState } from "react";
// import './App.css';
// import Box from "./component/BoxClass"

// // 1. 2 boxes (title, picture, result)
// // 2. rock paper scissors icon button
// // 3. when button is clicked, it shows inside the box
// // 4. computer has randomly selects the options
// // 5. with the result from 3,4 it will determine the winner
// // 6. according to to the result, the box colour changes (win - green, lose - red, tie - black)
// const choice = {
//   rock: {
//     name: "Rock",
//     img: "https://imageio.forbes.com/specials-images/imageserve/dv424076/Boulder--Namibia--Africa/960x0.jpg?format=jpg&width=960",
//   },
//   scissors: {
//     name: "Scissors",
//     img: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.625,f_auto,h_535,q_auto,w_950/c_pad,h_535,w_950/F3143807-01?pgw=1&pgwact=1",
//   },
//   paper: {
//     name: "Paper",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2KgSETj1QwM6BzEysjPC31YCAPU5lUhDNSw&s",
//   },
// };

// function App() {
//   const [userSelect, setUserSelect] = useState(null)
//   const [computerSelect, setComputerSelect] = useState(null)
//   const [result, setResult] = useState("")
//   const play = (userChoice) => {
//     setUserSelect(choice[userChoice])
//     let computerChoice = randomChoice();
//     setComputerSelect(computerChoice);
//     setResult(judgement(choice[userChoice], computerChoice))
//   };

//   const judgement = (user, computer) => {
//     //user == computer tie
//     //user == rock, computer == "scissors" user wins
//     //user == rock, computer == "paper" user loses
//     //user == scissors, computer == "paper" user wins
//     //user == scissors, computer == "rock" user loses
//     //user == paper, computer == "rock" user wins
//     //user == paper, computer == "scissors" user loses

//     if (user.name == computer.name) {
//       return "Tie";
//     } else if (user.name === "Rock") return computer.name == "Scissors" ? "Win" : "Lose"
//     else if (user.name === "Scissors") return computer.name == "Paper" ? "Win" : "Lose"
//     else if (user.name === "Paper") return computer.name == "Rock" ? "Win" : "Lose"
//   }

//   const randomChoice = () => {
//     let itemArray = Object.keys(choice); // keys inside object becomes array
//     let randomItem = Math.floor(Math.random() * itemArray.length);
//     let final = itemArray[randomItem];
//     return choice[final];
//   };

//   return (
//     <div>
//       <div className="main">
//         <Box title="You" item={userSelect} result={result} />
//         <Box title="Computer" item={computerSelect} result={result} />
//       </div>

//       <div className="main">
//         <button onClick={() => play("paper")}>Paper</button>
//         <button onClick={() => play("rock")}>Rock</button>
//         <button onClick={() => play("scissors")}>Scissors</button>
//       </div>
//     </div>
//   );
// }

// export default App;


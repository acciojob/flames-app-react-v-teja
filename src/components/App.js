import React, {Component, useState,useEffect} from "react";
import '../styles/App.css';



const App = ()=>{

        let [ input1Value, setinput1Value] = useState("");
    let [input2Value, setinput2Value] = useState("");
    let [resultMsg, setResultMsg] = useState("");

    const relationshipOutputs = [
                    "Siblings",
                    "Friends",
                    "Love",
                    "Affection",
                    "Marriage",
                    "Enemy"
                    ];

    function handleClick() {

        if (input1Value === "" || input2Value === "") {
            setResultMsg("Please enter valid input");
            return;
          }
          
        console.log(input1Value);
        console.log(input2Value);

         let charCount1 = {};
        let charCount2 = {};
        
         // Count the occurrences of characters in string1
        for (let char of input1Value) {
            charCount1[char] = (charCount1[char] || 0) + 1;
        }

         // Count the occurrences of characters in string2
        for (let char of input2Value) {
            charCount2[char] = (charCount2[char] || 0) + 1;
        }

        let commonLetters = new Set(Object.keys(charCount1).filter(x => charCount2[x]));

        let remainingString1 = '';
        let remainingString2 = '';

        // Construct the remaining strings by removing common letters with proper frequency
        for (let char of input1Value) {
            if (!commonLetters.has(char) || charCount1[char] > charCount2[char]) {
            remainingString1 += char;
            charCount1[char]--;
            }
        }

        for (let char of input2Value) {
        if (!commonLetters.has(char) || charCount2[char] > charCount1[char]) {
        remainingString2 += char;
        charCount2[char]--;
            }
        }

        let sumLength = remainingString1.length + remainingString2.length;
        let result = sumLength % 6;

        setResultMsg(relationshipOutputs[result]);

    }
    

    function handleClear() {
        setinput1Value("");
        setinput2Value("");
        setResultMsg("");
    }
    

        return(
            <div id="main">
                <input type="text"
                    placeholder="Enter first name"
                    id="input1"
                    name="name1" // Change the name attribute to "input1"
                    data-testid="input1"
                    value={input1Value}
                    onChange={(e) => setinput1Value(e.target.value)}
                ></input>
                <input type="text"
                    placeholder="Enter second name"
                    id="input2"
                    name="name2" // Change the name attribute to "input1"
                    data-testid="input2"
                    value={input2Value}
                    onChange={(e) => setinput2Value(e.target.value)}
                ></input>
                <button data-testid="calculate_relationship" onClick={handleClick}>Calculate Relationship Future</button>
                <button data-testid="clear" onClick={handleClear}>Clear</button>
                <h3 data-testid="answer">{resultMsg }</h3>
            </div>
        )
}


export default App;

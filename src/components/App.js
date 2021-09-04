import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Home from "./Home";
import Result from "./Result";
import Question from "./Question";
let ansArray = []


function App() {

  const [data, setData] = React.useState([])
  const [optionsArray, setOptionsArray] = useState([])


  const baseURL = "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple"


  React.useEffect(() => {

    axios.get(baseURL).then((resp) => {

      let responseData = resp.data.results;
      setData(responseData);

      // Shuffle Option Array => optionsArray
      responseData.map((eachOptions) => {

        let option = [...(eachOptions.incorrect_answers), eachOptions.correct_answer]
        let shuffleOption = []
        let i = 0;

        while (i < 4) {
          let k = Math.floor(Math.random() * 4);

          if (!shuffleOption.includes(option[k])) {
            shuffleOption.push(option[k])
            i = i + 1;
          }
        }
        return setOptionsArray(pre => {
          return [...pre, shuffleOption]
        })
      })
    })
    // Ended Shuffling

  }, []);


  console.log(data);

  const [start, setStart] = useState(true)
  const [index, setIndex] = useState(0)  //Create Index 


  const startQuiz = () => {  //Quiz Started
    setStart(false)
  }

  function handleNext(index, checked) { // Next
    console.log("n");
    console.log(checked);
    if (ansArray[index] >= 0) {
      ansArray[index] = checked
      console.log("o");
    } else {
      ansArray.push(checked)
      console.log("f");
    }
    // setCheck(checked)
    setIndex(index + 1)
    console.log(ansArray);
  }

  function handlePrevious(index) { //Previous
    console.log("p");
    setIndex(index - 1)
  }
  const [result, setResult] = useState(false)
  const [score, setScore] = useState(0)

  function handleSubmit(checked) {  //Submit
    console.log("s");
    ansArray.push(checked)
    console.log(ansArray);
    setResult(true)
    setStart(true)

    ansArray.filter((each, index) => {
      return optionsArray[index][each] === data[index].correct_answer && setScore(pre => pre + 5)
    })

  }

  return <div>
    <Header />
    {(start && !result) && <Home startQuiz={startQuiz} />}
    {(!start && !result) && <Question
      key={index}
      question={data[index].question}
      option={optionsArray}
      index={index}
      check={ansArray}
      handleNext={handleNext}
      handlePrevious={handlePrevious}
      handleSubmit={handleSubmit}
    />}
    {result && <Result ansArray={ansArray} data={data} options={optionsArray} score={score} />}


  </div>

}

export default App;


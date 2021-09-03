import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Result from "./Result";
import Question from "./Question";
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar'
// import TypoGraphy from '@material-ui/core/Typography'
// import data from "./data"



function App() {
  const baseURL = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"

  const [data, setData] = React.useState([])


  React.useEffect(() => {

    axios.get(baseURL).then((resp) => {

      setData(resp.data.results);
    })

  }, []);


  const [start, setStart] = useState(true)
  const [index, setIndex] = useState(0)
  const startQuiz = () => {
    setStart(false)
  }
  // console.log(data.results);

  function handleNext(index) {
    console.log("n");
    setIndex(index + 1)
  }

  function handlePrevious(index) {
    console.log("p");
    setIndex(index - 1)
  }
  const [result, setResult] = useState(false)
  function handleSubmit() {
    console.log("s");
    setResult(true)
    setStart(true)

  }

  function shuffle(options, correctAns) {
    let option = [...options, correctAns]

    let shuffleOption = []
    let i = 0;
    while (i < 4) {
      let k = Math.floor(Math.random() * 4);

      if (!shuffleOption.includes(option[k])) {
        shuffleOption.push(option[k])
        i = i + 1;
      }
    }

    console.log(shuffleOption);

    return shuffleOption;
  }

  return <div>
    <Header />
    {(start && !result) && <Home startQuiz={startQuiz} />}
    {(!start && !result) && <Question
      question={data[index].question}
      option={shuffle(data[index].incorrect_answers, data[index].correct_answer)}
      index={index}
      handleNext={handleNext}
      handlePrevious={handlePrevious}
      handleSubmit={handleSubmit}
    />}
    {result && <Result />}
    <Footer />

  </div>

}

export default App;

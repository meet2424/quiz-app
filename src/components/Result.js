import React from "react"

const Result = (props) => {
    // console.log(props.ansArray);



    return <div>
        Hello your score is {props.score}<br />


        {props.ansArray.map((each, index) => {

            return <div>
                <p>Question: {props.data[index].question}</p>
                <p>Correct Answer: {props.data[index].correct_answer}</p>
                <p>Your Choice: {props.options[index][each]}</p>
                <br />
            </div>

        })}
    </div>
}

export default Result;
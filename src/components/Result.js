import React from "react"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
const he = require("he")


const Result = (props) => {

    return <div className="result">
        <h2>{props.score >= 25 ? "🎉Congratulation" : "Sad"} your score is {props.score} out of 50 {props.score >= 25 ? "🥳🥳" : "🙁"}</h2>
        <br />
        <p>Analysis of Quiz</p><br />
        <Container>
            <Grid container>
                {props.ansArray.map((each, index) => {
                    return <Container>
                        <Grid >
                            <Paper className="padding" style={{ background: "#023047" }}>
                                <p item className="paper">Question{index + 1}: {he.decode(props.data[index].question)}</p>
                                <p style={
                                    { color: (props.options[index][each] === props.data[index].correct_answer ? "#22ffc0" : "#ff4958") }
                                }>Your Choice: {he.decode(props.options[index][each])}</p>
                                <p>Correct Answer: {he.decode(props.data[index].correct_answer)}</p>
                            </Paper>
                        </Grid>
                        <br />
                    </Container>
                })}
            </Grid >
        </Container>
        <h2>{props.score < 25 && "Better luck next time"}</h2>
    </div >
}

export default Result;
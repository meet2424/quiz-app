import React from "react"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';


const Result = (props) => {

    return <div className="result">
        <h2>🎉Congratulation your score is {props.score}🥳🥳</h2><br />
        <p>Summary of Quiz</p><br />
        <Container>
            <Grid container>
                {props.ansArray.map((each, index) => {
                    return <Container>
                        <Grid >
                            <Paper className="padding" style={{ background: "#023047" }}>
                                <p item className="paper">Question{index + 1}: {props.data[index].question}</p>
                                <p style={
                                    { color: (props.options[index][each] === props.data[index].correct_answer ? "#22ffc0" : "#ff4958") }
                                }>Your Choice: {props.options[index][each]}</p>
                                <p>Correct Answer: {props.data[index].correct_answer}</p>
                            </Paper>
                        </Grid>
                        <br />
                    </Container>
                })}
            </Grid >
        </Container>
    </div >
}

export default Result;
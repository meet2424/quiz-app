import React from "react"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';


const Result = (props) => {

    return <div>
        Hello your score is {props.score}<br />
        <Container>
            <Grid container>
                {props.ansArray.map((each, index) => {
                    return <Container>
                        <Grid item >
                            <Paper>
                                <p>{index + 1}{")"}. Question: {props.data[index].question}</p>
                                <br />
                                <p>Correct Answer: {props.data[index].correct_answer}</p>
                                <br />
                                <p>Your Choice: {props.options[index][each]}</p>
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
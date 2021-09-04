import React from "react";

function Home(props) {

    return <div>
        {/* Currently Working on this
         <form className="create-note" onSubmit={handleCustomize}>

            <h2>Customize</h2>
            <br />
            <TextField
                id="standard-number"
                label="Number of Questions"
                type="number"
                onChange={handleNumber}
                value={numOfQuestions}
            />

            <Fab type="submit">
                <AddIcon />
            </Fab>

        </form> */}

        <div className="center">
            <button onClick={() => props.startQuiz()}>
                Start Quiz
            </button>

        </div>
    </div>
}

export default Home;

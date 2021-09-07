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

        <div>
            <div className="home-card">

                <p style={{ fontSize: "30px" }}>Welcome to the Online<br /> Quiz App🤩</p><br />
                <p style={{ fontSize: "25px" }}>Press 👇 to start the quiz</p>
                <br /><br />
                <button
                    onClick={() => props.startQuiz()}
                    className="btn">Start Quiz
                </button>
                <br /><br />
                <p style={{ fontSize: "25px" }}>All The Best👍</p>
            </div>
        </div>
    </div>
}

export default Home;

import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
// import Zoom from "@material-ui/core/Zoom";


function Home(props) {

    return <div>
        <form className="create-note">

            <h2>Customize</h2>
            <br></br>
            <label>Number of Questions</label>
            <input
                name="num"
                placeholder="Enter Number"
            />
            <Fab>
                <AddIcon />
            </Fab>

        </form>
        <div className="center">
            <button onClick={() => props.startQuiz()}>
                Start Quiz
            </button>

        </div>
    </div>
}

export default Home;

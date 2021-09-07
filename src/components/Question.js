
import React, { useState } from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const he = require("he")


function Question(props) {

    const [checked, setChecked] = useState((props.check[props.index] ? props.check[props.index] : ""))
    const [require, setRequire] = useState(false)

    function handleChange(e) {  // change
        let val = (e.target.value);
        setChecked(val)
        setRequire(true)
    }

    const previous = () => {  // Previous   
        props.handlePrevious(props.index, checked)
        setRequire(true)
    }

    const next = () => {  // Next  
        (checked || require) ? props.handleNext(props.index, checked) : alert("Please answer the current question");
        setRequire(false)
    }

    return <div >
        <FormControl>
            <RadioGroup value={checked} onChange={handleChange} className="create-note" >
                <h2>Question {props.index + 1}
                    <span style={{ fontSize: "0.9rem" }}> (5 points)
                    </span>
                </h2>
                <br />
                <p>{he.decode(props.question)}</p>
                <br />
                <FormControlLabel value="0" control={<Radio size="medium" />} label={he.decode(props.option[props.index][0])} />
                <FormControlLabel value="1" control={<Radio size="medium" />} label={he.decode(props.option[props.index][1])} />
                <FormControlLabel value="2" control={<Radio size="medium" />} label={he.decode(props.option[props.index][2])} />
                <FormControlLabel value="3" control={<Radio size="medium" />} label={he.decode(props.option[props.index][3])} />

                <div className="dummy" />

                {(props.index !== 0) && <ArrowBackIosIcon onClick={previous} className="button-previous" fontSize="large" />}

                {(props.index !== 9) && <ArrowForwardIosIcon onClick={next} className="button-next" fontSize="large" />}

                {(props.index === 9) && <button
                    onClick={(() => (checked || require) ? props.handleSubmit(checked) : alert("Please answer the current question"))}
                    className="button-submit">Submit
                </button>}
            </RadioGroup>
        </FormControl>

    </div >
}


export default Question;

import React, { useState } from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';


function Question(props) {


    // const [click, setClick] = useState("")
    const [checked, setChecked] = useState((props.check[props.index] ? props.check[props.index] : ""))

    function handleChange(e) {  // change
        let val = (e.target.value);
        // console.log(val);
        // setClick(val)
        // console.log(e.target.value);
        // console.log(click);
        setChecked(val)
    }


    const previous = () => {  // Previous
        // setChecked(false)
        props.handlePrevious(props.index, checked)
        // setClick("")
    }

    const next = () => {  // Next
        // setClick("")
        // setChecked(false)
        console.log(checked);
        props.handleNext(props.index, checked)

    }

    // console.log(checked);



    return <div >

        <FormControl>
            <RadioGroup value={checked} onChange={handleChange} >
                <h2>{props.index + 1} {props.question}</h2>
                <br />

                {/* {(props.option[props.index] ? props.option[props.index] : []).map((eachOption, index) => { */}

                <FormControlLabel value="0" control={<Radio />} label={props.option[props.index][0]} />
                <FormControlLabel value="1" control={<Radio />} label={props.option[props.index][1]} />
                <FormControlLabel value="2" control={<Radio />} label={props.option[props.index][2]} />
                <FormControlLabel value="3" control={<Radio />} label={props.option[props.index][3]} />
                {/* })} */}

                <p>(5 points possible)</p>

            </RadioGroup>

            {(props.index !== 0) && <button onClick={previous}>Previous</button>}
            {(props.index !== 1) && <button onClick={next}>Next</button>}
            {(props.index === 1) && <button onClick={(() => props.handleSubmit(checked))}>Submit</button>}
        </FormControl>



    </div >
}


export default Question;
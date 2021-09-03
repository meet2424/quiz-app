
import React, { useState } from "react";
function Question(props) {


    const [click, setClick] = useState("")

    const [checked, setChecked] = useState(false)
    function handleChange(e) {
        let val = (e.target.id);
        console.log(val);
        setClick(val)
        setChecked(true)
        console.log(e.target.value);

        console.log(click);
    }
    const previous = () => {
        setChecked(false)
        props.handlePrevious(props.index)
        setClick("")
    }

    const next = () => {
        setClick("")
        setChecked(false)
        props.handleNext(props.index)
    }

    const handleClick = (e) => {
        let val = e.target.value
        console.log(val);
    }




    return <div className="center">
        <form className="create-note"  >
            <h2>{props.index + 1}) {props.question}</h2>
            <p>(5 points possible)</p><br />
            <label htmlFor="0">
                <input type="radio" id="0" name="option" onChange={handleChange} onClick={handleClick} checked={checked} value="0" /> {props.option[0]}
            </label><br />
            <label htmlFor="1">
                <input type="radio" id="1" name="option" onChange={handleChange} onClick={handleClick} checked={checked} value="1" /> {props.option[1]}
            </label><br />
            <label htmlFor="2">
                <input type="radio" id="2" name="option" onChange={handleChange} onClick={handleClick} checked={checked} value="2" /> {props.option[2]}
            </label><br />
            <label htmlFor="3">
                <input type="radio" id="3" name="option" onChange={handleChange} onClick={handleClick} checked={checked} value="3" /> {props.option[3]}
            </label><br />
        </form>

        {(props.index !== 0) && <button onClick={previous}>Previous</button>}
        {(props.index !== 9) && <button onClick={next}>Next</button>}
        {(props.index === 9) && <button onClick={(() => props.handleSubmit())}>Submit</button>}
    </div >

}

export default Question;
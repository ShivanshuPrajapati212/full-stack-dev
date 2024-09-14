import React, { useState } from 'react'

export default function TextForm(props) {
    const onChangeUpCase = (event) => {
        setText(event.target.value)
    }
    const onClickUpCase = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
    }
    const onClickRmPunc = () => {
        let newtext = ''
        for (let i = 0; i < text.length; i++) {
            if 
            
        }
        setText(newtext)
    }
    const [text, setText] = useState('');
  return (
    <div class="mb-3 my-5">
    <h1>{props.title}</h1>
    <textarea class="form-control" id="textbox" rows="8" value={text} onChange={onChangeUpCase}></textarea>
    <button className="btn btn-primary my-3" onClick={onClickUpCase}>Convert To Upper Case</button>
    <button className="btn btn-primary my-3" onClick={onClickRmPunc}>Remove Punctuations</button>
    </div> 
  )
}

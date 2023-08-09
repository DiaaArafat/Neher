import React from 'react'
import './FilledButton.scss'
function FilledButton(props) {
  return (
    <button className={props.Shape}>
    <span class="Fbutton-content"> {props.Content} </span>
</button>
  )
}

export default FilledButton
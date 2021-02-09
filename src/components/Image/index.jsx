import React from "react"

import {Link} from "react-router-dom"
import styles from "./image.module.css"

function Image(props) {
    return (
        <div>
        <img src={props.src}></img>
        </div>
    )
};

export default Image;
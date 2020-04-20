import React from 'react'
import { Link } from 'react-router-dom'


export default props =>
    <Link to={`${props.routes}`}>
        <i className={`fa fa-${props.icon}`}></i> {props.nome}
    </Link>


import React from 'react'
import { Spinner } from 'react-bootstrap'

const MyLoader = ()=>{
    return(
        <div>
            <Spinner animation="grow" size="sm"  variant="primary"/>
            <Spinner animation="grow" variant="success"/>
            <Spinner animation="grow" size="sm" variant="danger" />
            <Spinner animation="grow" variant="info" />
        </div>
    )
}

export default MyLoader
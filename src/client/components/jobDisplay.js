import React, { Component } from 'react';

class JobDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            company: '',
            title: ''
        }
    }
    
    render () {
        console.log("*****", this.props)
        return (
            <div>
                <p>
                {JSON.stringify(this.props.jobObj)}
                </p>
            </div>
        )
    }
}

export default JobDisplay;
import React, { Component } from 'react';

export class JobPost extends Component {
  constructor(props) {
    super(props);

  }

  filter(prop) {
    if (prop.jobObj !== null) {
      let postArr = prop.jobObj;
      let postDisp = [];
      for (let i = 0; i < postArr.length; i++) {
        let { company, title, type, url, company_logo } = postArr[i];
        postDisp.push(
          <div>
            <img src={company_logo} height="25%" width="25%"></img><br />
            <b>Company</b>: {company}<br />
            <b>Title</b>: {title} <br />
            <b>Type</b>: {type} <br />
            <b>URL</b>: <a target="_blank" rel="noopener noreferrer" href={url}>{url}</a>
            <hr></hr></div>)
      }
      return postDisp;
    } else {
      return "null"
    }
  }

  render() {

    return (
      <div>
        <div>
          {this.filter(this.props)}
        </div>
      </div>
    )
  }
}

export default JobPost;

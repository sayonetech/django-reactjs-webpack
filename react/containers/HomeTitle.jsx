import React from "react"

import Title from "../components/Title"
import UserComment from "../components/UserComments"
import Input from "../components/Inputbox"



export default class CommonTitle extends React.Component {

    constructor() {
        super();
        this.state = { items: [] };
    }

    componentDidMount() {

      let xhr = new XMLHttpRequest();
      let IP='/api/comments.json';
        xhr.open("GET", IP , false);
        xhr.send();
         if (xhr.status == 200) {
             var response = JSON.parse(xhr.responseText);
             { this.setState({items:response.results}); }
                }
    }

  render() {
    return (
      <div className="section">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <Title>Hello Try ReactJS here!!</Title>
                </div>
            </div>
              <Input />
        </div>
        <div className="container">
          <UserComment />
        </div>

            <div className="container">
              <h2>Comments:</h2>
                { this.state.items.map(item=> { return (<div>&nbsp;&nbsp;&nbsp;<span>{item.name}</span> : <span>{item.comment}</span></div>)}) }

        </div>

      </div>
    )
  }
}
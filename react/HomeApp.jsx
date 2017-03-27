import React from "react"
import { render } from "react-dom"

import CommonTitle from "./containers/HomeTitle"


class Title extends React.Component {
  render() {
    return (
            <div>
              <CommonTitle />
                <div className="container">
                </div>
            </div>
    )
  }
}

render(<Title/>, document.getElementById('Title'))
import React from "react"
var _ = require('lodash');

export default class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = { input: ''};
    }

    handleChange(e) {
        this.setState({ input: e.target.value });
    }

    render() {
            var styles = _.cloneDeep(this.constructor.styles);
            return (
                <div className="input-dynamic" style={styles.input}>
                    <input type="text" onChange={ this.handleChange.bind(this) } />	&nbsp;
                        You have typed: <code>{this.state.input}</code>
                </div>
                    )
            }
    }

Input.styles = {
    input: {
        //text-align: right;
        position: "relative", right:"100px", float:"right"
    }
}
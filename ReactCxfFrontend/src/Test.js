import React from 'react'
import axios from 'axios';

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {resp: ""};
    }

    componentDidMount() {
        var self = this;
        axios
            .get("http://localhost:8080/services/service/test")
            .then(function (response) {
                console.log(response);
                self.setState({resp: response.data});
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
                self.setState({resp: "error"});
            });
    }

    render() {
        return (
            <div>
                <div>Test get request result:</div>
                <div>{this.state.resp}</div>
            </div>
        );
    }
}

export default Test
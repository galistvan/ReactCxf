import React from 'react'
import axios from 'axios'

class UploadedFileData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filename: ""
        }
    }

    componentDidMount() {
        var self = this;
        axios
            .get("http://localhost:8080/services/service/details")
            .then(function(response) {
                console.log(response);
                self.setState({filename : response.data.filename});
            })
            .catch(function(error) {
                self.setState({filename : "error"});
                console.log(error);
            });
    }


    render() {
        return (
            <table>
                <tr>
                    <td><span>File name</span></td>
                    <td><span>{this.state.filename}</span></td>
                </tr>
                <tr>
                    <td><span>Upload date</span></td>
                    <td><span>???</span></td>
                </tr>
                <tr>
                    <td><span>Uploaded file hash</span></td>
                    <td><span>???</span></td>
                </tr>
                <tr>
                    <td><span>Uploader name</span></td>
                    <td><span>???</span></td>
                </tr>
            </table>
        )
    }


}

export default UploadedFileData
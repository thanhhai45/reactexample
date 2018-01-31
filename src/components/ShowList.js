import React, { Component } from 'react';
import _ from 'lodash';
class ShowList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="row">
                <div className="col l12">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>FullName</th>
                                <th>Phone Number</th>
                                <th style={{width: '20%'}}>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                        {this.props.todolist.map((item, index) => {
                                if (parseInt(this.props.dataWillShow) === parseInt(item.id)) {
                                    return <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.fullname}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <button
                                            onClick={this.props.dataEdit.bind(this, item.id)}
                                            className="waves-effect waves-light btn green">Edit</button>
                                            &nbsp;&nbsp;&nbsp;
                                            <button onClick={this.props.todoDelete.bind(this, item.id)}
                                            className="waves-effect waves-light btn red">Delete</button>
                                        </td>
                                        </tr>
                                } else {
                                    return <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.fullname}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <button
                                                onClick={this.props.dataEdit.bind(this, item.id)}
                                                className="waves-effect waves-light btn green">Edit</button>
                                            &nbsp;&nbsp;&nbsp;
                                            <button onClick={this.props.todoDelete.bind(this, item.id)}
                                                    className="waves-effect waves-light btn red">Delete</button>
                                        </td>
                                    </tr>
                                }
                            }
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ShowList;
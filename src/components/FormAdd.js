import React, { Component } from 'react';
import _ from 'lodash';
class FormAdd extends Component {
    constructor(props) {
        super(props);
    }

    addData = (e) => {
        e.preventDefault();
        let id = this.refs.id.value,
            name = this.refs.name.value,
            phone = this.refs.phone.value;

        var arListTodo = {
            id : id,
            fullname : name,
            phone: phone
        };
        this.props.addData(arListTodo);
    }

    render() {
        return(
            <form action="" onSubmit={this.addData.bind(this)}>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="text" ref="id" placeholder="ID"/></td>
                            <td><input type="text" ref="name" placeholder="FullName" /></td>
                            <td><input type="text" ref="phone" placeholder="Phone Number" /></td>
                            <td><button type="submit" className="waves-effect waves-light btn">Add</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        );
    }
}

export default FormAdd;
import React, { Component } from 'react';
import _ from 'lodash';
class FormAdd extends Component {
    constructor(props) {
        super(props);
      this.state = {
        id: this.props.dataEdit.id
      };
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

    componentWillMount(){
      this.setState({ id: this.props.dataEdit.id});
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
                            <td><input type="text" ref="id" placeholder="ID" value={this.props.dataEdit.id}/></td>
                            <td><input type="text" ref="name" placeholder="FullName" value={this.props.dataEdit.fullname}/></td>
                            <td><input type="text" ref="phone" placeholder="Phone Number" value={this.props.dataEdit.phone}/></td>
                            <td><button type="submit" className="waves-effect waves-light btn">Add</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        );
    }
}

export default FormAdd;
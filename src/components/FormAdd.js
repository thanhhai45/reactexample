import React, { Component } from 'react';
import _ from 'lodash';
class FormAdd extends Component {
    constructor(props) {
        super(props);
        var { id, fullname, phone } = this.props.dataWillEdit;
        this.state = {
            id : id,
            fullname: fullname,
            phone: phone
        }
        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
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

    // handleChange = (e) => {
    //     newID = e.target.value;
    //     var id = this.state.dataWillEdit.id; 
    //     this.setState({id:newID});
    // }
    handleChangeId(event) {
        this.setState({id: event.target.value});
    }
    handleChangeName(event) {
        this.setState({fullname: event.target.value});
    }
    handleChangePhone(event) {
        this.setState({phone: event.target.value});
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
                            <td><input type="text" ref="id" placeholder="ID" value={this.state.id}/></td>
                            <td><input type="text" onChange={this.handleChangeName} ref="name" placeholder="FullName" value={this.state.fullname}/></td>
                            <td><input type="text" onChange={this.handleChangePhone} ref="phone" placeholder="Phone Number" value={this.state.phone}/></td>
                            <td><button type="submit" className="waves-effect waves-light btn">Add</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        );
    }

    componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.dataWillEdit.id !== this.state.id) {
            this.setState({ id: nextProps.dataWillEdit.id });
        }
        if (nextProps.dataWillEdit.fullname !== this.state.fullname) {
            this.setState({ fullname: nextProps.dataWillEdit.fullname});
        }
        if (nextProps.dataWillEdit.phone !== this.state.phone) {
            this.setState({ phone: nextProps.dataWillEdit.phone });
        }
    }
}

export default FormAdd;
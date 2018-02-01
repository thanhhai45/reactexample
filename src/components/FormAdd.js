import React, { Component } from 'react';
import _ from 'lodash';
import './FormAdd.css';
class FormAdd extends Component {
    constructor(props) {
        super(props);
        var { id, fullname, phone } = this.props.dataWillEdit;
        this.state = {
            id: id,
            fullname: fullname,
            phone: phone,
            active: '',
            errorPhone: ''
        }
        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
    }

    addData = (e) => {
        e.preventDefault();
        let id = this.refs.id.value,
            name = this.refs.name.value,
            phone = this.refs.phone.value;

        var arListTodo = {
            id: id,
            fullname: name,
            phone: phone,
        };
        this.props.addData(arListTodo);
    }

    // handleChange = (e) => {
    //     var target =e.target;
    //     var name=target.name;
    //     var value=target.value;
    //     this.setState({
    //         [name]:value
    //     })
    // }

    handleChangeId(event) {
        this.setState({ id: event.target.value });
    }
    handleChangeName(event) {
        this.setState({ fullname: event.target.value });
    }
    handleChangePhone(event) {
        this.setState({ phone: event.target.value });
    }

    handlePressPhone(event) {
        if (event.keyCode === 8 && event.target.value.length === 0) {
            this.setState({ errorPhone: '' });
        } else if (event.target.value.length < 10 || event.target.value.length > 11) {
            this.setState({ errorPhone: 'The phone isnt less than 10 and more than 11 number' });
        }
        else {
            var regex = /(09|01[2|6|8|9])+([0-9]{8})\b/;
            if (regex.test(event.target.value)) {
                this.setState({ errorPhone: '' });
            }
        }
    };

    render() {
        return (
            <form action="" onSubmit={this.addData.bind(this)}>
                <table className='showlsit'>
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
                            <td><input type="text" onChange={this.handleChangeId} ref="id" placeholder="ID" value={this.state.id} /></td>
                            <td><input type="text" onChange={this.handleChangeName} ref="name" placeholder="FullName" value={this.state.fullname || ''} /></td>
                            <td><input type="text" onChange={this.handleChangePhone} onKeyUp={this.handlePressPhone.bind(this)} ref="phone" placeholder="Phone Number" value={this.state.phone} />
                                <span>{this.state.errorPhone}</span>
                            </td>
                            <td><button type="submit" disabled={this.state.id ? '' : 'disabled'} className="waves-effect waves-light btn">Add</button></td>
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
            this.setState({ fullname: nextProps.dataWillEdit.fullname });
        }
        if (nextProps.dataWillEdit.phone !== this.state.phone) {
            this.setState({ phone: nextProps.dataWillEdit.phone });
        }
    }
}

export default FormAdd;
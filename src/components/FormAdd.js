import React, { Component } from 'react';
import './FormAdd.css';
class FormAdd extends Component {
    constructor(props) {
        super(props);
        var { id, fullname, phone } = this.props.dataWillEdit;
        this.state = {
            id : id,
            fullname: fullname,
            phone: phone,
            errorName : '',
            errorID: '',
            errorPhone: ''
        }
        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleBlurName = this.handleBlurName.bind(this);
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
    handleBlurName = (event) => {
         if (event.keyCode === 8 && event.target.value.length === 0) {
            this.setState({errorName: ''});
         }
        else if (event.target.value.length < 5 || event.target.value.length > 50) {
            this.setState({errorName: 'Data not less than five character'});
        }
        else {
            this.setState({errorName: ''});
        }
    };

    handleBlurPhone = (event) => {
        if (event.keyCode === 8 && event.target.value.length === 0) {
            this.setState({errorPhone: ''});
        }
        else if (event.target.value.length < 10 || event.target.value.length > 11) {
            this.setState({errorPhone: 'Data not less than 10 and more than 11 number'});
        }
        else {
            this.setState({errorPhone: ''});
        }
    };
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
                        <tr className="formadd">
                            <td><input onChange={this.handleChangeId} type="text" ref="id" placeholder="ID" value={this.state.id}/>
                                <span>{this.state.errorID}</span></td>
                            <td><input
                                       type="text"
                                       onChange={this.handleChangeName}
                                       onKeyUp={this.handleBlurName}
                                       ref="name" placeholder="FullName" value={this.state.fullname}/>
                                <span>{this.state.errorName}</span>
                            </td>
                            <td>
                                <input type="number"
                                       onChange={this.handleChangePhone}
                                       onKeyUp={this.handleBlurPhone}
                                       ref="phone" placeholder="Phone Number"
                                       value={this.state.phone}/>
                                <span>{this.state.errorPhone}</span>
                            </td>
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
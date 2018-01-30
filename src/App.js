import React, { Component } from 'react';
import './App.css';
import FormAdd from './components/FormAdd';
import ShowList from './components/ShowList';
import _ from 'lodash';
const todoslist = [
  {
    id: '1',
    fullname: "Nguyen Huy Phuc",
    phone: '0123456789'
  },
  {
    id: '2',
    fullname: "Pham Thanh Nghia",
    phone: '0987654321'
  },
  {
    id: '3',
    fullname: "Le Thanh Hai",
    phone: '0963094843'
  }
];

const object = {
  id: '',
  fullname: '',
  phone: ''
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: todoslist,
      obj: object
    };

    // const addData = this.addData.bind(this);
  }
  render() {
    return (
      <div className="container">
        <h1 className="title">CRUD TODOS APP</h1>
        <FormAdd addData={this.addData.bind(this)}
          listData={this.state.list}
          dataWillEdit={this.state.obj}
          editData={this.editData.bind(this)}
        />
        <ShowList todolist={this.state.list}
          todoDelete={this.removeData.bind(this)}
          dataEdit={this.findData.bind(this)}
        />
      </div>
    );
  }

  addData = (todos) => {
    var flag = true;
    var { list } = this.state;
    if (todos) {
      _.find(list, (item, index) => {
        if (item.id === todos.id) {
          list[index] = todos
          flag = false
        }
      });
    }
    if (flag) {
      list.push(todos);
    }
    this.setState({
      list: list
    });
  }
  
  removeData = (id) => {
    // var obj = this.findDataById.bind(this, id);
    // console.log(obj);
    if (true) {
      _.remove(this.state.list, item => item.id === id);
      console.log(this.state.list);
      this.setState({ list: this.state.list });
    }
  }

  editData = (obj) => {
    console.log(obj)
    _.find(this.state.list, (item) => {
      if (item.id === obj.id) {
        this.setState({
          item: obj
        })
      }
    });
    console.log(this.state.list)
  }

  findData = (id) => {
    this.setState({ obj: _.find(this.state.list, function (o) { return o.id === id; }) });
  }

  // findDataById = (id) => {
  //     _.find(this.state.list, (item) => {
  //         if (item.id === id) {
  //             return item;
  //         }
  //     });
  // }
}

export default App;

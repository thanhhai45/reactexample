import React, { Component } from 'react';
import './App.css';
import FormAdd from './components/FormAdd';
import ShowList from './components/ShowList';
import _ from 'lodash';
const todoslist = [
    {
      id: 1,
      fullname: "Nguyen Huy Phuc",
      phone: '0123456789'
    },
    {
      id: 2,
      fullname: "Pham Thanh Nghia",
      phone: '0987654321'
    },
    {
        id: 3,
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
        />
        <ShowList todolist={this.state.list} 
                  todoDelete={this.removeData.bind(this)} 
                  dataEdit={this.findData.bind(this)}
                  dataWillShow="1"
        />
      </div>
    );
  }

  addData = (todos) => {
      const id = parseInt(todos.id);
      var data = _.findIndex(this.state.list, function (o, index) {
          return o.id === id;
      });
      if (data < 0) {
          todoslist.push(todos);
          this.setState({
              list: todoslist
          });
      }
      else {
          var { list } = this.state;
          list[data] = todos;
          this.setState({list: this.state.list});
      }
  };

  removeData = (id) => {
    if (true) {
        _.remove(this.state.list, item => item.id === id);
        console.log(this.state.list);
        this.setState({list: this.state.list});
    }
  }

  findData = (id) => {
    this.setState({ obj: _.find(this.state.list, function (o) { return o.id === id; }) });
  }

}

export default App;

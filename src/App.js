import React, { Component } from 'react';
import './App.css';
import FormAdd from './components/FormAdd';
import ShowList from './components/ShowList';
import _ from 'lodash';
import Search from './components/Search';
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
      obj: object,
      searchObj: []
    };

    // const addData = this.addData.bind(this);
  }
  render() {
    return (
      <div className="container">
        <h1 className="title">CRUD TODOS APP</h1>
        <Search searchData={this.searchData.bind(this)}/>
        <FormAdd addData={this.addData.bind(this)}
          listData={this.state.list}
          dataWillEdit={this.state.obj}
          editData={this.editData.bind(this)}
        />
        <ShowList todolist={this.state.searchObj.length > 0 ? this.state.searchObj : this.state.list}
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
    var object11 = {
      id: '',
      fullname: '',
      phone: ''
    }
    var { searchObj } = this.state;
    searchObj.push(object11)
    this.setState({
      searchObj: searchObj
    })
    console.log(this.state.searchObj)
  }

  removeData = (id) => {
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

  }

  searchData = (name) => {
    var { searchObj ,list} = this.state
    var flag=false
    _.find(list, (item) => {
      if (item.fullname === name||item.id === name||item.phone === name) {
        this.state.searchObj.map((obj)=>{})
        searchObj.push(item)
        flag=true
      }
    });
    if(flag){
      this.setState({
        searchObj:searchObj
      })
    }else{
      alert('Not found data')
    }
   
  }
  findData = (id) => {
    this.setState({ obj: _.find(this.state.list, function (o) { return o.id === id; }) });
  }

  
}

export default App;

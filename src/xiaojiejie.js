import React,{ Component, Fragment} from 'react';

class Xiaojiejie extends Component{
  constructor(props){
    super(props);
    this.state = {
      list: ['吃屎', '喝酒'],
      inputValue: 'liurongdong'
    }
  }

  render(){
    return (
      <Fragment>
        <div>
          <input value = {this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
          <button onClick={this.handleClick.bind(this)}>增加</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) =>{
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </Fragment>

    )

  }
  handleInputChange(e) {
    console.log(e.target.value);
    this.setState({inputValue:e.target.value})
  }
  handleClick() {
    this.setState({list:[...this.state.list, this.state.inputValue],inputValue:''})
  }
}


export default Xiaojiejie
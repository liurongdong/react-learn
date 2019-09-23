import React, { Component } from 'react';//impr
import PropTypes from 'prop-types'
// TODO:  Component 和  的区别
class XiaojiejieItem extends Component {
  constructor(props) {
    super(props);
    // TODO: 改变以往方式  在construction函数中改变函数bind 里的this 指向 
      // 据说性能有提升  以后研究
    this.handleClick = this.handleClick.bind(this);
  }
  
  state = {  }
  render() { 
    return ( <div onClick={this.handleClick}>{this.props.content}</div> );
  }
  handleClick() {
    console.log('即将删除元素');
    // console.log(this.props.index);
    this.props.deleteItem(this.props.index);
  }
}

// 父组件往子组件传值  子组件需要进行校验
XiaojiejieItem.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}
export default XiaojiejieItem;
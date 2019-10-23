import React, { Component, Fragment } from "react";
import XiaojiejieItem from "./xiaojiejieItem";
import "./style.css";
class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["吃屎", "喝酒"],
      inputValue: "liurongdong",
      p: "<h1>刘荣东<h1>"
    };
  }
  //只在页面加载时执行一次
  componentWillMount() {
    console.log("will mount");
  }
  //只在页面加载时执行一次
  componentDidMount() {
    console.log("did mount");
  }
  shouldComponentUpdate() {
    console.log("sdf");
    return true;
  }

  // state 和 props 改变时就会执行
  render() {
    console.log("render");
    return (
      <Fragment>
        {/* 设置dangerouslySetInnerHTML属性的内容不能有子元素存在 */}
        <div dangerouslySetInnerHTML={{ __html: this.state.p }}></div>
        <div>
          {/* jsx中label的for 要使用htmlfor 代替防止与javascript 中的for混淆 */}
          <label htmlFor="liurongdong">加入服务：</label>
          <input
            id="liurongdong"
            ref={input => (this.input = input)}
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleClick.bind(this)}>增加</button>
        </div>
        <ul ref={ul => (this.ul = ul)}>
          {/* jsx内的注释不同  尽量用编辑器自带的注释快捷键 */}
          {this.state.list.map((item, index) => {
            // 不用子组件
            // return (<li key={index} onClick={this.deleteItem.bind(this, index)} >{item}</li>)

            // 改用子组件
            return (
              // <div key={index}>
              <XiaojiejieItem content={item} key={index} index={index} deleteItem={this.deleteItem.bind(this)} />
              // </div>
            );
          })}
        </ul>
      </Fragment>
    );
  }
  handleInputChange(e) {
    console.log(e.target.value);
    this.setState({ inputValue: this.input.value.trim() });
  }
  handleClick() {
    // TODO: setState是异步操作 console.log 是同步的会先执行
    this.setState({ list: [...this.state.list, this.state.inputValue], inputValue: "" }, () => {
      console.log("当前元素数量  点击增加触发" + this.ul.querySelectorAll("div").length);
    });
  }
  deleteItem(item) {
    console.log(item);

    //不要直接修改state 内容
    // 拷贝一份 再修改内容
    let list = this.state.list;
    list.splice(item, 1);
    this.setState({ list });
  }
}

export default Xiaojiejie;

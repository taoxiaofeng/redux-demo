import React from 'react';
// 导入 store
import store from '../store';
// 导入action构建函数
import { sendAction } from '../action';
export default class Home extends React.Component {
  handleClick = () => {
    const action = sendAction();
    // 发送一个action  利用store
    store.dispatch(action)
  }

  // 当组件一加载完毕的时候  来监听
  componentDidMount() {
    store.subscribe(() => {
      console.log("subscribe:", store.getState())
      this.setState({})
    })
  }
  render() {
    return (
      <>
        <button onClick={this.handleClick}>点我发送一个 action</button>
        <div>{store.getState().value}</div>
      </>
    )
  }
}
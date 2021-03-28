import React from "react";
import propTypes from "prop-types";


class App extends React.Component{
  //스테이씨아니고 state..
  state = {
    //state는 오브젝트이고 component안에 data를 넣고
    //그 데이터는 변해(스테이트를 쓰는이유)
    count :0
  }
  add = () => {
	this.setState(current => ({count : current.count + 1}));
	//this.setState({count : this.**state**.count -1});
	//위아같이 setState할때 state를 직접쓰는건 좋지x, a:의존하지않아야하기때문에!
  };
  minus = () => {
	this.setState(current => ({count : current.count - 1}));
  };
  //**** 매순간 위의 this.setState 를 호출할때마다 render()도 함께 호출
  render(){
    return(
	<div>
    	<h1>
        	안녕나야 {this.state.count}
        </h1>
		<button onClick={this.add}>Add</button>
		<button onClick={this.minus}>Minus</button>
    </div>
	
	)
  }
}

export default App;
import React from "react";
export default class Input extends React.Component<React.HTMLAttributes<HTMLInputElement>, {input:string|number|string[]}>{

  ele:HTMLInputElement;
  state={
      input: ""
  }
  render() {
    let {...attributes} = this.props;
    return (
    <div>
        <input ref={(e)=>this.ele=e} value={this.state.input} onChange={(e)=>this.setState({input: e.currentTarget.value})}/>
        <h4>{this.state.input}</h4>
        <h5>{this.ele && this.ele.value}</h5>
    </div>
    );
  }
}
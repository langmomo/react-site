import React from "react";
interface toggleProps {
    selected:boolean;
    
}

interface toggleStates{
    selected:boolean
}

export default class Toggle extends React.Component<toggleProps, toggleStates>{
    state:toggleStates={
        selected: this.props.selected
    }
    
    handleToggle(select:boolean){
        console.log("curr"+this.state.selected);
        this.setState({"selected":!select});
        //this.props.onToggle(!this.state.selected);
    }
    render(){
        let {selected} = this.state
        return(
            <div>
                <h1>new</h1>
                <button onClick={()=>this.handleToggle(selected)}>button</button>
                
                {this.state.selected && this.props.children}
            </div>
            
        )
    }
}
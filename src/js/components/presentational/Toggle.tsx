import React from "react";
interface toggleProps extends React.HTMLAttributes<HTMLDivElement> {
    selected:boolean;
    
}

interface toggleStates{
    selected:boolean
}

export default class Toggle extends React.Component<toggleProps, toggleStates>{
    state:toggleStates={
        selected: this.props.selected
    }
    
   
    render(){
        let {selected} = this.state
        return(
            <div>                
                {this.props.selected && this.props.children}
            </div>
            
        )
    }
}
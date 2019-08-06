import React from 'react';

export default class Tooltip extends React.Component<React.HTMLAttributes<HTMLDivElement>, {selected: boolean}>{
    
    private element:HTMLDivElement;
    private p: HTMLParagraphElement;
    state={
        selected: false
    }
    showInfo=()=>{
        // var count = this.element.childElementCount;
        // this.p = document.createElement("div");
        // this.p.innerHTML = "message"
        // this.element.appendChild(this.p)
        this.setState({selected: true})
        
    }

    hideInfo(){
        // this.element.removeChild(this.p)
    }
    render(){
        let {children} = this.props
        const tooltipStyle={
            display: this.state.selected ? 'block' : 'none'
        }
        return(
            <div ref={(e)=>this.element = e} onMouseEnter={this.showInfo} onMouseLeave={this.hideInfo.bind(this)}>
            hover tooltip
                
                    <div style={tooltipStyle}>this is the tooltip!!</div>
                {children}
            </div>
        )
    } 
}
import React from "react";

class ImageClassComponent extends React.Component{
    render(){
        console.log("this",  this)
        console.log("Props", this.props)

        return(
            <img src={this.props.src} alt={this.props.alt} width={this.props.width}/>
        )
    }
}

export default ImageClassComponent
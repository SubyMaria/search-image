import React, { Component } from 'react'
import './ImageCard.css'

export default class ImageCard extends Component {
 
    constructor(props){
        super(props)

        this.state = {spans : 0}
    }


  
    componentDidMount(){
        //console.log(this.imgRef.clientHeight)
        this.imgRef.addEventListener('load',this.setSpans)
    }

    setSpans = () => {
        //console.log(this.imgRef.clientHeight)
        const height = this.imgRef.clientHeight
        const spans = Math.ceil(height/10)

        this.setState({spans : spans})
        //we can also write as this.setState({span}) because state variable is same name as variable above(es15) 
    }


    render() {
        return (
            <div style = {{gridRowEnd : `span ${this.state.spans}`}}>
                <img ref = {(img) => {this.imgRef = img} } 
                alt ={this.props.image.description} 
                src = {this.props.image.urls.regular} />
            </div>
        )
    }
}



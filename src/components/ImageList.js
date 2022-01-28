// import React from 'react'

// const ImageList = (props) => {

//     const images = props.images.map((img) => {
//         return <img key = {img.id} src = {img.urls.small} alt = ''></img>
//     }) 



//     return(
//         <div>{images}</div>
//     )
// }


// export default ImageList


//--------------------------------------------------------
// class based componenet 

import React, { Component } from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'

export default class ImageList extends Component {
  
  
    render() {

                     const imgToRender = this.props.images.map((img) => {
                         return <ImageCard image = {img} key = {img.id}  />
                        })

        return (

        <div className = 'image-list'>

            {imgToRender}
             
        </div>
        )
    }
}





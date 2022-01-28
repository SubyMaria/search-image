import React from "react";
import axios from 'axios'
import SearchBar from './SearchBar'
import ImageList from "./ImageList";
import './App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'






class App extends React.Component {

    constructor(){
        super()

        this.state = {images : []}
    }

    // onSearchSubmit = (term) => {
    //     axios.get('https://api.unsplash.com/search/photos',{
    //         params : {query : term},
    //         headers : {Authorization: 'Client-ID 76mumkUjNJI3PvLboxODklVU_pzlB6tZMbm9UnVDhNI'}
    //     })
    //     .then((response) => {
    //            console.log(response.data.results)
    //              this.setState({images : response.data.results})
    //     })
    // }



   
     onSearchSubmit = async (term) => {
        
       const response = await axios.get('https://api.unsplash.com/search/photos',{
            params : {query : term, per_page : 30},
            
            headers : {Authorization: 'Client-ID 76mumkUjNJI3PvLboxODklVU_pzlB6tZMbm9UnVDhNI'}
            //console.log(term)
        })
        
        
        this.setState({images : response.data.results})
        //console.log(response.data.results)
    }

    render(){
        return(


            <div className = 'background'>
                <SearchBar onSubmit = {this.onSearchSubmit} />
                <ImageList images = {this.state.images} />
               <hr/>
            </div>


        )
    }
}

export default App
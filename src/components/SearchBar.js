import React from 'react'
import './SearchBar.css'


class SearchBar extends React.Component {

    constructor(props){
        super(props)

        this.state = {term :''}
        

    }

    onInputChange = (event) => {
       this.setState({term : event.target.value})
       
    }

    onFormSubmit = (event) => {
        event.preventDefault()

        this.props.onSubmit(this.state.term)

        //console.log(this.state.term)
    }





    render(){
        
        return (
            <div className = 'container shadow p-3 mb-5 bg-body rounded'>
                

                <form onSubmit = {this.onFormSubmit} className = 'form-group'>
                    
                   <label className = 'label'>Image Search</label>

                   <input type = 'text' 
                   className = 'form-control'
                   value = {this.state.term} 
                   onChange = {this.onInputChange} />

                </form>



            </div>
        )
    }
}

export default SearchBar
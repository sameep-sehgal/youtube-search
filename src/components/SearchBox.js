import React from 'react';
import './SearchBox.css';

class SearchBox extends React.Component{
    state={search:''}
    render(){
        return(
            <form onSubmit={event=>{
                if(this.state.search){
                    event.preventDefault();
                    this.props.onSearchChange(this.state.search);
                    this.setState({search:''})
                    }}
                }>
                <input type='text' value={this.state.search} 
                onChange={event=>this.setState({search:event.target.value})} placeholder="Search Videos.."/>
            </form>
        )
    }
}

export default SearchBox;
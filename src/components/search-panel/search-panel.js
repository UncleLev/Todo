import React,{Component} from 'react';
import './search-panel.css'


export default class SearchPanel extends Component {
    onChanging = (event) => {
        let text = event.target.value;
        this.props.onSearch(text);
    }
    render(){
        
        return (
            <input onChange = {this.onChanging} 
                className = 'search-input' placeholder = "search" type = "text" />
        )
    }
}
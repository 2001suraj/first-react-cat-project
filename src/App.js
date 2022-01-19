import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import {SearchBox} from './components/search-box/search-box.components'

class App extends Component {
    constructor() {
        super();
        this.state = {
            dogs: [],
            searchField:'',
        };
        this.handlechange = this.handlechange.bind(this);
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ dogs: users }));
    }
    handlechange = (e)=>{
        this.setState({searchField :e.target.value})
    }
    render() {
        const {dogs,searchField} =this.state;
        const filteredDogs  = dogs.filter(dog => dog.name.toLowerCase().includes(searchField.toLowerCase()));

        return (
            <div className="App">
                <h1 className='h11'>Cat Into</h1>
                <SearchBox placeholder='search'
                handlechange={this.handlechange } 
                />
                <CardList dogs= {filteredDogs } />
                
            </div>
        );
    }
}


export default App;

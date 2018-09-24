import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext();

const reducer = (state, action)=>{
    switch(action.type){
        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts: state.contacts.filter(contact =>
                    contact.id !== action.payload)
            }
        case 'ADD_CONTACT':
        return{
            ...state,
            contacts: [action.payload, ...state.contacts]
        }
        
        case 'UPDATE_CONTACT':
            return{
                ...state,
                contacts: state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact)
            }
        default:
            return state;
    }
}

export class Provider extends Component {

    state = {
        contacts: [
           
        ],
        dispatch: action => 
            this.setState(state => reducer(state, action))
        
    }

    async componentDidMount() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.setState({contacts:response.data})
    }


    render(){

        return <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
        
        
    }
    
}

export const Consumer = Context.Consumer;

/**
 *  {
                id:1,
                name: "John Does",
                email: "codesworth@gmail.com",
                phone: "+233 0500016882"
            },
            {
                id:2,
                name: "Jerry Bart",
                email: "jbart@gmail.com",
                phone: "+233 5683016882"
            },
            {
                id:3,
                name: "Barry Stillsa",
                email: "bastills@gmail.com",
                phone: "+233 3459433"
            }
 */
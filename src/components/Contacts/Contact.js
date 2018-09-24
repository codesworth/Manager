import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../../Context'
import axios from 'axios'
import {Link} from 'react-router-dom'
 class Contact extends Component {

  state = {
    showsinfo:true
  }
  onShowClick = () =>{
    
  }
  async onDeleteClick(id, dispatch){

    const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch({type: 'DELETE_CONTACT', payload : id})
    
  }
  render() {



      const { showsinfo } = this.state;
      const {id, name, email, phone} = this.props.contact;

      return(
        <Consumer>
          {value => {
            const {dispatch} = value;
            return(
              <div className="card card-body mb-3">
        <h4>{name} <i onClick = { () => this.setState({showsinfo: !this.state.showsinfo})} 
        className="fas fa-sort-down" style={{ cursor:'pointer'}}></i>
        <i className="fas fa-times"style={{ cursor:'pointer', float:'right', color:'#795ccd'}}
        onClick={this.onDeleteClick.bind(this,id, dispatch)}>
        </i>
        <Link to={`contact/edit/${id}`}>
          <i className="fas fa-pencil-alt" style={{cursor :'pointer', float: 'right', color: 'black', marginRight: '1 rem'}}></i>
        </Link></h4>
        { showsinfo ? (<ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className= "list-group-item">Phone: {phone}</li>
        </ul>) : null}
      </div>
            )
          }}
        </Consumer>
      )
  }
}

Contact.propTypes ={
  contact: PropTypes.object.isRequired,
  
 
}


export default Contact
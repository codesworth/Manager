import React, { Component } from 'react'

class AddContact extends Component {

  constructor(){
    super();

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  static defaultProps = {
    name: "Lord Leyton",
    email: "leyton@gamil.com",
    phone: '+23350017883'
  }
 

  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    }

    console.log(contact);
    

  }

  render() {

    const {name, email, phone} = this.props;
    return (
      <div>
        <div className="card mb-3">
          <div className="card-header">Add Contact</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" className="form-control form-control-lg" placeholder="Enter Name..." defaultValue= {name} ref={this.nameInput}
                />
                
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" className="form-control form-control-lg" placeholder="Enter Email..." defaultValue = {email}
                ref={this.emailInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" className="form-control form-control-lg" placeholder="Enter Phone Number..." defaultValue = {phone} ref={this.phoneInput}
                />
              </div>
              <input type="submit" className="btn btn-block btn-light" value="Add Contact"/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddContact;
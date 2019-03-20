import React, { Component } from 'react'
import {connect} from 'react-redux';
 class SignUp extends Component {
    
    //  handleChange = (e) => {
    //    console.log("Chnage ", e.target.value)
    //     this.setState({[e.target.id] : e.target.value});
    //     console.log("Changed state", this.state)
    //  }
     handleSubmit = (e) => {
       e.preventDefault();
       console.log("All gotten State",this.state);
     }
     handleFormChange = (e) => {
       var data = {
        id : e.target.id,
        value : e.target.value
       }
       this.props.handleChange(data);
     }
  render() {
    console.log("Props from signUp Component", this.props)
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" onChange={this.handleFormChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleFormChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" onChange={this.handleFormChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" onChange={this.handleFormChange}/>
            </div>
            <button type="submit" >Submit</button>
            <label>{this.props.myProps && this.props.myProps.email}</label>
            <input type="text" id="lastName" value={this.props.myProps.email}/>
            {/* <div className="inputfield"><button type="submit" className="btn pink lighten-1 z-depth-0">SIGN UP</button></div> */}
        </form>
      </div>
    )
  }
}

const mapStateToProps  = (state) => {
  console.log("MapStateToProps" , state)
  return {
    myProps : state.SignUp
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange : (data) => dispatch({type : "CHANGE_VALUE", payload : data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
// export default SignUp;

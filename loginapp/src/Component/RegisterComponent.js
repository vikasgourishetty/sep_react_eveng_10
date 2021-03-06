import React,{Component} from 'react';

const registerurl = "http://localhost:5001/api/auth/register";

class RegisterComponent extends Component{
    constructor(){
        super()

        this.state={
            name:'',
            email:'',
            password:''
        }
    }

    

    handleChangeName=(event)=>{
        this.setState({name:event.target.value})
    }
    handleChangeEmail=(event)=>{
        this.setState({email:event.target.value})
    }
    handleChangePassword=(event)=>{
        this.setState({password:event.target.value})
    }
    

    handleSubmit=()=>{
        var data={
            "name":this.state.name,
            "email":this.state.email,
            "password":this.state.password
        }
        fetch(registerurl,{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then((this.props.history.push('/login')))
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        Register Component
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label className="control-label">Name</label>
                            <input type="text" name="fname" value={this.state.name}
                             className="form-control" onChange={this.handleChangeName}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Email</label>
                            <input type="text" name="email" value={this.state.email}
                             className="form-control" onChange={this.handleChangeEmail}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Password</label>
                            <input type="text" name="password" value={this.state.password}
                             className="form-control" onChange={this.handleChangePassword}/>
                        </div>
                        <button className="btn btn-success" onClick={this.handleSubmit}>
                            Register
                        </button>
                     </div>

                </div>

            </div>

        )
    }
} 

export default RegisterComponent;
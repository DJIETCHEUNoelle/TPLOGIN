import React, { Component } from "react";
import { Button } from 'antd';
import 'antd/dist/reset.css';
import './Login.css';
import { Input } from 'antd';

class Login extends Component{
    

        state={
            username: null,
            password:null
        } 

    render()
    
    
    
    {
        return(
            <div >
                <div className="Input">
                    <Input placeholder="Basic usage" value={this.state.username} onChange={(event)=>this.setstate({username:event.target.value})}/>
                    <Input placeholder="Basic usage" value={this.state.password} onChange={(event)=>this.setstate({password:event.target.value})}/>
                </div>

        <Button className="Button" type="primary">Button</Button>
    </div>
        )
    }
}

  export default Login;
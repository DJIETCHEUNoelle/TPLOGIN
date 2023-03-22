import React, { Component } from "react";
import TabsComponentNavBar from "../NavBAR/NavBar";
import { Button } from 'antd';
import 'antd/dist/reset.css';
import './Login.css';
import { Input } from 'antd';
import NavBAR from "../NavBAR/NavBar";

class Login extends Component{
    

        state={
            
            username: null,
            password:null,
        } 

    render()
    
    
    
    {
        return(
           
            <div className="Box">
                
                <div className="Input">
                     <NavBAR/>
                    <Input placeholder="Basic usage" value={this.state.username} onChange={(event)=>this.setstate({username:event.target.value})}/>
                    <Input placeholder="Basic usage" value={this.state.password} onChange={(event)=>this.setstate({password:event.target.value})}/>
                </div>

              <Button className="Button" type="primary">Button</Button>
    </div>
        )
    }
}

  export default Login;
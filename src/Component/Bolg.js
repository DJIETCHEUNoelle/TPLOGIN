import React, { Component } from "react";
import { Button } from "antd";
import Login from "./Login/Login";
import TabsComponent from "./Tab,";
import TabsComponentNavBar from "./NavBAR/NavBar";


class Blog extends Component{
    render(){
        return(
            <div>
                <TabsComponent/>
               {/*  <TabsComponentNavBar/> */}
                {/* <Login/> */}
            </div>

        )
    }
}
export default Blog;
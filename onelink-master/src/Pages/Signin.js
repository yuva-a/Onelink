import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Signin() {

    const [email,setEmail] = useState();
    const [password,setPasswors] = useState();

    const handlesubmit = ()=>{

    }


    return (
        <div className="loginbody">
        <div className="loginmain">

            <div className="loginlogo">
                one<span>Link</span>
            </div>
            <FormControl>
                <FormLabel>
                    Email
                </FormLabel>
                <Input type="email"/>
            </FormControl>
            <FormControl>
                <FormLabel>
                    Password
                </FormLabel>
                <Input type="password"/>
            </FormControl>
            <div className="loginbt">
            <Button colorScheme="purple" onClick={()=>handlesubmit()}>Log In</Button>
            <p>New to onLink? <Link to="/register">Register</Link></p>
            </div>
        </div></div>
    )
}

export default Signin

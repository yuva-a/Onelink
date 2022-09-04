import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";
import React, { useRef, useState } from "react";
import "./styles.css";

function Profile() {
  const [edit, setEdit] = useState(false);
  const imgref = useRef();
  const [username, setUsername] = useState("bharath1729");
  const [name, setName] = useState("Bharath Reddy");
  const [bio, setBio] = useState("Tech Enthusiast");

  return (
    <div className="prm">
      <div className="prms">
          <div className="prmp">
        <Avatar size="2xl" />
        {
            edit? <>
            <input
            style={{display:"none"}}
            ref={imgref} type="file" accept="image/*" name="" id="" />
            <Button 
            style={{margin:"50px"}}
            onClick={()=>imgref.current.click()}>Upload Image</Button>
            </>:null
        }
        
        </div>
        <div className="prmf">
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              isReadOnly={!edit}
              value={username}
              onChange={(e) => {
                if (edit) {
                  setUsername(e.target.value);
                }
              }}
            />
          </FormControl>
        </div>
        <div className="prmf">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              isReadOnly={!edit}
              value={name}
              onChange={(e) => {
                if (edit) {
                  setName(e.target.value);
                }
              }}
            />
          </FormControl>
        </div>
        <div className="prmf">
          <FormControl>
            <FormLabel>Bio</FormLabel>
            <Textarea
              isReadOnly={!edit}
              value={bio}
              onChange={(e) => {
                if (edit) {
                  setBio(e.target.value);
                }
              }}
            />
          </FormControl>
        </div>
        <div className="prme">

        {
            !edit ? <Button onClick={() => setEdit((e) => !e)}>Edit Profile</Button> :
            <>
            <Button onClick={() => setEdit((e) => !e)}>
            Cancel
        </Button>

          <Button onClick={() => setEdit((e) => !e)}>
              Save Changes
          </Button>
          </>

            }
        </div>
      </div>
    </div>
  );
}

export default Profile;

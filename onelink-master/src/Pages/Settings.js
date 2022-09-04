import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import React, { useState } from "react";
import Profile from "./Profile";
import Links from "./Links";
import "./styles.css";

function Settings() {
  const [nav, setNav] = useState(0);
  const cs = (x) => {
    if (nav === x) return "purple";
    else return "gray";
  };
  return (
    <div className="setm">
      <div className="setdash">
          <div className="setlogo">
              one<span>Link</span>
          </div>
        <Button
          colorScheme={cs(0)}
          onClick={() => setNav(0)}
        >
          Links
        </Button>
        <Button
          colorScheme={cs(1)}
          onClick={() => setNav(1)}
        >
          Profile
        </Button>
        <Avatar className="setav" size="lg"/>
        <Button>
            Sign Out
        </Button>
      </div>
      <div className="setc">
          {
              nav===1? <Profile/> : <Links/>
          }
      </div>
    </div>
  );
}

export default Settings;

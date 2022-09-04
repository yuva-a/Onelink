import { Avatar } from '@chakra-ui/avatar'
import { Button } from '@chakra-ui/button'
import React from 'react'
import Link from '../Components/Link'

const copy = (x)=>{

}

function Links() {
    return (
        <div style={{width:"100%"}}>
            <div className="lnk">
                <Button><a href="" target="_blank">Your Page</a></Button>
                <Button>Add a Link</Button>
                <Link></Link>
            </div>
        </div>
    )
}

export default Links

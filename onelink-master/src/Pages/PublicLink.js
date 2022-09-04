import { Avatar,Button} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


// const ffav = (url)=>{
//     axios
//     .get(`https://cors-anywhere.herokuapp.com/https://favicons.githubusercontent.com/${url}`)
//     .then( res => {
//         const a= res.data.icons[0].src;
//         console.log(a);
//         return a;
//     })
// }


// console.log(ffav("github.com"));

function PublicLink() {

    const {id} = useParams();

    const [links,setLinks] = useState([{
         fav : "https://favicons.githubusercontent.com/www.github.com",
        link : "github.com",
        name : "Github hdmadbjbdmw"
    },{ fav : "https://favicons.githubusercontent.com/www.github.com",
        link : "github.com",
        name : "Github"
    },{ fav : "https://favicons.githubusercontent.com/www.github.com",
        link : "github.com",
        name : "Github"
    }])

    // useEffect(
    //     links.map((s,i)=>{
    //         const ab = ffav(s.link);
    //         setLinks((a)=>{ 
    //             a[i].fav =ab;
    //              return a
    //     })
    //     })
    // ,[])

    return (
        <div className="pbm">   
              <Avatar size="2xl"/>

              <div className="pbname"> Lorem, ipsum.</div>
              <div className="pbbio">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iste eum rerum sequi commodi quod? Iste, placeat. Dolores, cum nobis fuga, nesciunt, id totam nostrum qui eius beatae libero voluptas!</p>
              </div>

            <div className="pblnk">
            {
                links.map( links =>(<div className="pnlnki">
                  <span><img src={links.fav} alt="favicon" /></span>
                  <a href={links.link} target="_blank">{links.name}</a>
              </div>))
            }
            </div>

            <div className="pblogo">
                one<span>Link</span>
            </div>
        </div>
    )
}

export default PublicLink

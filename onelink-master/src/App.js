import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Home from './Pages/Home'
import PublicLink from './Pages/PublicLink'
import Signin from './Pages/Signin'
import Register from './Pages/Register'
import Settings from './Pages/Settings'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
    return (
        <ChakraProvider>
       <Router>
           <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/settings' component={Settings}/>
            <Route exact path='/login' component={Signin}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/:id' component={PublicLink}/>
           </Switch>
       </Router>
       </ChakraProvider>
    )
}

export default App

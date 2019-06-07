import React, {Component} from 'react'
import Carousel from './Carousel/Carousel'
import Tabs from './Tabs/Tabs'

class App extends Component {
  render(){
    return (
      <div className='app'>

        <Carousel />
        <Tabs />
        
      </div>
    )
  }
}

export default App;

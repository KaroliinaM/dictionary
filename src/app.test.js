import React from 'react'
import {shallow} from 'enzyme'
import Testi from './components/testi'
import App2 from './app2'
import axios from 'axios'


describe.only('<App />', ()=> {
  it('renders content', () => {

    const application=shallow(<App2 />)

    console.log(application.debug())
  })
})

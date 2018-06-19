import React from 'react'
import {shallow} from 'enzyme'
import Testi from './components/testi'
import App from './app'
import axios from 'axios'

jest.mock('axios')

describe.only('<App />', ()=> {
  it('renders content', () => {
    const sana={id:1, finnish:'sana', english: 'word'}
    const application=shallow(<App />)
    console.log(application.debug())
  })
})

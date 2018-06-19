import React from 'react'
import {shallow} from 'enzyme'
import Testi from './components/testi'
import App2 from './app2'
jest.mock('axios')
import axios from 'axios'



describe.only('<App />', ()=> {
  const flushPromises = () => new Promise(resolve => setImmediate(resolve));
  it('renders content', async () => {


    const application=shallow(<App2 />)
    await flushPromises();
    application.update();

    console.log(application.debug())
  })
})

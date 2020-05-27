import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted
       style={{
        background: '#4B79A1',  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #283E51, #4B79A1)', /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #283E51, #4B79A1)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        
       }}
      >
        <Menu inverted secondary>
          <Menu.Item style={{fontSize:'20px', fontFamily:'sans-serif'}}>
            Corona Tracker
          </Menu.Item>

          <Menu.Item
           position="right"
           name='home'
           active={activeItem === 'home'}
           onClick={this.handleItemClick}
          >
            <Link to='/'>Home</Link>
          </Menu.Item>

          <Menu.Item
           name='about'
           active={activeItem === 'about'}
           onClick={this.handleItemClick}
          >
            <Link to='/about'>About Us</Link>
          </Menu.Item>
        </Menu>
      </Segment>
    )
  }
}

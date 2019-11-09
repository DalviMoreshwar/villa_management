import React, { Component } from 'react';
import { Input, Menu, Container } from 'semantic-ui-react'

class TopHeader extends Component {
  render() {
    return (
      <div>
        <Menu pointing inverted>
          <Container>
            <Menu.Item
              name='villa'
              style={{fontWeight: 'bold', textDecoration: 'italic'}}
            />
            <Menu.Item
              name='messages'
              active={this.activeItem === 'messages'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='friends'
              active={this.activeItem === 'friends'}
              onClick={this.handleItemClick}
            />
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    )
  }
}

export default TopHeader;
import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

class TopHeader extends Component {
  render() {
    return (
      <div>
        <Menu pointing className="topbar">
          <Container>
            <Link to="/">
              <Menu.Item
                name="Villa"
                style={{
                  color: "#f9f9f9",
                  fontWeight: "bold",
                  textDecoration: "italic"
                }}
              />
            </Link>
            {/* <Menu.Item
              name="messages"
              active={this.activeItem === "messages"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="friends"
              active={this.activeItem === "friends"}
              onClick={this.handleItemClick}
            /> */}
            {/* <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
            </Menu.Menu> */}
          </Container>
        </Menu>
      </div>
    );
  }
}

export default TopHeader;

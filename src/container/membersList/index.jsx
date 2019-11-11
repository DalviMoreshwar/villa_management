import React, { Component } from "react";
import { Container, Header, Button, Icon, Table } from "semantic-ui-react";
import TopHeader from "../../components/TopHeader";
import "./style.css";
import membersData from "./../../components/data/data";

class MemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "home"
    };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };
  render() {
    console.log(membersData.membersData);

    const memberList = membersData.membersData.map((item, index) => {
      return (
        <Table.Row>
          <Table.Cell>{item.name}</Table.Cell>
          <Table.Cell textAlign="center">
            {item.membership_status && (
              <Icon color="green" name="checkmark" size="mediam" />
            )}
          </Table.Cell>
          <Table.Cell textAlign="center">
            {item.meal_allotment.map(a => {
              return (
                a.morning && (
                  <Icon color="green" name="checkmark" size="mediam" />
                )
              );
            })}
          </Table.Cell>
          <Table.Cell textAlign="center">
            {item.meal_allotment.map(a => {
              return (
                a.evening && (
                  <Icon color="green" name="checkmark" size="mediam" />
                )
              );
            })}
          </Table.Cell>
          <Table.Cell textAlign="center">
            {item.internet_access && (
              <Icon color="green" name="checkmark" size="mediam" />
            )}
          </Table.Cell>
        </Table.Row>
      );
    });

    return (
      <div>
        <TopHeader />
        <Container>
          <Header className="mt-4" as="h3" dividing>
            Site
            <Button
              color="black"
              size="tiny"
              floated="right"
              animated
              style={{ width: "100px", marginTop: "-5px" }}
            >
              <Button.Content visible>
                <Icon name="plus squar" />
              </Button.Content>
              <Button.Content hidden>Add Member</Button.Content>
            </Button>
          </Header>
          {/* <ReactTable
            data={data}
            columns={columns}
            showPagination={false}
            minRows={7}
          /> */}

          <Table celled structured striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell rowSpan="2">Member Name</Table.HeaderCell>
                <Table.HeaderCell rowSpan="2">
                  Membership Status
                </Table.HeaderCell>
                <Table.HeaderCell colSpan="2">Meal Allotment</Table.HeaderCell>
                <Table.HeaderCell rowSpan="2">Intent Access</Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>Morning</Table.HeaderCell>
                <Table.HeaderCell>Evening</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>{memberList}</Table.Body>
          </Table>
        </Container>
      </div>
    );
  }
}

export default MemberList;

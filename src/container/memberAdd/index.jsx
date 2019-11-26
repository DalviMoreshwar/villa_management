import React, { Component } from "react";
import TopHeader from "../../components/TopHeader";
import {
  Button,
  Checkbox,
  Form,
  Container,
  Header,
  Icon,
  Grid
} from "semantic-ui-react";
import "./style.css";

class MemberAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      membership_status: true,
      meal_allotment: [{ morning: false, evening: false }],
      internet_access: false
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  isInternetAccess = () => {
    this.setState({ internet_access: !this.state.internet_access });
  };

  navigateToMembersList = () => {
    this.props.history.push("/");
  };
  render() {
    const { membership_status } = this.state;
    return (
      <div>
        <TopHeader />
        <Container>
          <Header className="mt-5" as="h3">
            Members
            <Button
              color="black"
              size="tiny"
              floated="right"
              animated
              style={{ width: "100px", marginTop: "-5px" }}
              onClick={this.navigateToMembersList}
            >
              <Button.Content visible>
                <Icon name="unordered list" />
              </Button.Content>
              <Button.Content hidden>Members List</Button.Content>
            </Button>
          </Header>

          <Grid columns="equal">
            <Grid.Row>
              <Grid.Column width={6}>
                <Form>
                  <Form.Field>
                    <label>Member Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={this.onChange.bind(this)}
                      placeholder="Member Name"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Internet Access</label>
                    <Checkbox
                      className="mt-2"
                      name="internet_access"
                      toggle
                      onChange={this.isInternetAccess}
                    />
                  </Form.Field>
                  <Button type="submit">Submit</Button>
                </Form>
              </Grid.Column>
              <Grid.Column width={6}>
                <Form>
                  <Form.Field>
                    <label>Membership Status</label>
                    <Checkbox
                      className="mt-2"
                      name="internet_access"
                      toggle
                      checked={membership_status ? true : false}
                    />
                  </Form.Field>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default MemberAdd;

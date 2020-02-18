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
      morning_meal: false,
      evening_meal: false,
      internet_access: false
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  isInternetAccess = () => {
    this.setState(prevState => {
      return { internet_access: !prevState.internet_access };
    });
  };

  isMorningMeal = () => {
    this.setState(prevStatus => {
      return { morning_meal: !prevStatus.morning_meal };
    });
  };

  isEveningMeal = () => {
    this.setState(prevStatus => {
      return { evening_meal: !prevStatus.evening_meal };
    });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  navigateToMembersList = () => {
    this.props.history.push("/");
  };
  render() {
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
              <Grid.Column>
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
                </Form>
              </Grid.Column>
              <Grid.Column>
                <Form>
                  <Form.Field>
                    <label>Internet Access</label>
                    <Checkbox
                      className="mt-2"
                      name="internet_access"
                      toggle
                      onChange={this.isInternetAccess}
                    />
                  </Form.Field>
                </Form>
              </Grid.Column>

              <Grid.Column>
                <Form>
                  <Form.Field>
                    <label>Morning Meal</label>
                    <Checkbox
                      className="mt-2"
                      name="morning_meal"
                      toggle
                      onChange={this.isMorningMeal}
                    />
                  </Form.Field>
                </Form>
              </Grid.Column>
              <Grid.Column>
                <Form>
                  <Form.Field>
                    <label>Evening Meal</label>
                    <Checkbox
                      className="mt-2"
                      name="evening_meal"
                      toggle
                      onChange={this.isEveningMeal}
                    />
                  </Form.Field>
                </Form>
              </Grid.Column>
            </Grid.Row>
            <Button type="submit" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default MemberAdd;

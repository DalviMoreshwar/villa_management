import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Container, Header } from 'semantic-ui-react';
import TopHeader from '../../components/TopHeader';

class MemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
    }
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  }
  render() {
    const data = [{
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    }]

    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      id: 'friendName', // Required because our accessor is not a string
      Header: 'Friend Name',
      accessor: d => d.friend.name // Custom value accessors!
    }, {
      Header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }];
    return (
      <div>
        <TopHeader />
        <Container>
          <Header className="mt-4" as='h3' dividing>
            Site
          </Header>
          <ReactTable
            data={data}
            columns={columns}
            showPagination={false}
            minRows={7}
          />
        </Container>
      </div>
    )
  }
}

export default MemberList;
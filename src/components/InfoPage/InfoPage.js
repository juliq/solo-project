import React from 'react';
import { Button } from 'react-bootstrap';
import Select from 'react-select';
import axios from 'axios';
import ReactTable from "react-table";
import 'react-table/react-table.css'


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'


class InfoPage extends React.Component {

  componentWillMount() {
    this.getMemberInfo();
  }

  state = {
    selectedGardenTeam: null,
    selectedCommittee: null,
    data: [],
    showTable: true,
  }

  gardenTeamOptions = [
    { value: '1', label: 'Boulder Garden' },
    { value: '2', label: 'Butterfly Garden' },
    { value: '3', label: 'Connie Getsch Garden' },
    { value: '4', label: 'Gazebo Garden' },
    { value: '5', label: 'Wheel Garden' }
  ];

  committeeOptions = [
    { value: '1', label: 'Executive' },
    { value: '2', label: 'Historian' },
    { value: '3', label: 'Hospitality' },
    { value: '4', label: 'Host' },
    { value: '5', label: 'Garden Design' },
    { value: '6', label: 'Garden Maintenance' },
    { value: '7', label: 'Outreach' },
    { value: '8', label: 'Programs' },
    { value: '9', label: 'Sunshine' },
  ];

  columns = [{
    Header: 'First Name',
    accessor: 'first_name' // String-based value accessors!
  }, {
    Header: 'Last Name',
    accessor: 'last_name',
  },
  {
    Header: 'Phone',
    accessor: 'mobile',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Address',
    accessor: 'address',
  },
  {
    Header: 'City',
    accessor: 'city',
  },
  {
    Header: 'Zipcode',
    accessor: 'zipcode',
  },
  {
    Header: 'Birthday',
    accessor: 'BD',
  },
  {
    Header: 'Garden Team',
    accessor: 'Garden_Name',
  },
  {
    Header: 'Committee',
    accessor: 'Committee_Name',
  },
  {
    Header: 'Membership Type',
    accessor: 'membership',
  },
  {
    Header: 'Year Joined',
    accessor: 'member_since',
  },
  ]

  handleChangeGardenTeam = (newSelectedOption) => {
    console.log('newSelectedOption', newSelectedOption);
    this.setState({ ... this.state, selectedGardenTeam: newSelectedOption });
  }

  handleChangeCommittee = (newSelectedOption) => {
    this.setState({ ... this.state, selectedCommittee: newSelectedOption });
  }

  // GET Request for responses from the database
  getMemberInfo = () => {
    axios.get('/api/member')
      .then((response) => {
        console.log('this is the response for the member info', response);
        this.setState({ ... this.state, data: response.data });
        console.log(this.state);
        // this.props.dispatch({
        //   type:'GET_MEMBERINFO',
        //   payload: response.data
        // })
      }).catch((error) => {
        console.log('error making get', error);
      });
  }


  toggleTable = () => {
    let newShowTable = !this.state.showTable
    this.setState({ showTable: newShowTable });
    console.log(this.state);
  }

  createMemberCards() {
    let children = [] // React requires a key prop for elements that are pushed into an array to identify them
    for (let i = 0; i < this.state.data.length-1; i++) {
      console.log('Image', this.state.data[i]);
      // let imgName = require("../../images/" + this.state.data[i].img_url)
      let imgName = require("../../images/" + this.state.data[i].img_url)
      children.push(<div className="Genres" key={i}> 
        <div className="card border=secondary mb-3">
          <div className="text-center">
          <img src={imgName} style={{width:"300px",height:"400px"}}></img>
            <h4 className="card-title">{this.state.data[i].first_name} , {this.state.data[i].last_name}</h4>
            <h6 className="card-text">Text goes here</h6>
          </div>
        </div>
      </div>)
    }
    return children;
  }



  render() {

    return (
      <div style={{ margin: "30px" }}>

        <Button onClick={this.toggleTable}>{this.state.showTable ? "Member Photos" : "Member List"}</Button>
        <div style={{ width: '200px', height: '50px' }}>
          <Select
            value={this.state.selectedGardenTeam}
            onChange={this.handleChangeGardenTeam}
            options={this.gardenTeamOptions}
          />
        </div>
        <div style={{ width: '200px', height: '50px' }}>
          <Select
            value={this.state.selectedCommittee}
            onChange={this.handleChangeCommittee}
            options={this.committeeOptions}
          />
        </div>
        {/* react table */}

        {this.state.showTable ?
          <div>
            <ReactTable
              data={this.state.data}
              columns={this.columns}
            />
          </div>
          :                               // ternary operator
          <div>
            <div className="card-deck">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4" style={{width: "18rem"}}>
                    {this.createMemberCards()}

                  </div>
                </div>
              </div>
    </div>
          </div>
        }

        {/* react grid */}

      </div>
    );
  }


}
export default InfoPage;

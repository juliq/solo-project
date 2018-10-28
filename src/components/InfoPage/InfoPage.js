import React from 'react';
import { Button } from 'react-bootstrap';
import Select from 'react-select';
import axios from 'axios';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import './InfoPage.css';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'


class InfoPage extends React.Component {

  componentWillMount() {
    this.getMemberInfo(); // calls the getMemberInfo function just before page load to display the table of members
  }

  state = {
    selectedGardenTeam: null,
    selectedCommittee: null,
    data: [],
    showTable: true,
    showData: [],
  }

  gardenTeamOptions = [
    { value: '1', label: 'Boulder' },
    { value: '2', label: 'Butterfly' },
    { value: '3', label: 'Connie Getsch' },
    { value: '4', label: 'Gazebo' },
    { value: '5', label: 'Wheel' },
    { value: '6', label: 'Affiliate' }
  ];

  committeeOptions = [
    { value: '1', label: 'President' },
    { value: '2', label: 'Vice President' },
    { value: '3', label: 'Secretary' },
    { value: '4', label: 'Treasurer' },
    { value: '5', label: 'Web Manager' },
    { value: '6', label: 'Growth Spurts' },
    { value: '7', label: 'Historian' },
    { value: '8', label: 'Hospitality' },
    { value: '9', label: 'Host' },
    { value: '10', label: 'Garden Design' },
    { value: '11', label: 'Garden Maintenance' },
    { value: '12', label: 'Outreach' },
    { value: '13', label: 'Programs' },
    { value: '14', label: 'Sunshine' },
    { value: '15', label: 'Affiliate' }
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

  handleChangeGardenTeam = (newSelectedOption) => {  // declares the function for when someone chooses a garden team
    console.log('newSelectedOption', newSelectedOption);
    console.log(this.state.data); // the filter is called on the array this.state.data
    let result = this.state.data.filter(member => member.Garden_Name == newSelectedOption.label);// only return this member if the garden name == the label of what was selected in the dropdown
    console.log(result);
    this.setState({ ... this.state, selectedGardenTeam: newSelectedOption, selectedCommittee: null, showData: result });
  }     // only showData will be updated

  handleChangeCommittee = (newSelectedOption) => {
    let result = this.state.data.filter(member => member.Committee_Name == newSelectedOption.label);
    this.setState({ ... this.state, selectedCommittee: newSelectedOption, selectedGardenTeam: null, showData: result });
    
  }

  // GET Request for responses from the database
  getMemberInfo = () => {
    axios.get('/api/member')
      .then((response) => {
        console.log('this is the response for the member info', response);
        this.setState({ ... this.state, data: response.data, showData: response.data });// data is a master list of all members so it will never change
        console.log(this.state);                  // showData is the data to be shown in the table and photo views. It will change based on the filters
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
    let cards = [] // React requires a key prop for elements that are pushed into an array to identify them
    
    for (let i = 0; i < this.state.showData.length; i++) {
      console.log('Image', this.state.showData[i]);
      // let imgName = require("../../images/" + this.state.data[i].img_url)
      let imgName = require("../../images/" + this.state.showData[i].img_url)
      cards.push(   //this creates the html for the card for each member of showData
        <div className="card mb-3 col-lg-4 col-md-4 col-sm-4" key={i}>
          <div className="text-center card-body">
            <img src={imgName} style={{ width: "60%" }} className="card-img-top"></img>
            <h5 className="card-title">{this.state.showData[i].first_name} {this.state.showData[i].last_name}</h5>
            {/* <h5 className="card-title"></h5> */}
            <h6 className="card-text">{this.state.showData[i].mobile}</h6>
            <p className="card-text">Garden Team: {this.state.showData[i].Garden_Name}</p>
            <p className="card-text">Committee: {this.state.showData[i].Committee_Name}</p>
          </div>
        
      </div>)
    }
    return cards;
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
            placeholder='Select a Garden'
          />
        </div>
        <div style={{ width: '200px', height: '50px' }}>
          <Select
            value={this.state.selectedCommittee}
            onChange={this.handleChangeCommittee}
            options={this.committeeOptions}
            placeholder='Select a Committee'
          />
        </div>
        {/* react table */}

        {this.state.showTable ?
          <div>
            <ReactTable
              data={this.state.showData} // data is a prop belonging to react table. It stays constant. showData is the members I want to show
              columns={this.columns}
            />
          </div>
          :                               // ternary operator


          <div className="row">
            
              {this.createMemberCards()}

            </div>

        }

        {/* react grid */}

      </div>
    );
  }


}
export default InfoPage;

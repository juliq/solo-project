import React from 'react';
import { Button } from 'react-bootstrap';
import Select from 'react-select';
import axios from 'axios';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import './InfoPage.css';
import { connect } from 'react-redux';
import { MEMBER_ACTIONS } from '../../redux/actions/memberActions';
import memberSaga from '../../redux/sagas/memberSaga';
const mapStateToProps = ({members}) => ({members})



// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'


class InfoPage extends React.Component {

  componentWillMount() {
    // memberSaga.getMembers()
    // this.props.dispatch({ type: MEMBER_ACTIONS.GET_MEMBERS });
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
    let result = this.state.data.filter(member => member.Garden_Name === newSelectedOption.label);// only return this member if the garden name == the label of what was selected in the dropdown
    console.log(result);
    this.setState({ ...this.state, selectedGardenTeam: newSelectedOption, selectedCommittee: null, showData: result });
  }     // only showData will be updated

  handleChangeCommittee = (newSelectedOption) => {
    let result = this.state.data.filter(member => member.Committee_Name === newSelectedOption.label);
    this.setState({ ...this.state, selectedCommittee: newSelectedOption, selectedGardenTeam: null, showData: result });

  }

  // GET Request for responses from the database
  getMemberInfo = () => {
    axios.get('/api/member')
      .then((response) => {
        console.log('this is the response for the member info', response);
        this.setState({ ...this.state, data: response.data, showData: response.data });// data is a master list of all members so it will never change
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
        // <div class="w-25 p-3" style="background-color: #eee;">
        <div className="card p-3 mb-5 w-25 p-3" key={i}>
          {/* ^ mb-3 col-lg-4 col-md-4 col-sm-4   */}
          <div className="shadow p-3 mb-5 bg-white rounded" >
            <div className="card-header text-center"><h5>{this.state.showData[i].first_name} {this.state.showData[i].last_name}</h5></div>
            <div className="card-body text-center">
              <img className="card-img-top" alt="member images" src={imgName} style={{ width: "60%" }} ></img>
              {/* <h5 className="card-title">{this.state.showData[i].first_name} {this.state.showData[i].last_name}</h5> */}
              {/* <h5 className="card-title"></h5> */}
              <h6 className="card-subtitle" style={{ padding: "10px" }}>{this.state.showData[i].mobile}</h6>
              <p className="card-subtitle mb-2 text-muted">Garden Team: {this.state.showData[i].Garden_Name}</p>
              <p className="card-subtitle mb-2 text-muted">Committee: {this.state.showData[i].Committee_Name}</p>
            </div>
          </div>
          {/* </div>  */}
        </div>)
    }
    return cards;
  }

  resetForm = () => {
    // what goes here?
  }


  render() {

    return (
      <div style={{ margin: "30px" }}>
        <div className="row" style={{ padding: "20px" }}>
          {/* // ^ lines the three buttons up in one row */}
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

          <div style={{padding: "10px"}}>
            {/* // reset button below */}
            <button
              onClick={this.resetForm}
              type="button">Reset</button>
          </div>

          {/* react table */}
          {this.state.showTable ?
            <div>
              <ReactTable
                data={this.state.showData} // data is a prop belonging to react table. It stays constant. showData has the members I want to show
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
      </div>
    );
  }


}
export default connect(mapStateToProps)(InfoPage);

import React from 'react';
import { Button } from 'react-bootstrap';
import Select from 'react-select';
import axios from 'axios';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import './MemberPage.css';
import { connect } from 'react-redux';
const mapStateToProps = ({ members }) => ({ members })



// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'


class MemberPage extends React.Component {

  componentDidMount() {
    // memberSaga.getMembers()
    this.props.dispatch({ type: 'GET_MEMBERS' });
    this.resetForm();
    // this.getMemberInfo(); // calls the getMemberInfo function just before page load to display the table of members
  }

  state = {
    selectedGardenTeam: null,
    selectedCommittee: null,
    showTable: true,
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
    this.setState({ ...this.state, selectedGardenTeam: newSelectedOption, selectedCommittee: null });
  }

  handleChangeCommittee = (newSelectedOption) => {
    this.setState({ ...this.state, selectedCommittee: newSelectedOption, selectedGardenTeam: null });
  }

  resetForm = () => {
    this.setState({ ...this.state, selectedCommittee: null, selectedGardenTeam: null });
  }


  toggleTable = () => {
    let newShowTable = !this.state.showTable
    this.setState({ showTable: newShowTable });
    console.log(this.state);
  }

  // --------------------
  // numberArray = [ 1, 3, 5 ];
  // squareNumberArray = numberArray.map(number => number * number)

  // ---------------------

  // const memberCardsArray = [];

  // const newMemberCardsArray = [];

  //   for (let i = 0; i < memberCards.length; i++) {
  //     const newMemberCards = memberCardsToNewMemberCards(memberCards[i]);
  //     newMemberCards.push(memberCards)
  // }

  //   memberCardsArray.forEach(function(memberCards) {
  //     const newMemberCards = memberCardsToNewMemberCards(memberCards[i]);
  //     newMemberCardsArray.push(newMemberCards)
  //   }
  // );

  // const newMemberCards = showData.map(function(memberCards) {
  //       const newMemberCards = memberCardsToNewMemberCards(memberCards[i]);
  //       return createMemberCards;
  //     }
  //   );

  // const newMemberCards = memberCardsArray.map(memberCards => newMemberCardsArray(memberCards));
  // console.log(newMemberCards);

  // const memberCard = this.state.showData.map(memberData => this.createMemberCard(memberData));



  createHtmlForCard(member) {
    let imgName = require("../../images/" + member.img_url)
    return (<div className="card p-3 mb-5 w-25 p-3">
      <div className="card-header text-center"><h5>{member.first_name} {member.last_name}</h5></div>
      <div className="card-body text-center">
        <img className="card-img-top" alt="member images" src={imgName} style={{ width: "60%" }} ></img>
        {/* <h5 className="card-title"></h5> */}
        <h6 className="card-subtitle" style={{ padding: "10px" }}>{member.mobile}</h6>
        <p className="card-subtitle mb-2 text-muted">Garden Team: {member.Garden_Name}</p>
        <p className="card-subtitle mb-2 text-muted">Committee: {member.Committee_Name}</p>
      </div>
      {/* </div> */}
    </div>)
  }



  render() {

    let showData = this.props.members
      .filter(member => !this.state.selectedGardenTeam || member.Garden_Name === this.state.selectedGardenTeam.label)
      .filter(member => !this.state.selectedCommittee || member.Committee_Name === this.state.selectedCommittee.label);

    let memberCards = showData.map(member => this.createHtmlForCard(member)) // card created outside of the render

    return (
        <div style={{ margin: "30px" }}>
        <h2>Select a view:</h2>
          {/* <pre>
            {JSON.stringify(this.props.members[16] && this.props.members[16].Committee_Name, null, 2)}
          </pre>
          <pre>
            {JSON.stringify(this.state.selectedCommittee && this.state.selectedCommittee.label, null, 2)}
          </pre> */}
          <div className="buttonRow" >
            {/* // ^ lines the three buttons up in one row */}
            <Button onClick={this.toggleTable} style={{ border: '1px solid lightgray',  height: '38px', color: 'gray' }}className='memberPhotosButton'> {this.state.showTable ? "Member Photos" : "Member List"}</Button>
            <div style={{ width: '200px' }}>
              <Select
                value={this.state.selectedGardenTeam}
                onChange={this.handleChangeGardenTeam}
                options={this.gardenTeamOptions}
                placeholder='Select a Garden'
              />
            </div>
            <div style={{ width: '250px' }}>
              <Select
                value={this.state.selectedCommittee}
                onChange={this.handleChangeCommittee}
                options={this.committeeOptions}
                placeholder='Select a Committee'
              />
            </div>

            <div>
              {/* // reset button below */}
              <button
                onClick={this.resetForm}
                type="button"
                className='resetButton'>Reset
              </button>
            </div>
            </div>
            <div>
            {/* react table */}

            {this.state.showTable ?
              <div className="table">
                <ReactTable
                  data={showData} // data is a prop belonging to react table. It stays constant. showData has the members I want to show
                  columns={this.columns}
                />
              </div>
              :                               // ternary operator


              <div className="row">

                {memberCards}

              </div>
            }

            {/* react grid */}
          </div>
        </div>

    );
  }


}
export default connect(mapStateToProps)(MemberPage);

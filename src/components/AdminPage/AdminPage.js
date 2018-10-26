// import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
// import Select from 'react-select';
// import FormContainer from './containers/FormContainer';  // not sure what these paths should be
// import CheckBox from '../components/CheckBox';
// import Input from '../components/Input';
// import TextArea from '../components/TextArea';
// import Select from '../components/Select';
// import Button from '../components/Button'



// // This is one of our simplest components
// // It doesn't have local state, so it can be a function component.
// // It doesn't dispatch any redux actions or display any part of redux state
// // or even care what the redux state is, so it doesn't need 'connect()'


// class AdminPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       newMember: {
//         first_name: '',
//         last_name: '',
//         mobile: '',
//         email: '',
//         address: '',
//         city: '',
//         zipcode: '',
//         BD: '',
//         img_url: '',
//         garden_team_id: '',
//         captain: '',
//         committee_id: '',
//         chair: '',
//         membership: '',
//         member_since: '',
//         year_left: '',
//         dues_paid: ''
//       },

//       garden_team_idOptions: ['1', '2', '3', '4', '5', '6'],
//       captainOptions: ['true', 'false'],
//       committee_idOptions: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
//       chairOptions: ['true', 'false'],
//       membershipOptions: ['Active', 'Affiliate', 'Former'],
//       dues_paidOptions: ['true', 'false']
//     }
//     this.handleFormSubmit = this.handleFormSubmit.bind(this);
//     this.handleClearForm = this.handleClearForm.bind(this);
//   }

//   // handleChangeInput(event) {
//   //   this.setState({ value: event.target.name })
//   // }

//   handleFormSubmit(event) {
//     // Form submission logic

//   }

//   handleClearForm(e) {
//     // Logic for resetting the form
//     e.preventDefault();
//     this.setState({
//       newMember: {
//         first_name: '',
//         last_name: '',
//         mobile: '',
//         email: '',
//         address: '',
//         city: '',
//         zipcode: '',
//         BD: '',
//         img_url: '',
//         garden_team_id: '',
//         captain: '',
//         committee_id: '',
//         chair: '',
//         membership: '',
//         member_since: '',
//         year_left: '',
//         dues_paid: ''
//       }
//     })
//   }

//   render() {

//     return (

//       <h3>React Form</h3>
//       <div className="container" onSubmit={this.handleFormSubmit}>
//         <input />

      

// <Button />
//       </div >
//     );
//   }


// }
// export default AdminPage;

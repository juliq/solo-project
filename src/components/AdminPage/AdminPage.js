import React, { Component } from "react";

/* Import Components */

import Input from "./Input";
import Select from "./Select";
import Button from "./Button";

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newMember: {
        first_name: "",
        last_name: "",
        mobile: "",
        email: "",
        address: "",
        membership: ""
      },

      membership: ["Active", "Affiliate", "Former"]
    };
    // this.handleFirstName = this.handleFirstName.bind(this);
    // this.handleLastName = this.handleLastName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newMember: {
          ...prevState.newMember,
          [name]: value
        }
      }),
      () => console.log(this.state.newMember)
    );
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newMember: {
          ...prevState.newMember,
          about: value
        }
      }),
      () => console.log(this.state.newMember)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.newMember);
    // let userData = this.state.newMember;

    // fetch("http://example.com", {
    //   method: "POST",
    //   body: JSON.stringify(userData),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   }
    // }).then(response => {
    //   response.json().then(data => {
    //     console.log("Successful" + data);
    //   });
    // });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newMember: {
        first_name: "",
        last_name: "",
        mobile: "",
        email: "",
        address: "",
        city: "",
        zipcode: "",
        membership: ""
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <div className="row">
          <div className="col-sm-3">
            <Input
              inputType={"text"}
              title={"First Name"}
              name={"first_name"}
              value={this.state.newMember.first_name}
              placeholder={"Enter your first name"}
              handleChange={this.handleInput}
            />{" "}
          </div>
          {/* Name of the user */}
          <div className="col-sm-3">
            <Input
              inputType={"text"}
              name={"last_name"}
              title={"Last Name"}
              value={this.state.newMember.last_name}
              placeholder={"Enter your last name"}
              handleChange={this.handleInput}
            />{" "}
          </div>
        </div>
        <Input
          inputType={"number"}
          name={"mobile"}
          title={"Mobile"}
          value={this.state.newMember.mobile}
          placeholder={"Mobile Number"}
          handleChange={this.handleInput}
        />
        <Input
          inputType={"text"}
          name={"address"}
          title={"Address"}
          value={this.state.newMember.address}
          placeholder={"Address"}
          handleChange={this.handleInput}
        />
        <Input
          inputType={"text"}
          name={"city"}
          title={"City"}
          value={this.state.newMember.city}
          placeholder={"City"}
          handleChange={this.handleInput}
        />
        <Input
          inputType={"number"}
          name={"zipcode"}
          title={"Zipcode"}
          value={this.state.newMember.zipcode}
          placeholder={"Zipcode"}
          handleChange={this.handleInput}
        />
        <Select
          title={"Membership"}
          name={"membership"}
          options={this.state.membership}
          value={this.state.newMember.membership}
          placeholder={"Select Membership"}
          handleChange={this.handleInput}
        />{" "}
        {/* Age Selection */}
        {/* Skill */}
        {/* About you */}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default AdminPage;

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
                city: "",
                zipcode: "",
                BD: "",
                img_url: "",
                garden_team_id: "",
                captain: "",
                committee_id: "",
                chair: "",
                membership: "",
                member_since: "",
                year_left: "",
                dues_paid: ""
            },

            // BD: (["January","February","March","April","May","June","July","August","September","October","November","December"],
            // ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]),
            garden_team_id: ["1 (Boulder)", "2 (Butterfly)", "3 (Connie Getsch", "4 (Gazebo)", "5 (Wheel)", "6 (Affiliate)"],
            captain: ["True", "False"],
            committee_id: ["1 (President/Co-President)", "2 (Vice President/Co-Vice President)", "3 (Secretary)", "4 (Treasurer)", "5 (Web Manager)", "6 (Growth Spurts)", "7 (Historian)", "8 (Hospitality)", "9 (Host)", "10 (Garden Design)", "11 (Garden Maintenance)", "12 (Outreach)", "13 (Programs)", "14 (Sunshine)", "15 (Affiliate)"],
            chair: ["True", "False"],
            membership: ["Active", "Affiliate", "Former"],
            dues_paid: ["True", "False"]

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
                BD: "",
                img_url: "",
                garden_team_id: "",
                captain: "",
                committee_id: "",
                chair: "",
                membership: "",
                member_since: "",
                year_left: "",
                dues_paid: "",

            }
        });
    }

    render() {
        return (
            <form className="container-fluid" onSubmit={this.handleFormSubmit}>
                {/* Row 1 */}
                <div className="row">
                    <div className="col-sm-3">
                        <Input
                            inputType={"text"}
                            title={"First Name"}
                            name={"first_name"}
                            value={this.state.newMember.first_name}
                            placeholder={"First name"}
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
                            placeholder={"Last name"}
                            handleChange={this.handleInput}
                        />{" "}
                    </div>
                    <div className="col-sm-2">
                        <Input
                            inputType={"number"}
                            name={"mobile"}
                            title={"Mobile"}
                            value={this.state.newMember.mobile}
                            placeholder={"(no dashes)"}
                            handleChange={this.handleInput}
                        />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="row">
                    <div className="col-sm-3">
                        <Input
                            inputType={"text"}
                            name={"address"}
                            title={"Address"}
                            value={this.state.newMember.address}
                            placeholder={"Address"}
                            handleChange={this.handleInput}
                        />
                    </div>
                    <div className="col-sm-3">
                        <Input
                            inputType={"text"}
                            name={"city"}
                            title={"City"}
                            value={this.state.newMember.city}
                            placeholder={"City"}
                            handleChange={this.handleInput}
                        />
                    </div>
                    <div className="col-sm-2">
                        <Input
                            inputType={"number"}
                            name={"zipcode"}
                            title={"Zipcode"}
                            value={this.state.newMember.zipcode}
                            placeholder={"Zipcode"}
                            handleChange={this.handleInput}
                        />
                    </div>
                </div>

                {/* Row 3 */}
                <div className="row">
                    <div className="col-sm-2">
                        <Input
                            inputType={"text"}
                            name={"BD"}
                            title={"Birthday"}
                            // options={this.state.BD}
                            value={this.state.newMember.BD}
                            placeholder={"Month Day"}
                            handleChange={this.handleInput}
                        />
                    </div>

                    <div className="col-sm-3">
                        <Input
                            inputType={"text"}
                            name={"img_url"}
                            title={"Image url"}
                            value={this.state.newMember.img_url}
                            placeholder={"firstname-lastname.jpg"}
                            handleChange={this.handleInput}
                        />
                    </div>
                </div>

                {/* Row 4 */}
                <div className="row">
                    <div className="col-sm-2">
                        <Select
                            title={"Garden Team ID"}
                            name={"garden_team_id"}
                            options={this.state.garden_team_id}
                            value={this.state.newMember.garden_team_id}
                            placeholder={"Garden Team ID"}
                            handleChange={this.handleInput}
                        />
                    </div>

                    <div className="col-sm-2">
                        <Select
                            title={"Captain"}
                            name={"captain"}
                            options={this.state.captain}
                            value={this.state.newMember.captain}
                            placeholder={"Captain Option"}
                            handleChange={this.handleInput}
                        />
                    </div>

                    <div className="col-sm-2">
                        <Select
                            title={"Committee ID"}
                            name={"committee_id"}
                            options={this.state.committee_id}
                            value={this.state.newMember.committee_id}
                            placeholder={"Committee ID"}
                            handleChange={this.handleInput}
                        />
                    </div>

                    <div className="col-sm-2">
                        <Select
                            title={"Chair"}
                            name={"chair"}
                            options={this.state.chair}
                            value={this.state.newMember.chair}
                            placeholder={"Cmte Chair Option"}
                            handleChange={this.handleInput}
                        />
                    </div>
                </div>

                {/* Row 5 */}
                <div className="row">
                    <div className="col-sm-2">
                        <Select
                            title={"Membership"}
                            name={"membership"}
                            options={this.state.membership}
                            value={this.state.newMember.membership}
                            placeholder={"Select Membership Type"}
                            handleChange={this.handleInput}
                        />
                    </div>

                    <div className="col-sm-2">
                        <Input
                            inputType={"number"}
                            name={"year_left"}
                            title={"Year Left Club"}
                            value={this.state.newMember.year_left}
                            placeholder={"Year Left Club"}
                            handleChange={this.handleInput}
                        />
                    </div>

                    <div className="col-sm-2">
                        <Select
                            title={"Dues Paid"}
                            name={"dues_paid"}
                            options={this.state.dues_paid}
                            value={this.state.newMember.dues_paid}
                            placeholder={"Select: Dues Paid by 9/30"}
                            handleChange={this.handleInput}
                        />
                    </div>
                </div>


                {" "}
                {/* Age Selection */}
                {/* Skill */}
                {/* About you */}

                ›
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



            //---------------------------------------

// import React, {Component} from "react";

                /* Import Components */

                // import Input from "./Input";
                // import Select from "./Select";
                // import Button from "./Button";

//   handleFormSubmit(e) {
//     e.preventDefault();
//     console.log(this.state.newMember);
//     let userData = this.state.newMember;

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
//   }
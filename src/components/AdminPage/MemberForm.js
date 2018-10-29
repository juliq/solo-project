import React, { Component } from "react";
import axios from "axios";

/* Import Components */

import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import swal from 'sweetalert';


class MemberForm extends Component {
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
                year_resigned: null,
                dues_paid: ""
            },

            garden_team_id: ["1 (Boulder)", "2 (Butterfly)", "3 (Connie Getsch", "4 (Gazebo)", "5 (Wheel)", "6 (Affiliate)"],
            gardenTeamOptions: [
                { value: 1, label: 'Boulder' },
                { value: 2, label: 'Butterfly' },
                { value: 3, label: 'Connie Getsch' },
                { value: 4, label: 'Gazebo' },
                { value: 5, label: 'Wheel' },
                { value: 6, label: 'Affiliate' }
            ],
            captain: [
                { value: true, label: 'True' },
                { value: false, label: 'False' }
            ],
            committee_id: [
                { value: 1, label: 'President' },
                { value: 2, label: 'Vice President' },
                { value: 3, label: 'Secretary' },
                { value: 4, label: 'Treasurer' },
                { value: 5, label: 'Web Manager' },
                { value: 6, label: 'Growth Spurts' },
                { value: 7, label: 'Historian' },
                { value: 8, label: 'Hospitality' },
                { value: 9, label: 'Host' },
                { value: 10, label: 'Garden Design' },
                { value: 11, label: 'Garden Maintenance' },
                { value: 12, label: 'Outreach' },
                { value: 13, label: 'Programs' },
                { value: 14, label: 'Sunshine' },
                { value: 15, label: 'Affiliate' }
            ],
            chair: [
                { value: true, label: 'True' },
                { value: false, label: 'False' }
            ],
            membership: [
                { value: 'Active', label: 'Active' },
                { value: 'Affiliate', label: 'Affiliate' },
                { value: 'Former', label: 'Former' },
            ],
            dues_paid: [
                { value: true, label: 'True' },
                { value: false, label: 'False' }
            ]

        };

        if (props.action === 'edit') {
            this.state.newMember = props.member  // this will pre-populate the newMember in the state with the data that we pass in through the member prop
        }       // the member prop is on the AdminPage

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDeleteMember = this.handleDeleteMember.bind(this);
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
        axios.post('/api/member', { "members": this.state.newMember }) // newMember includes all the db fields
            .then((response) => {
                console.log('this is the response for add member', response.status);
                if (response.status === 200) {
                    this.handleClearForm(e)
                    swal("Good job!", "Your member was added to the database!", "success");
                }
            }).catch((error) => {
                console.log('error making get', error);
            });
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
                year_resigned: null,
                dues_paid: "",

            }
        });
    }

    handleDeleteMember(e) {
        let fName=this.state.newMember.first_name
        let lName=this.state.newMember.last_name
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete('/api/member', {data: {first_name: fName, last_name: lName}})//in axios delete, in order to send a body, need to include body as the value of the data key
                        .then((response) => {
                            if (response.status === 200) {
                                swal("Poof! Your file has been deleted!", {
                                    icon: "success",
                                });
                            }
                            console.log('this is the response for the member info', response);
                        }).catch((error) => {
                            console.log('error deleting member', error);
                        });

                } else {
                    swal("Your imaginary file is safe!");
                }
            });
        e.preventDefault();
    }

    handleUpdate(e) {
        e.preventDefault();
        console.log(this.state.newMember);
        axios.put('/api/member', this.state.newMember ) // newMember includes all the db fields
            .then((response) => {
                console.log('this is the response for update member', response.status);
                if (response.status === 200) {
                    swal("Good job!", "Your member was updated in the database!", "success");
                }
            }).catch((error) => {
                console.log('error making update', error);
            });
    }


    render() {
        return (
            <div>


                <form className="container-fluid" style={{ height: "100%" }} onSubmit={this.handleFormSubmit}>
                    {/* Row 1 */}
                    <div className="row">
                        <div className="col-sm-4">
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
                        <div className="col-sm-4">
                            <Input
                                inputType={"text"}
                                name={"last_name"}
                                title={"Last Name"}
                                value={this.state.newMember.last_name}
                                placeholder={"Last name"}
                                handleChange={this.handleInput}
                            />{" "}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <Input
                                inputType={"text"}
                                name={"mobile"}
                                title={"Mobile"}
                                value={this.state.newMember.mobile}
                                placeholder={"xxx-xxx-xxxx"}
                                handleChange={this.handleInput}
                            />
                        </div>
                        <div className="col-sm-3">
                            <Input
                                inputType={"text"}
                                name={"email"}
                                title={"Email"}
                                value={this.state.newMember.email}
                                placeholder={"Email"}
                                handleChange={this.handleInput}
                            />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="row">
                        <div className="col-sm-4">
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
                        <div className="col-sm-3">
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

                        <div className="col-sm-4">
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
                        <div className="col-sm-3">
                            <Select
                                title={"Garden Team ID"}
                                name={"garden_team_id"}
                                options={this.state.gardenTeamOptions}
                                value={this.state.newMember.garden_team_id}
                                placeholder={"Garden Team ID"}
                                handleChange={this.handleInput}
                            />
                        </div>

                        <div className="col-sm-3">
                            <Select
                                title={"Captain"}
                                name={"captain"}
                                options={this.state.captain}
                                value={this.state.newMember.captain}
                                placeholder={"Captain Option"}
                                handleChange={this.handleInput}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <Select
                                title={"Committee ID"}
                                name={"committee_id"}
                                options={this.state.committee_id}
                                value={this.state.newMember.committee_id}
                                placeholder={"Committee ID"}
                                handleChange={this.handleInput}
                            />
                        </div>

                        <div className="col-sm-4">
                            <Select
                                title={"Chair"}
                                name={"chair"}
                                options={this.state.chair}
                                value={this.state.newMember.chair}
                                placeholder={"Committee Chair Option"}
                                handleChange={this.handleInput}
                            />
                        </div>
                    </div>

                    {/* Row 5 */}
                    <div className="row">
                        <div className="col-sm-3">
                            <Select
                                title={"Membership"}
                                name={"membership"}
                                options={this.state.membership}
                                value={this.state.newMember.membership}
                                placeholder={"Select Membership Type"}
                                handleChange={this.handleInput}
                            />
                        </div>

                        <div className="col-sm-3">
                            <Input
                                inputType={"number"}
                                name={"member_since"}
                                title={"Year Joined Club"}
                                value={this.state.newMember.member_since}
                                placeholder={"Year Joined Club"}
                                handleChange={this.handleInput}
                            />
                        </div>

                        <div className="col-sm-3">
                            <Input
                                inputType={"number"}
                                name={"year_resigned"}
                                title={"Year Resigned"}
                                value={this.state.newMember.year_resigned}
                                placeholder={"Year Resigned"}
                                handleChange={this.handleInput}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
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

                    <Button
                        action={this.props.action === 'add' ? this.handleFormSubmit : this.handleUpdate}
                        type={"primary"}
                        title={this.props.action === 'add' ? "Submit" : "Update"} //if this.props.action = add, then show the submit button
                        style={buttonStyle}         //add is on the AdminPage
                    />{" "}
                    {/*Submit */}
                    <Button
                        action={this.handleClearForm}
                        type={"secondary"}
                        title={"Clear"}
                        style={buttonStyle}
                    />{" "}
                    {/* Clear the form */}
                    {this.props.action === 'edit' ? //if this.props.action == 'edit', then the delete button will also show
                        <Button
                            action={this.handleDeleteMember}
                            type={"secondary"}
                            title={"Delete"}
                            style={buttonStyle}
                        />      // if this.props.action is anything else, (add), then show null/nothing
                        : null}
                </form>
            </div>
        );
    }
}

const buttonStyle = {
    margin: "10px 10px 10px 10px"
};

export default MemberForm;
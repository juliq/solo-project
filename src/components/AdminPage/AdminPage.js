import React, { Component } from "react";
import axios from "axios";

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
                year_left: null,
                dues_paid: ""
            },

            // BD: (["January","February","March","April","May","June","July","August","September","October","November","December"],
            // ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]),
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
                { value: 'active', label: 'Active' },
                { value: 'affiliate', label: 'Affiliate' },
                { value: 'former', label: 'Former' },
            ],
            dues_paid: [
                { value: true, label: 'True' },
                { value: false, label: 'False' }
            ]

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
        axios.post('/api/member', { "members": this.state.newMember }) // newMember includes all the db fields
            .then((response) => {
                console.log('this is the response for add member', response.status);
                if (response.status == 200) {
                    this.handleClearForm(e)
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
                year_left: null,
                dues_paid: "",

            }
        });
    }

    handleDeleteMember(e) {

    }

    // DELETE a member
    // deleteMember = () => {
    //     axios.delete('/api/member')
    //       .then((response) => {
    //         console.log('this is the response for the member info', response);
    //         this.setState({ ... this.state, data: response.data, showData: response.data });
    //         console.log(this.state);                  
            
    //       }).catch((error) => {
    //         console.log('error making get', error);
    //       });
    //   }


    render() {
        return (
<div>

    
            {/* <div id="accordion">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Collapsible Group Item #1
        </button>
                        </h5>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Collapsible Group Item #2
        </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingThree">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Collapsible Group Item #3
        </button>
                        </h5>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
                    </div>
                </div>
            </div> */}


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
                    <div className="col-sm-2">
                        <Input
                            inputType={"text"}
                            name={"email"}
                            title={"Email"}
                            value={this.state.newMember.email}
                            placeholder={"(Email)"}
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
                            options={this.state.gardenTeamOptions}
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
                            placeholder={"Committee Chair Option"}
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
                            name={"member_since"}
                            title={"Year Joined Club"}
                            value={this.state.newMember.member_since}
                            placeholder={"Year Joined Club"}
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
            </div>
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
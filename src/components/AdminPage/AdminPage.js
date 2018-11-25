import React, { Component } from "react";
import axios from 'axios';
import './AdminPage.css';

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import MemberForm from './MemberForm';



class AdminPage extends Component {

    state = {
        data: [],
    }

    componentWillMount() {
        this.getMemberInfo(); // calls the getMemberInfo function just before page load to display the table of members
    }


    // GET Request for responses from the database
    getMemberInfo = () => {
        axios.get('/api/member')
            .then((response) => {
                console.log('this is the response for the member info', response);
                this.setState({ ... this.state, data: response.data });// data is a master list of all members so it will never change
                console.log(this.state);
                console.log('I am here');
            }).catch((error) => {
                console.log('error making get', error);
            });
    }

    createMemberPanels() {
        let panels = [] // React requires a key prop for elements that are pushed into an array to identify them
        console.log(this.state.data);
        for (let i = 0; i < this.state.data.length; i++) {

            panels.push(   //this creates the html for the panel for each member of data

                <AccordionItem>
                    {/* style={{ border: '1px solid lightgray', color: 'gray', width: '70vw', align: 'center' }} */}
                    <AccordionItemTitle >
                        <h3>{this.state.data[i].first_name} {this.state.data[i].last_name}</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <MemberForm
                            action="edit"  // updates the member form based on this function or add
                            member={this.state.data[i]}  // a javascript variable in html code
                        />
                    </AccordionItemBody>
                </AccordionItem>
            )
        }
        return panels;
    }



    render() {
        return (
            <div>
                <div className="preAccordion" >
                    <h4>1. To edit member in database: Select a name</h4>
                    <h4>2. To add new member to database: See form below</h4>
                </div>
                <div className="accordion">
                    <Accordion>
                        {this.createMemberPanels()}
                    </Accordion>
                </div>
                <div>
                    <div className="preAccordion">
                        <h4>Add a new member here:</h4>
                    </div>
                    <div className="accordion">
                        <MemberForm
                            updateParent={this.getMemberInfo}
                            action="add"  // updates the member form based on this function or edit
                        />
                    </div>
                </div>


            </div>
        )
    }

}



export default AdminPage;
import React from 'react';
import { Button } from 'react-bootstrap';
import Select from 'react-select';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'


class AdminPage extends React.Component {
  

  render() {
  
    return (
      <div>
          <Button>Member Table</Button>
          <Button>Member Photos</Button>
          <div style={{width: '200px', height: '50px'}}>
          <Select
            value={this.state.selectedGardenTeam}
            onChange={this.handleChangeGardenTeam}
            options={this.options}
          />
          </div>
          <div style={{width: '200px', height: '50px'}}>
          <Select
            value={this.state.selectedCommittee}
            onChange={this.handleChangeCommittee}
            options={this.options}
          />
          </div>
      {/* react table */}

       {/* react grid */}

      </div>
    );
  }


}
export default AdminPage;

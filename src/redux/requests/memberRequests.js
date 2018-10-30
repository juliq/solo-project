import axios from 'axios';

export function getMembersRequest() {
    return axios.get('/api/member')
            .then((response) => {
                console.log('this is the response for the member info', response);
                return response.data;
            }).catch((error) => {
                console.log('error making get', error);
            });
  }

//   export function deleteMember() {
//       return axios.delete('/api/member', {data: {first_name: fName, last_name: lName}})//in axios delete, in order to send a body, need to include body as the value of the data key
//       .then((response) => {
//           if (response.status === 200) {
//           }
//           console.log('this is the response for the member info', response);
//       }).catch((error) => {
//           console.log('error deleting member', error);
//       });
//   }

//   export function updateMember() {
//      return axios.put('/api/member', this.state.newMember ) // newMember includes all the db fields
//         .then((response) => {
//             console.log('this is the response for update member', response.status);
//             if (response.status === 200) {
//             }
//         }).catch((error) => {
//             console.log('error making update', error);
//         });
// }



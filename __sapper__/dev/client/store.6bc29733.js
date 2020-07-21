import { H as writable } from './client.e1256e98.js';

const count = writable(0);

const quizSteps =  writable([
    { id:'1', component: "Quiz1", name: 'Webcam Challenge', complete:false},
    { id: '2', component: "Quiz3", name: 'HTTPS Everywhere', complete:false},
    { id: '3', component: "Checkpoint1", name: 'Security vs Privacy', complete:false},
    { id: '4', component: "Quiz2", name: 'Search Engine', complete:false},
    { id: '5', component: "Quiz8", name: 'Privacy Settings', complete:false},
    { id: '6', component: "Quiz6", name: 'Tracker blocker', complete:false},
    { id: '7', component: "Quiz5", name: 'DNS', complete:false},
    { id: '8', component: "Checkpoint2", name: 'Surveillance Capitalism', complete:false},
    { id: '9', component: "Quiz4", name: 'Location Tracking', complete:false},
    { id: '10', component: "Quiz7", name: 'iOT', complete:false},
    { id: '11', component: "Quiz9", name: 'How to Make change', complete:false},
]);

export { count as c, quizSteps as q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuNmJjMjk3MzMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdG9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG5leHBvcnQgY29uc3QgY291bnQgPSB3cml0YWJsZSgwKTtcblxuZXhwb3J0IGNvbnN0IHF1aXpTdGVwcyA9ICB3cml0YWJsZShbXG4gICAgeyBpZDonMScsIGNvbXBvbmVudDogXCJRdWl6MVwiLCBuYW1lOiAnV2ViY2FtIENoYWxsZW5nZScsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICB7IGlkOiAnMicsIGNvbXBvbmVudDogXCJRdWl6M1wiLCBuYW1lOiAnSFRUUFMgRXZlcnl3aGVyZScsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICB7IGlkOiAnMycsIGNvbXBvbmVudDogXCJDaGVja3BvaW50MVwiLCBuYW1lOiAnU2VjdXJpdHkgdnMgUHJpdmFjeScsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICB7IGlkOiAnNCcsIGNvbXBvbmVudDogXCJRdWl6MlwiLCBuYW1lOiAnU2VhcmNoIEVuZ2luZScsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICB7IGlkOiAnNScsIGNvbXBvbmVudDogXCJRdWl6OFwiLCBuYW1lOiAnUHJpdmFjeSBTZXR0aW5ncycsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICB7IGlkOiAnNicsIGNvbXBvbmVudDogXCJRdWl6NlwiLCBuYW1lOiAnVHJhY2tlciBibG9ja2VyJywgY29tcGxldGU6ZmFsc2V9LFxuICAgIHsgaWQ6ICc3JywgY29tcG9uZW50OiBcIlF1aXo1XCIsIG5hbWU6ICdETlMnLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgeyBpZDogJzgnLCBjb21wb25lbnQ6IFwiQ2hlY2twb2ludDJcIiwgbmFtZTogJ1N1cnZlaWxsYW5jZSBDYXBpdGFsaXNtJywgY29tcGxldGU6ZmFsc2V9LFxuICAgIHsgaWQ6ICc5JywgY29tcG9uZW50OiBcIlF1aXo0XCIsIG5hbWU6ICdMb2NhdGlvbiBUcmFja2luZycsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICB7IGlkOiAnMTAnLCBjb21wb25lbnQ6IFwiUXVpejdcIiwgbmFtZTogJ2lPVCcsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICB7IGlkOiAnMTEnLCBjb21wb25lbnQ6IFwiUXVpejlcIiwgbmFtZTogJ0hvdyB0byBNYWtlIGNoYW5nZScsIGNvbXBsZXRlOmZhbHNlfSxcbl0pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ1ksTUFBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUNqQztBQUNZLE1BQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQztBQUNuQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDO0FBQzNFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUM7QUFDNUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQztBQUNyRixJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQztBQUN6RSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDO0FBQzVFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUM7QUFDM0UsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUM7QUFDL0QsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQztBQUN6RixJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDO0FBQzdFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDO0FBQ2hFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUM7QUFDL0UsQ0FBQzs7OzsifQ==

import { H as writable } from './client.92d18f56.js';

const count = writable(0);

const quizSteps =  writable([
    { id:'1', component: "Quiz1", name: 'Webcam Challenge', complete:false, status: 0},
    { id: '2', component: "Quiz3", name: 'HTTPS Everywhere', complete:false, status: 0},
    { id: '3', component: "Checkpoint1", name: 'Security vs Privacy', complete:false, status: 0},
    { id: '4', component: "Quiz2", name: 'Search Engine', complete:false, status: 0},
    { id: '5', component: 'Quiz8', name: 'Privacy Settings', complete:false, status: 0},
    { id: '6', component: 'Quiz6', name: 'Tracker blocker', complete:false, status: 0},
    { id: '7', component: 'Quiz5', name: 'DNS', complete:false, status: 0},
    { id: '8', component: 'Checkpoint2', name: 'Surveillance Capitalism', complete:false, status: 0},
    { id: '9', component: 'Quiz4', name: 'Location Tracking', complete:false, status: 0},
    { id: '10', component: 'Quiz7', name: 'iOT', complete:false, status: 0},
    { id: '11', component: 'Quiz9', name: 'How to Make change', complete:false, status: 0},
]);

export { count as c, quizSteps as q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuZjVjODBiNmMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdG9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG5leHBvcnQgY29uc3QgY291bnQgPSB3cml0YWJsZSgwKTtcblxuZXhwb3J0IGNvbnN0IHF1aXpTdGVwcyA9ICB3cml0YWJsZShbXG4gICAgeyBpZDonMScsIGNvbXBvbmVudDogXCJRdWl6MVwiLCBuYW1lOiAnV2ViY2FtIENoYWxsZW5nZScsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDB9LFxuICAgIHsgaWQ6ICcyJywgY29tcG9uZW50OiBcIlF1aXozXCIsIG5hbWU6ICdIVFRQUyBFdmVyeXdoZXJlJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMH0sXG4gICAgeyBpZDogJzMnLCBjb21wb25lbnQ6IFwiQ2hlY2twb2ludDFcIiwgbmFtZTogJ1NlY3VyaXR5IHZzIFByaXZhY3knLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwfSxcbiAgICB7IGlkOiAnNCcsIGNvbXBvbmVudDogXCJRdWl6MlwiLCBuYW1lOiAnU2VhcmNoIEVuZ2luZScsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDB9LFxuICAgIHsgaWQ6ICc1JywgY29tcG9uZW50OiAnUXVpejgnLCBuYW1lOiAnUHJpdmFjeSBTZXR0aW5ncycsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDB9LFxuICAgIHsgaWQ6ICc2JywgY29tcG9uZW50OiAnUXVpejYnLCBuYW1lOiAnVHJhY2tlciBibG9ja2VyJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMH0sXG4gICAgeyBpZDogJzcnLCBjb21wb25lbnQ6ICdRdWl6NScsIG5hbWU6ICdETlMnLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwfSxcbiAgICB7IGlkOiAnOCcsIGNvbXBvbmVudDogJ0NoZWNrcG9pbnQyJywgbmFtZTogJ1N1cnZlaWxsYW5jZSBDYXBpdGFsaXNtJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMH0sXG4gICAgeyBpZDogJzknLCBjb21wb25lbnQ6ICdRdWl6NCcsIG5hbWU6ICdMb2NhdGlvbiBUcmFja2luZycsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDB9LFxuICAgIHsgaWQ6ICcxMCcsIGNvbXBvbmVudDogJ1F1aXo3JywgbmFtZTogJ2lPVCcsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDB9LFxuICAgIHsgaWQ6ICcxMScsIGNvbXBvbmVudDogJ1F1aXo5JywgbmFtZTogJ0hvdyB0byBNYWtlIGNoYW5nZScsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDB9LFxuXSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDWSxNQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ2pDO0FBQ1ksTUFBQyxTQUFTLElBQUksUUFBUSxDQUFDO0FBQ25DLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUN0RixJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDdkYsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ2hHLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDcEYsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZGLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUN0RixJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQzFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNwRyxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDeEYsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUMzRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDMUYsQ0FBQzs7OzsifQ==

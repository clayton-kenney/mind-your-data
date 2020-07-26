import { G as writable } from './client.117889b4.js';

const count = writable(0);
const step = writable(0);
const timerActive = writable(false);

const quizSteps =  writable([
    { id:'1',  component: "Quiz1", name: 'Webcam Challenge', complete:false, status: 0, steps: 3},
    { id: '2', component: "Quiz2", name: 'HTTPS Everywhere', complete:false, status: 0, steps: 1},
    { id: '3', type:'checkpoint', component: "Checkpoint1", name: 'Security vs Privacy', complete:false, status: 0, steps: 0},
    { id: '4', component: "Quiz3", name: 'Search Engine', complete:false, status: 0, steps: 2},
    { id: '5', component: 'Quiz4', name: 'Privacy Settings', complete:false, status: 0, steps: 1},
    { id: '6', component: 'Quiz5', name: 'Tracker blocker', complete:false, status: 0, steps: 1},
    { id: '7', component: 'Quiz6', name: 'DNS', complete:false, status: 0, steps: 1},
    { id: '8', type:'checkpoint', component: 'Checkpoint2', name: 'Surveillance Capitalism', complete:false, status: 0, steps: 0},
    { id: '9', component: 'Quiz7', name: 'Location Tracking', complete:false, status: 0, steps: 2},
    { id: '10', component: 'Quiz8', name: 'iOT', complete:false, status: 0, steps: 2},
    { id: '11', type:'checkpoint', component: 'Checkpoint3', name: 'How to Make change', complete:false, status: 0, steps: 0},
]);

export { count as c, quizSteps as q, step as s, timerActive as t };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuNjdiZTE4ODcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdG9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG5leHBvcnQgY29uc3QgY291bnQgPSB3cml0YWJsZSgwKTtcbmV4cG9ydCBjb25zdCBzdGVwID0gd3JpdGFibGUoMCk7XG5leHBvcnQgY29uc3QgdGltZXJBY3RpdmUgPSB3cml0YWJsZShmYWxzZSk7XG5cbmV4cG9ydCBjb25zdCBxdWl6U3RlcHMgPSAgd3JpdGFibGUoW1xuICAgIHsgaWQ6JzEnLCAgY29tcG9uZW50OiBcIlF1aXoxXCIsIG5hbWU6ICdXZWJjYW0gQ2hhbGxlbmdlJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDN9LFxuICAgIHsgaWQ6ICcyJywgY29tcG9uZW50OiBcIlF1aXoyXCIsIG5hbWU6ICdIVFRQUyBFdmVyeXdoZXJlJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDF9LFxuICAgIHsgaWQ6ICczJywgdHlwZTonY2hlY2twb2ludCcsIGNvbXBvbmVudDogXCJDaGVja3BvaW50MVwiLCBuYW1lOiAnU2VjdXJpdHkgdnMgUHJpdmFjeScsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAwfSxcbiAgICB7IGlkOiAnNCcsIGNvbXBvbmVudDogXCJRdWl6M1wiLCBuYW1lOiAnU2VhcmNoIEVuZ2luZScsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAyfSxcbiAgICB7IGlkOiAnNScsIGNvbXBvbmVudDogJ1F1aXo0JywgbmFtZTogJ1ByaXZhY3kgU2V0dGluZ3MnLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMX0sXG4gICAgeyBpZDogJzYnLCBjb21wb25lbnQ6ICdRdWl6NScsIG5hbWU6ICdUcmFja2VyIGJsb2NrZXInLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMX0sXG4gICAgeyBpZDogJzcnLCBjb21wb25lbnQ6ICdRdWl6NicsIG5hbWU6ICdETlMnLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMX0sXG4gICAgeyBpZDogJzgnLCB0eXBlOidjaGVja3BvaW50JywgY29tcG9uZW50OiAnQ2hlY2twb2ludDInLCBuYW1lOiAnU3VydmVpbGxhbmNlIENhcGl0YWxpc20nLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMH0sXG4gICAgeyBpZDogJzknLCBjb21wb25lbnQ6ICdRdWl6NycsIG5hbWU6ICdMb2NhdGlvbiBUcmFja2luZycsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAyfSxcbiAgICB7IGlkOiAnMTAnLCBjb21wb25lbnQ6ICdRdWl6OCcsIG5hbWU6ICdpT1QnLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMn0sXG4gICAgeyBpZDogJzExJywgdHlwZTonY2hlY2twb2ludCcsIGNvbXBvbmVudDogJ0NoZWNrcG9pbnQzJywgbmFtZTogJ0hvdyB0byBNYWtlIGNoYW5nZScsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAwfSxcbl0pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ1ksTUFBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUNyQixNQUFDLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3BCLE1BQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUU7QUFDM0M7QUFDWSxNQUFDLFNBQVMsSUFBSSxRQUFRLENBQUM7QUFDbkMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDakcsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDakcsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUM3SCxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDOUYsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDakcsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDaEcsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3BGLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDakksSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDbEcsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3JGLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDN0gsQ0FBQzs7OzsifQ==

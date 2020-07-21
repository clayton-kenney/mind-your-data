import { H as writable } from './client.cf5ad465.js';

const count = writable(0);

const quizSteps =  writable([
    { complete:false},
    { complete:false},
    { complete:false},
    { complete:false},
    { complete:false},
    { complete:false},
    { complete:false},
    { complete:false},
    { complete:false},
]);

/*export const quizSteps =  writable([
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
])*/

export { count as c, quizSteps as q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuMGIyM2M4YTcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdG9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG5leHBvcnQgY29uc3QgY291bnQgPSB3cml0YWJsZSgwKTtcblxuZXhwb3J0IGNvbnN0IHF1aXpTdGVwcyA9ICB3cml0YWJsZShbXG4gICAgeyBjb21wbGV0ZTpmYWxzZX0sXG4gICAgeyBjb21wbGV0ZTpmYWxzZX0sXG4gICAgeyBjb21wbGV0ZTpmYWxzZX0sXG4gICAgeyBjb21wbGV0ZTpmYWxzZX0sXG4gICAgeyBjb21wbGV0ZTpmYWxzZX0sXG4gICAgeyBjb21wbGV0ZTpmYWxzZX0sXG4gICAgeyBjb21wbGV0ZTpmYWxzZX0sXG4gICAgeyBjb21wbGV0ZTpmYWxzZX0sXG4gICAgeyBjb21wbGV0ZTpmYWxzZX0sXG5dKVxuXG4vKmV4cG9ydCBjb25zdCBxdWl6U3RlcHMgPSAgd3JpdGFibGUoW1xuICAgIHsgaWQ6JzEnLCBjb21wb25lbnQ6IFwiUXVpejFcIiwgbmFtZTogJ1dlYmNhbSBDaGFsbGVuZ2UnLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgeyBpZDogJzInLCBjb21wb25lbnQ6IFwiUXVpejNcIiwgbmFtZTogJ0hUVFBTIEV2ZXJ5d2hlcmUnLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgeyBpZDogJzMnLCBjb21wb25lbnQ6IFwiQ2hlY2twb2ludDFcIiwgbmFtZTogJ1NlY3VyaXR5IHZzIFByaXZhY3knLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgeyBpZDogJzQnLCBjb21wb25lbnQ6IFwiUXVpejJcIiwgbmFtZTogJ1NlYXJjaCBFbmdpbmUnLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgeyBpZDogJzUnLCBjb21wb25lbnQ6IFwiUXVpejhcIiwgbmFtZTogJ1ByaXZhY3kgU2V0dGluZ3MnLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgeyBpZDogJzYnLCBjb21wb25lbnQ6IFwiUXVpejZcIiwgbmFtZTogJ1RyYWNrZXIgYmxvY2tlcicsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICB7IGlkOiAnNycsIGNvbXBvbmVudDogXCJRdWl6NVwiLCBuYW1lOiAnRE5TJywgY29tcGxldGU6ZmFsc2V9LFxuICAgIHsgaWQ6ICc4JywgY29tcG9uZW50OiBcIkNoZWNrcG9pbnQyXCIsIG5hbWU6ICdTdXJ2ZWlsbGFuY2UgQ2FwaXRhbGlzbScsIGNvbXBsZXRlOmZhbHNlfSxcbiAgICB7IGlkOiAnOScsIGNvbXBvbmVudDogXCJRdWl6NFwiLCBuYW1lOiAnTG9jYXRpb24gVHJhY2tpbmcnLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgeyBpZDogJzEwJywgY29tcG9uZW50OiBcIlF1aXo3XCIsIG5hbWU6ICdpT1QnLCBjb21wbGV0ZTpmYWxzZX0sXG4gICAgeyBpZDogJzExJywgY29tcG9uZW50OiBcIlF1aXo5XCIsIG5hbWU6ICdIb3cgdG8gTWFrZSBjaGFuZ2UnLCBjb21wbGV0ZTpmYWxzZX0sXG5dKSovIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ1ksTUFBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUNqQztBQUNZLE1BQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQztBQUNuQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQztBQUNyQixJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQztBQUNyQixJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQztBQUNyQixJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQztBQUNyQixJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQztBQUNyQixJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQztBQUNyQixJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQztBQUNyQixJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQztBQUNyQixJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQztBQUNyQixDQUFDLEVBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OyJ9

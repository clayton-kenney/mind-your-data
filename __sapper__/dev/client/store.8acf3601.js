import { H as writable } from './client.3235b321.js';

const count = writable(0);
const step = writable(0);
const quizSteps =  writable([
    { id:'1', component: "Quiz1", name: 'Webcam Challenge', complete:false, status: 0, steps: 3},
    { id: '2', component: "Quiz2", name: 'HTTPS Everywhere', complete:false, status: 0, steps: 1},
    { id: '3', component: "Checkpoint1", name: 'Security vs Privacy', complete:false, status: 0, steps: 0},
    { id: '4', component: "Quiz3", name: 'Search Engine', complete:false, status: 0, steps: 2},
    { id: '5', component: 'Quiz4', name: 'Privacy Settings', complete:false, status: 0, steps: 1},
    { id: '6', component: 'Quiz5', name: 'Tracker blocker', complete:false, status: 0, steps: 1},
    { id: '7', component: 'Quiz6', name: 'DNS', complete:false, status: 0, steps: 1},
    { id: '8', component: 'Checkpoint2', name: 'Surveillance Capitalism', complete:false, status: 0, steps: 0},
    { id: '9', component: 'Quiz7', name: 'Location Tracking', complete:false, status: 0, steps: 2},
    { id: '10', component: 'Quiz8', name: 'iOT', complete:false, status: 0, steps: 2},
    { id: '11', component: 'Checkpoint3', name: 'How to Make change', complete:false, status: 0, steps: 0},
]);

export { count as c, quizSteps as q, step as s };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuOGFjZjM2MDEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdG9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG5leHBvcnQgY29uc3QgY291bnQgPSB3cml0YWJsZSgwKTtcbmV4cG9ydCBjb25zdCBzdGVwID0gd3JpdGFibGUoMCk7XG5leHBvcnQgY29uc3QgcXVpelN0ZXBzID0gIHdyaXRhYmxlKFtcbiAgICB7IGlkOicxJywgY29tcG9uZW50OiBcIlF1aXoxXCIsIG5hbWU6ICdXZWJjYW0gQ2hhbGxlbmdlJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDN9LFxuICAgIHsgaWQ6ICcyJywgY29tcG9uZW50OiBcIlF1aXoyXCIsIG5hbWU6ICdIVFRQUyBFdmVyeXdoZXJlJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDF9LFxuICAgIHsgaWQ6ICczJywgY29tcG9uZW50OiBcIkNoZWNrcG9pbnQxXCIsIG5hbWU6ICdTZWN1cml0eSB2cyBQcml2YWN5JywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDB9LFxuICAgIHsgaWQ6ICc0JywgY29tcG9uZW50OiBcIlF1aXozXCIsIG5hbWU6ICdTZWFyY2ggRW5naW5lJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDJ9LFxuICAgIHsgaWQ6ICc1JywgY29tcG9uZW50OiAnUXVpejQnLCBuYW1lOiAnUHJpdmFjeSBTZXR0aW5ncycsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAxfSxcbiAgICB7IGlkOiAnNicsIGNvbXBvbmVudDogJ1F1aXo1JywgbmFtZTogJ1RyYWNrZXIgYmxvY2tlcicsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAxfSxcbiAgICB7IGlkOiAnNycsIGNvbXBvbmVudDogJ1F1aXo2JywgbmFtZTogJ0ROUycsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAxfSxcbiAgICB7IGlkOiAnOCcsIGNvbXBvbmVudDogJ0NoZWNrcG9pbnQyJywgbmFtZTogJ1N1cnZlaWxsYW5jZSBDYXBpdGFsaXNtJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDB9LFxuICAgIHsgaWQ6ICc5JywgY29tcG9uZW50OiAnUXVpejcnLCBuYW1lOiAnTG9jYXRpb24gVHJhY2tpbmcnLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMn0sXG4gICAgeyBpZDogJzEwJywgY29tcG9uZW50OiAnUXVpejgnLCBuYW1lOiAnaU9UJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDJ9LFxuICAgIHsgaWQ6ICcxMScsIGNvbXBvbmVudDogJ0NoZWNrcG9pbnQzJywgbmFtZTogJ0hvdyB0byBNYWtlIGNoYW5nZScsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAwfSxcbl0pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ1ksTUFBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUNyQixNQUFDLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3BCLE1BQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQztBQUNuQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNoRyxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNqRyxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUMxRyxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDOUYsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDakcsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDaEcsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3BGLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQzlHLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ2xHLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNyRixJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUMxRyxDQUFDOzs7OyJ9

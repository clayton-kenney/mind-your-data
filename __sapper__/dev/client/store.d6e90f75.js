import { G as writable } from './client.af1ac2be.js';

const count = writable(0);
const step = writable(0);
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

export { count as c, quizSteps as q, step as s };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuZDZlOTBmNzUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdG9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG5leHBvcnQgY29uc3QgY291bnQgPSB3cml0YWJsZSgwKTtcbmV4cG9ydCBjb25zdCBzdGVwID0gd3JpdGFibGUoMCk7XG5leHBvcnQgY29uc3QgcXVpelN0ZXBzID0gIHdyaXRhYmxlKFtcbiAgICB7IGlkOicxJywgIGNvbXBvbmVudDogXCJRdWl6MVwiLCBuYW1lOiAnV2ViY2FtIENoYWxsZW5nZScsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAzfSxcbiAgICB7IGlkOiAnMicsIGNvbXBvbmVudDogXCJRdWl6MlwiLCBuYW1lOiAnSFRUUFMgRXZlcnl3aGVyZScsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAxfSxcbiAgICB7IGlkOiAnMycsIHR5cGU6J2NoZWNrcG9pbnQnLCBjb21wb25lbnQ6IFwiQ2hlY2twb2ludDFcIiwgbmFtZTogJ1NlY3VyaXR5IHZzIFByaXZhY3knLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMH0sXG4gICAgeyBpZDogJzQnLCBjb21wb25lbnQ6IFwiUXVpejNcIiwgbmFtZTogJ1NlYXJjaCBFbmdpbmUnLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMn0sXG4gICAgeyBpZDogJzUnLCBjb21wb25lbnQ6ICdRdWl6NCcsIG5hbWU6ICdQcml2YWN5IFNldHRpbmdzJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDF9LFxuICAgIHsgaWQ6ICc2JywgY29tcG9uZW50OiAnUXVpejUnLCBuYW1lOiAnVHJhY2tlciBibG9ja2VyJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDF9LFxuICAgIHsgaWQ6ICc3JywgY29tcG9uZW50OiAnUXVpejYnLCBuYW1lOiAnRE5TJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDF9LFxuICAgIHsgaWQ6ICc4JywgdHlwZTonY2hlY2twb2ludCcsIGNvbXBvbmVudDogJ0NoZWNrcG9pbnQyJywgbmFtZTogJ1N1cnZlaWxsYW5jZSBDYXBpdGFsaXNtJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDB9LFxuICAgIHsgaWQ6ICc5JywgY29tcG9uZW50OiAnUXVpejcnLCBuYW1lOiAnTG9jYXRpb24gVHJhY2tpbmcnLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMn0sXG4gICAgeyBpZDogJzEwJywgY29tcG9uZW50OiAnUXVpejgnLCBuYW1lOiAnaU9UJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDJ9LFxuICAgIHsgaWQ6ICcxMScsIHR5cGU6J2NoZWNrcG9pbnQnLCBjb21wb25lbnQ6ICdDaGVja3BvaW50MycsIG5hbWU6ICdIb3cgdG8gTWFrZSBjaGFuZ2UnLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMH0sXG5dKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNZLE1BQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDckIsTUFBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUNwQixNQUFDLFNBQVMsSUFBSSxRQUFRLENBQUM7QUFDbkMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDakcsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDakcsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUM3SCxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDOUYsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDakcsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDaEcsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3BGLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDakksSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDbEcsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3JGLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDN0gsQ0FBQzs7OzsifQ==
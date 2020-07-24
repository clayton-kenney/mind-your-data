import { G as writable } from './client.2d97dfda.js';

const count = writable(0);
const step = writable(0);
const quizSteps =  writable([
    { id:'1', component: "Quiz1", name: 'Webcam Challenge', complete:false, status: 0},
    { id: '2', component: "Quiz2", name: 'HTTPS Everywhere', complete:false, status: 0},
    { id: '3', component: "Checkpoint1", name: 'Security vs Privacy', complete:false, status: 0},
    { id: '4', component: "Quiz3", name: 'Search Engine', complete:false, status: 0},
    { id: '5', component: 'Quiz4', name: 'Privacy Settings', complete:false, status: 0},
    { id: '6', component: 'Quiz5', name: 'Tracker blocker', complete:false, status: 0},
    { id: '7', component: 'Quiz6', name: 'DNS', complete:false, status: 0},
    { id: '8', component: 'Checkpoint2', name: 'Surveillance Capitalism', complete:false, status: 0},
    { id: '9', component: 'Quiz7', name: 'Location Tracking', complete:false, status: 0},
    { id: '10', component: 'Quiz8', name: 'iOT', complete:false, status: 0},
    { id: '11', component: 'Checkpoint3', name: 'How to Make change', complete:false, status: 0},
]);

export { count as c, quizSteps as q, step as s };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuMTYyZGE4Y2EuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdG9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG5leHBvcnQgY29uc3QgY291bnQgPSB3cml0YWJsZSgwKTtcbmV4cG9ydCBjb25zdCBzdGVwID0gd3JpdGFibGUoMCk7XG5leHBvcnQgY29uc3QgcXVpelN0ZXBzID0gIHdyaXRhYmxlKFtcbiAgICB7IGlkOicxJywgY29tcG9uZW50OiBcIlF1aXoxXCIsIG5hbWU6ICdXZWJjYW0gQ2hhbGxlbmdlJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMH0sXG4gICAgeyBpZDogJzInLCBjb21wb25lbnQ6IFwiUXVpejJcIiwgbmFtZTogJ0hUVFBTIEV2ZXJ5d2hlcmUnLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwfSxcbiAgICB7IGlkOiAnMycsIGNvbXBvbmVudDogXCJDaGVja3BvaW50MVwiLCBuYW1lOiAnU2VjdXJpdHkgdnMgUHJpdmFjeScsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDB9LFxuICAgIHsgaWQ6ICc0JywgY29tcG9uZW50OiBcIlF1aXozXCIsIG5hbWU6ICdTZWFyY2ggRW5naW5lJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMH0sXG4gICAgeyBpZDogJzUnLCBjb21wb25lbnQ6ICdRdWl6NCcsIG5hbWU6ICdQcml2YWN5IFNldHRpbmdzJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMH0sXG4gICAgeyBpZDogJzYnLCBjb21wb25lbnQ6ICdRdWl6NScsIG5hbWU6ICdUcmFja2VyIGJsb2NrZXInLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwfSxcbiAgICB7IGlkOiAnNycsIGNvbXBvbmVudDogJ1F1aXo2JywgbmFtZTogJ0ROUycsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDB9LFxuICAgIHsgaWQ6ICc4JywgY29tcG9uZW50OiAnQ2hlY2twb2ludDInLCBuYW1lOiAnU3VydmVpbGxhbmNlIENhcGl0YWxpc20nLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwfSxcbiAgICB7IGlkOiAnOScsIGNvbXBvbmVudDogJ1F1aXo3JywgbmFtZTogJ0xvY2F0aW9uIFRyYWNraW5nJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMH0sXG4gICAgeyBpZDogJzEwJywgY29tcG9uZW50OiAnUXVpejgnLCBuYW1lOiAnaU9UJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMH0sXG4gICAgeyBpZDogJzExJywgY29tcG9uZW50OiAnQ2hlY2twb2ludDMnLCBuYW1lOiAnSG93IHRvIE1ha2UgY2hhbmdlJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMH0sXG5dKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNZLE1BQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDckIsTUFBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUNwQixNQUFDLFNBQVMsSUFBSSxRQUFRLENBQUM7QUFDbkMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ3RGLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUN2RixJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDaEcsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNwRixJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDdkYsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ3RGLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDMUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ3BHLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUN4RixJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQzNFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNoRyxDQUFDOzs7OyJ9

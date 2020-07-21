import { writable } from 'svelte/store';
export const count = writable(0);

export const quizSteps =  writable([
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
])
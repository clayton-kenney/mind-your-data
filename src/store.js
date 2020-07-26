import { writable, } from 'svelte/store';
import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';
export const count = writable(0);
export const step = writable(0);
export const timerActive = writable(false);
export const progress = tweened(0, {
    duration: 600,
    easing: cubicOut
})
export const quizSteps =  writable([
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
])
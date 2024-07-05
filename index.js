// Code your solution in this file!


function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const firstTwoDrivers = returnFirstTwoDrivers(drivers);
console.log(firstTwoDrivers); 

function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
}
const drivers2 = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const lastTwoDrivers = returnLastTwoDrivers(drivers2);
console.log(lastTwoDrivers);

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

const Drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const LastTwoDrivers = selectingDrivers[selectingDrivers.length - 1](drivers);

console.log(lastTwoDrivers); 

function createFareMultiplier(a){
    return function(fare){
        return fare * a
    }
}

function fareDoubler(fare){
    return fare * 2;
}

function fareTripler(fare){
    return fare * 3;
}
function selectDifferentDrivers(drivers,selectingDrivers){
    return selectingDrivers(drivers)
}
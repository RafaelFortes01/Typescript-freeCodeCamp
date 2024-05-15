"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = '55';
var rafael = { name: 'Rafael', id: 334 };
rafael = { username: 'rf', id: 334 };
// function getDbId(id: number | string) {
//    // making some API calls
//    console.log(`DB id is ${id}`)
// }
getDbId(3);
getDbId('3');
function getDbId(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
    else {
        id + 2;
    }
}
// array
var data = [1, 2, 3, 4];
var data2 = ['1', '2', '3', '4'];
var data3 = [1, '2', 3, '4', true];
var seatAllotment;
seatAllotment = 'aisle';

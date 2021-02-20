// let m = new Map([
//     [1, "Ayisha"],
//     [2, "Shani"],
//     [3, "Michelle"],
//   ])

//   for(let [key,value] of m.entries()){
//     console.log(key, value);
// }

const annoyingHashTags = new Set();
annoyingHashTags.add("#Selfie");
annoyingHashTags.add("#Blessed");
annoyingHashTags.add("#NoFilter");

for(let val of annoyingHashTags) {
   console.log("Please don't use", val);
}

const bandData = [
    [3, '3 doors down'],
    ['three', 'Three Dog Night'],
    ['nine', 'Nine Inch Nails'],
    ['four', 'The Four Seasons'],
    [41, 'Sum 41']
];

const bandMap = new Map(bandData);

// for(let [key, value] of bandMap){
//     console.log(value);
//     console.log(key);
//     console.log([key]);
//     console.log([value]);
//     console.log([key, value]);

// }

bandMap.forEach((key, value) => {
    console.log(key + '=>' + value);
});

function hasDuplicate (array) {
    return array === [...new Set(array)];
}
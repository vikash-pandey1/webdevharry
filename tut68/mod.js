console.log("This is module.js")
function avg(arr){
    let sum =0;
    arr.forEach(element=>{
        sum+=element;
    });
    return sum/arr.length;
}
// module.exports = {
//     avg:avg,
//     name:"vikahs",
//     repo:"github"
// }
module.exports.name = "vikash";
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(myObject[key]);
}


const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val) {
    console.log(val);
})
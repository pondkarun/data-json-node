const fs = require('fs');
const path = require("path");


const projectPath = path.resolve("./data");
const uploadPath = `${projectPath}`;

//เช็ค path ว่ามีไหม ถ้าไม่มีจะสร้างขึ้นมา
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
}

const min = 1, max = 1000000, sub = 100000, length = (max / sub);

let old_end = sub, old_start = 1;
for (let i = min; i <= length; i++) {
    const start = old_start, end = old_end;
    const filename = `data/data_${start}_${end}.json`
    const obj = [];

    for (let index = start; index <= end; index++) {
        obj.push({ id: index, item: `item-${index.toLocaleString()}` });
    }


    const json = JSON.stringify(obj);

    fs.writeFile(filename, json, 'utf8', () => {
        console.log('i :>> ', start, end);
        return
    });

    if (max > old_end) {
        old_end = end + sub
        old_start = end + 1
    }
}


// const start = 100000, end = 200000
// const filename = `data_${start}_${end}.json`

// const obj = [];

// for (let index = start; index <= end; index++) {
//     obj.push({ id: index, item: `item ${index}` });
// }


// const json = JSON.stringify(obj);

// fs.writeFile(filename, json, 'utf8', () => {

//     return
// });


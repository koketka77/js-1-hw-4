var tegs =  ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
var newTeg = []

for(var teg of tegs){
    if(newTeg.includes(teg)) continue
    newTeg.push(teg)  
}
console.log(newTeg)

const arr = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
let li = 0
let h1 = 0
let div = 0
let br = 0
let ol = 0
let p = 0

for(let item of arr){
    if(item == "li"){
        li += 1
    }else if(item == "div"){
        div += 1
    }else if(item == "br"){
        br += 1
    }else if(item == "h1"){
        h1 += 1
    }else if(item == "ol"){
        ol += 1
    }else if(item == "p"){
        p += 1
    }
}
let tags = {
    "div": div,
    "h1": h1,
    "ol": ol,
    "br": br,
    "p": p,
    "li": li,

}

let tagsArray = Object.entries(tags);
tagsArray.sort(function(a, b) {
  return b[1] - a[1];
});

console.log(tagsArray);
function deleteElements(arr) {
    let div = 0, ol = 0, p = 0, h1 = 0, br = 0, li = 0;
    
    arr.forEach((element, idx) => {
      if (element === "div") {
        div++;
        arr.splice(idx, 1);
      } else if (element === "ol") {
        ol++;
        arr.splice(idx, 1);
      } else if (element === "p") {
        p++;
        arr.splice(idx, 1);
      } else if (element === "h1") {
        h1++;
        arr.splice(idx, 1);
      } else if (element === "br") {
        br++;
        arr.splice(idx, 1);
      } else if (element === "li") {
        li++;
        arr.splice(idx, 1);
      }
    });
    
    if (div > 0 || ol > 0 || p > 0 || h1 > 0 || br > 0 || li > 0) {
      deleteElements(arr);
    }
  }

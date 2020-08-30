import * as d3 from "d3";

d3.select('body')
.append('ul')
.selectAll('li')
.data([1,2,3])
.enter()
.append('li')
.text('hi');
console.log('done');



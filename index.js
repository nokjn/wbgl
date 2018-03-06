import { clear } from "/wbgl.module.js";

(()=>{
  
alert(clear);

const tow = typeof window;
const ib = "object" == tow;

const g = ib ? window : global;

g.nokjn = g.nokjn || {};
g.nokjn.wbgl = {};
  
alert(g.nokjn);

})();

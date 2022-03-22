//importing and exporting mdules

import { hello } from './sell.js';
import {data as da} from './sell.js' //importing data variable as name da 
hello()
console.log(da)

//to import all the properties at once
import * as bundle from './sell.js'
bundle.hello()
console.log(bundle.data)    

//by deafult person object is imported
import person from './customer.js'
console.log(person)

//by deafult person object is imported by name ps
import ps from './customer.js'
console.log(ps)
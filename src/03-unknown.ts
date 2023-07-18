let anyValue: any;
anyValue = true;
anyValue = 1;
anyValue = null;
anyValue = [];
anyValue = {};

let isNew: boolean = anyValue;

anyValue.doSomething();

let unknowValue: unknown;
unknowValue = true;
unknowValue = 1;
unknowValue = null;
unknowValue = [];
unknowValue = {};

// unknowValue.doSomething();

if(typeof unknowValue === 'string'){
  unknowValue.toUpperCase();
}

if(typeof unknowValue === 'boolean'){
  let isNew2: boolean = unknowValue;
}


const parse = (str: string):unknown  => {
  return JSON.parse(str);
}



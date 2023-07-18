// Alejo => [A,l,e,j,o]  ->  string => string[]
// [A,l,e,j,o] => Alejo  ->  string[] => string

export function parseStr(input: string): string[]; //Sobrecarga
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;


// export function parseStr(input: string | string[]): (string | string[]) {
//   if (Array.isArray(input)){
//     return input.join(''); //string
//   } else {
//     return input.split(''); // string[]
//   }
// }

export function parseStr(input:unknown):unknown {
  if (Array.isArray(input)){
    return input.join(''); //string
  } else if(typeof input === 'string') {
    return input.split(''); // string[]
  } else if(typeof input === 'number'){
    return true;
  }
}

const rtaArray = parseStr('Alejo');
console.log('Alejo => ',rtaArray);
rtaArray.reverse()
if(Array.isArray(rtaArray)){
  rtaArray.reverse();
}


const rtaStr = parseStr(['A','l','e','j','o']);
console.log("['A','l','e','j','o'] => ",rtaStr);
rtaStr.toLocaleLowerCase();
if(typeof rtaStr === 'string'){
  rtaStr.toLocaleLowerCase();
}

console.log(parseStr(1));

/*Wrong*/
// declare function fn(x: unknown):unknown;
// declare function fn(x: HTMLElement):number;
// declare function fn(x: HTMLDivElement):string;
// var myElem: HTMLDivElement;
// var x= fn(myElem);// x: unknown,what?

/*OK*/
// declare function fn(x: HTMLDivElement):string;
// declare function fn(x: HTMLElement):number;
// declare function fn(x: unknown):unknown; Dejar la sobrecarga del unknown de ultima
// var myElem: HTMLDivElement;
// var x= fn(myElem);// x: string

/*Wrong*/
// interface Example {
//   diff(one:string):number;
//   diff(one:string,two:string):number;
//   diff(one:string,two:string,three:boolean):number;
// }

/*OK*/
// interface Example {
//   diff(one:string,two?:string,three?:boolean):number; Evaluar si es necesario la sobrecarga, pueden ser params opcionales
// }

/*Wrong*/
// interface Moment {
//   utcOffset():number;
//   utcOffset(b:number):Moment;
//   utcOffset(b:string):Moment;
// }

/*OK*/
// interface Moment {
//   utcOffset():number;
//   utcOffset(b:number | string ):Moment; Evaluar si es necesario tantas sobrecargas, pueden ser union type
// }

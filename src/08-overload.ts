// Alejo => [A,l,e,j,o]  ->  string => string[]
// [A,l,e,j,o] => Alejo  ->  string[] => string

function parseStr(input: string | string[]): (string | string[]) {
  if(Array.isArray(input)){
    return input.join(''); //string
  }else{
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Alejo');
console.log('Alejo => ',rtaArray);
// rtaArray.reverse(); Error
if(Array.isArray(rtaArray)){
  rtaArray.reverse();
}


const rtaStr = parseStr(['A','l','e','j','o']);
console.log("['A','l','e','j','o'] => ",rtaStr);
// rtaStr.toLocaleLowerCase(); Error
if(typeof rtaStr === 'string'){
  rtaStr.toLocaleLowerCase();
}

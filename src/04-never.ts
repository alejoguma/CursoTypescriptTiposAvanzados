const withoutEnd = () => {
  while(true){
    console.log('nunca para de aprender');
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input:unknown) => {
  if(typeof input === 'string'){
    return 'es un string';
  } else if(Array.isArray(input)){
    return 'es un array';
  }
  return fail('not match');
}

console.log(example('Hola'));
console.log(example([1,2,1,2]));
console.log(example(2));
console.log(example('Hola'));

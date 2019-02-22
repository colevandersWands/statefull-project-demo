// written first by hand to understand
const model = {
  next_id: 3,
  challenges: {
    0: { input: [114, 97, 99, 101, 99, 97, 114], 
        sorted: [97, 97, 99, 99, 101, 114, 114], 
        chars: [97, 99, 101, 114] },
    1: { input: [102, 108, 105, 109, 115, 121, 32, 101, 120, 99, 117, 115, 101], 
        sorted: [32, 99, 101, 101, 102, 105, 108, 109, 115, 115, 117, 120, 121], 
        chars: [32, 99, 101, 102, 105, 108, 109, 115, 117, 120, 121] },
    2: { input: [98, 105, 111, 112, 115, 121], 
        sorted: [98, 105, 111, 112, 115, 121], 
        chars: [98, 105, 111, 112, 115, 121] }
  }
};

const challenge_schema = {
  id: {input: 'ebedded user input', 
      sorted: 'array of sorted numbers',
      chars: 'array of unique, sorted numbers' }
};

console.groupCollapsed('%c challenges: object of game challenges', 'font-weight:bold');
console.log('challenges_schema: ', challenge_schema);
console.groupEnd();
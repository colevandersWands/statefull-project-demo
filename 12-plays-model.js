const plays = [];
const play_schema = {arg: 'string', expected:'string', actual: 'string', correct: 'boolean'};

console.groupCollapsed('%c plays: array of game play records', 'font-weight:bold');
console.log('play_schema: ', play_schema);
console.groupEnd();
run_tests(str_identity, str_identity_tests, false);
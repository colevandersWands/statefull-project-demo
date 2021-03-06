function guess_it() {                                       var new_entry = {};
                                                            new_entry['0'] = 'guessing';
  // read and process user input
  var arg = document.getElementById('input').value;         new_entry['1. arg'] = arg;
  var expected = document.getElementById('guess').value;    new_entry['2. expected'] = expected;

  if (arg.length < 2) {
    throw new Error('invalid input: must be at least 2 chars');
  };

  if (expected.length < 1) {
    throw new Error('invalid guess: must be at least 1 char');
  };

  // pass user input through core logic
  var actual = debed(uniquify(sort(embed(arg))));           new_entry['3. actual'] = actual;
  var correct = expected === actual;                        new_entry['4: correct'] = correct;

                                                            log.push(new_entry);
  var new_play = {  arg: arg, 
                    expected: expected, 
                    actual: actual, 
                    correct: correct
                  };

  plays.push(new_play);

  /* tell user how they did */
  var output = document.getElementById('output');
  if (correct) {
    output.innerHTML = 'correct!';
    output.style.backgroundColor = 'green';
  } else {
    output.innerHTML = 'try again';
    output.style.backgroundColor = 'orange';
  };
};

// in-place documentation
console.groupCollapsed('%c guess_it() -> (asserts user guess against actual charecters)', 'font-weight:bold');
console.log('reads user input from dom, calculates the actual result, asserts against the guess, displays to user');
console.log(guess_it.toString());
console.groupEnd();

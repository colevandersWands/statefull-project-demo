function save_challenge() {                                 var new_entry = {};
                                                            new_entry['0'] = 'saving challenge';
  // read and process user input
  var input = document.getElementById('input').value;       new_entry['1. input'] = input;
  output.style.backgroundColor = 'white';

  if (input.length < 2) {
    throw new Error('invalid input: must be at least 2 chars');
  };

  // pass user input through core logic
  var embedded = embed(input);                              new_entry['2. embedded'] = embedded;
  var sorted = sort(embedded);                              new_entry['3. sorted'] = sorted;
  var uniques = uniquify(sorted);                           new_entry['4. uniques'] = uniques;
                                                            log.push(new_entry);

  var next_id = model.next_id;
  model.challenges[next_id] = { input: embedded,
                   sorted: sorted,
                   chars: uniques };
  model.next_id += 1;

};

// in-place documentation
console.groupCollapsed('%c save_challenge() -> (saves challenge to model)', 'font-weight:bold');
console.log('reads user input from dom, embeds it and stores it in the challenges model');
console.log(save_challenge.toString());
console.groupEnd();
function display_challenges() {                               var new_entry = {};
                                                              new_entry['0'] = 'displaying challenges';  
  // read and process user input
  var output_div = document.getElementById('output');       
  output.style.backgroundColor = 'white';

  while (output_div.firstChild) {
      output_div.removeChild(output_div.firstChild);
  };

  for (const id in model.challenges) {
    var entry = model.challenges[id];

    var input = debed(entry.input);                           
    var sorted = debed(entry.sorted);
    var chars = debed(entry.chars);                           new_entry[input] = {
                                                                  sorted: sorted,
                                                                  chars: chars
                                                              };
    var entry_p = document.createElement('p');
    entry_p.innerHTML = input;

    output_div.appendChild(entry_p);                           
  };
                                                              log.push(new_entry);
};

// in-place documentation
console.groupCollapsed('%c disply_challenges() -> (displays saved challenges to user)', 'font-weight:bold');
console.log('process all saved challenges into dom elements and appends them to the output div');
console.log(display_challenges.toString());
console.groupEnd();

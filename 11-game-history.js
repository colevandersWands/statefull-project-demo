function game_history() {                                 var new_entry = {};
                                                          new_entry['0'] = 'game history';
  // display to user          
  
  var output = document.getElementById('output');       
  output.style.backgroundColor = 'white';

  while (output.firstChild) {
      output.removeChild(output.firstChild);
  };
                                                          new_entry.plays = [];
  for (var play of plays) {

    var display_str = play.arg+': '+play.actual;          
    if (play.correct) {
      display_str += ' === '+play.expected;
    } else {
      display_str += ' !== '+play.expected;
    };
                                                          new_entry.plays.push({[play.arg]: display_str});
    var play_p = document.createElement('p');
    play_p.innerHTML = display_str;

    output.appendChild(play_p);                           
  };
                                                          log.push(new_entry);
};

// in-place documentation
console.groupCollapsed('%c game_history() -> (writes history to dom)', 'font-weight:bold');
console.log('displays game history to user');
console.log(game_history.toString());
console.groupEnd();

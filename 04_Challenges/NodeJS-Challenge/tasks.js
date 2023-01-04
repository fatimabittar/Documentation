// Some variables needed in the whole tasks application
var tasks = [
  "Do your homeworks",
  "Enjoy your life"
];
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume(); //restart, stdin is the reading from the user
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  text = text.trim();
  var words = text.split(' ');
  var command = words.shift();
  
  if (command === 'quit' || command ==='exit') {
    quit();
  }
  else if(command === 'hello'){
    hello(words.join(' '));
  }
  else if(command === 'help'){
    help();
  }
  else if(command === 'list'){
    list();
  }
  else if(command === 'add'){
    add(words.join(' '));
  }
  else if(command=== 'remove'){
    remove(Number(words[0]));
  }
  else{
    unknownCommand(command);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 * @param  {string} c the arguement of hello command
 * @returns {void}
 */
function hello(c){
  if(c) {
    console.log(`hello ${c.trim()}!`);

  } else{
    console.log('hello!');
  }
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
 * Help the user
 * This function is supposed to help the user know the possible commands that he or she may use
 * 
 * @returns {void}
 */
 function help(){
  var helpText= 'Available commands: \n'
  + 'quit OR exit: Quit the application \n'
  + 'hello: Takes one additional argument \n'
  + 'list: Lists all the tasks \n'
  + 'add: Add new task \n'
  + 'remove: remove specific task \n';

  console.log(helpText);
}


/**
 * list all tasks
 * 
 * @returns {void}
 */
function list(){
  for (i=0; i<tasks.length;i++){
    console.log(`${i+1} - ${tasks[i]}`)
  }
}

/**
 * Add task
 * 
 * @returns {void}
 */
function add(task){
  if(task){
  tasks.push(task);
  }
  else{
    console.log('Error: You Should Provide a Task');
  }
}
/**
 * Remove task
 * 
 * @returns {void}
 * @param  {number} c the number recieved 
 */
function remove(c){
  if(typeof c === 'number' && c>0 && c<=tasks.length){
    tasks.splice(c-1,1);
  }
  else{
    console.log('Error: This number does not exist');
  }
}


// The following line starts the application
startApp("Fatima Bittar")


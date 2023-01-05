// Some variables needed in the whole tasks application
var tasks = [

  {task: 'Do your homeworks', done: false},
  {task: 'Enjoy your life', done: false},
  {task: 'Attend the gym', done: true},
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
  else if(command === 'remove'){
    if(words[0]){
      remove(Number(words[0]));
    }

    else{
      remove()
    }
  }

  else if(command === 'edit'){
    // edit 1 go to the gym
    // ['1','go','to','']
    if(!isNaN(Number(words[0]))){
      const index = Number(words.shift());
      edit(words.join(' '), index);
    }
    else{
     edit(words.join(' '));
    }
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
 * @param  {string} c the argument of hello command
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
    var message = `${i+1} - ${tasks[i].task}`;
   
    if (tasks[i].done ===true){
     message+=' [✓]';
    }
    else{
      message+=' [ ]';
    }
    console.log(message);
  }
}

/**
 * Add task
 * 
 * @returns {void}
 */
function add(task){
  if(task){
  tasks.push({task, done: false});
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
  else if ( c === undefined){
    tasks.pop();
  }
  else{
    console.log('Error: This number does not exist');
  }
}
/**
 * Remove task
 * 
 * @returns {void}
 * @param  {string} task the task needed to be edited 
 * @param  {number} index the number of the task to be edited
 */
function edit(task, index){
  if(task && index){
    tasks[index-1].task=task;
  }
  else if (task){
    tasks[tasks.length-1].task = task;
  }
  else{
    console.log('Error: You Should Provide a Task');
  }

}


// The following line starts the application
startApp("Fatima Bittar")


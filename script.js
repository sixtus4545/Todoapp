	/* let todosList = {
	todos :[],
	displayTodos:  function() {
		if (this.todos.length === 0) {
			console.log("your todo list is empty!");
		}else {
			console.log("my Todos:");
			for (var i = 0; i < this.todos.length; i++) {
				if (this.todos[i].completed === true){
				console.log("()x", this.todos[i].todosText);
			}else {
				console.log(" ", this.todos[i].todoText);
			}
		}
	}
},
addTodo: function(todoText) {
	this.todos.push({
		todoText: todoText,
		completed: false
	});
	this.displayTodos();
},
changeTodo: function(position, todoText) {
	this.todos[position].todotext = todoText;  
	this.displayTodos();
},
deleteTodo: function(position) {
	 this.todos.splice(position, 1)
	this.displayTodos();
},
toggleCompleted: function(position) {
	let todo = this.todo[position];
	todo.completed = !todo.completed;
	this.displayTodos();
},
toggleAll: function() {
	var totalTodos = this.todos.length;
	var completedTodos = 0;
	
	//  Get number of completed todos.
	for (var i =0; i < totalTodos; i++){
		if (this.todos[i].completed === true) {
			completedTodos++;
		}
	}
	
	//case 1: if eveerything's true, make everything false.
	if (completedTodos === totalTodos){
		for (let i = 0; i < totalTodos; i++){
			this.todos[i].completed = false;
		}
		//case 2: otherwise, make everything true.
	}else{
		for (let i = 0; i < totalTodos; i++){
			this.todos[i].completed = true;
		}
		this.displayTodos();
	}
  }
	

};
 */
 
let button=()=>{
	let todo=document.querySelector('#value').value
	document.querySelector('#value').value= " ";
	let again=	document.querySelector('#value')
	let createdisplay=document.querySelector('.createdisplay').style.display="none"
	let todoList=document.querySelector('.todolist').style.display="block"
	 
	let ul=document.querySelector('.mytodos')
	let li =document.createElement('li')
	li.classname='todoitem'
	let link=document.createElement('button')
	link.innerHTML="x"
	link.className="clear"
	
	link.addEventListener('click' ,clear)
	
	li.append(document.createTextNode(todo))
	li.appendChild(link)
	ul.appendChild(li)
	document.body.style.backgroundColor="gray"
	}
	
	
	
	
let create=()=>{
	let createdisplay=document.querySelector('.createdisplay').style.display="block"
	let todoList=document.querySelector('.todolist').style.display="none"
	document.body.style.backgroundColor="black"
}

let clear=(e)=>{
	e.target.parentElement.remove();
}
empty=()=>{
		let ul=document.querySelector('.mytodos').innerHTML=" "
}
/* let ul=document.querySelector('.mytodos')
let filter=	ul.filter(item)=>{
		if (document.querySelector('#filter').value === item){
			return item
		}
	}

document.querySelector('#filter').addEventListener('onkeydown', filter)
 */











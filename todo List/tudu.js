let todoList = [];
displayItems();

function addTodo() {
  let ip = document.querySelector('#todo-input'); //find the text of the input box (ip=inputElement)
  let d = document.querySelector('#todo-date');//d=dateElement 
  let i = ip.value;//get the text entered in todo input box (i=todoitem)
  let date = d.value;//(date=tododate) take d's value
  todoList.push({item: i, dueDate: date});//push items in the todolist array we made
  ip.value = '';//after the value is pushed remove it from input box 
  d.value = '';
  displayItems();
}
function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = `
   <table class="todo-table">
      <tr>
        <th>Task</th>
        <th>Due Date</th>
        <th></th>
      </tr>`;

  for (let i = 0; i < todoList.length; i++) {
    let {item, dueDate} = todoList[i];
    newHtml += `<tr>
      <td><span>${item}</span> </td>
      <td><span>${dueDate}</span></td>
      <td><button class='btn-delete' onclick="todoList.splice(${i}, 1);
      displayItems();">Delete</button></td>
      </tr>
    `;

  }
  newHtml += `</table>`;
  containerElement.innerHTML = newHtml;//replace innerhtml by newhtml
}
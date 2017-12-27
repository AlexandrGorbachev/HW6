var todoList = [],
    todoInputCommon = {},
    todoListPositionNumber,
    outputListItem,
    keyOutput,
    newListItem,
    listOutputBlock = document.getElementById("output-item"),
    listStrings;
function addItemToList(){
    todoInputCommon.todo = document.getElementById('input-item').value;
    todoInputCommon.important = false;
    todoListPositionNumber = todoList.length;
    todoList[todoListPositionNumber] = todoInputCommon;
    for (keyOutput in todoList) {
        outputListItem = '';
        if (todoList[keyOutput].important == true) {
            outputListItem = '<input class="check-important" type="checkbox" checked>';
        } else {
            outputListItem = '<input class="check-important" type="checkbox">';
        }
        outputListItem += '<span>' + todoList[keyOutput].todo + '</span>';
    }
    newListItem = document.createElement('li');
    if (todoList[keyOutput].todo){
        newListItem.innerHTML = outputListItem;
    }
    document.getElementById('output-item').appendChild(newListItem);
    document.getElementById('input-item').value = '';
}
document.getElementById('add-item').addEventListener('click',addItemToList);
function crossingDoneItem(el) {
    if (el.target.tagName === 'SPAN'){
        el.target.classList.toggle('crossed');
    }
}
document.getElementById('output-item').addEventListener('click', crossingDoneItem);
function removeList(){
    listStrings = listOutputBlock.children;
    for (listCount = listStrings.length - 1; listCount >= 0; listCount--) {
        listOutputBlock.removeChild(listStrings[listCount]);
    }
}
document.getElementById('remove-items').addEventListener('click',removeList);

let list = [
  {
    id: 1,
    name: "Replicar el eje del profe",
    done: true,
  },
  {
    id: 1,
    name: "Replicar el eje del profe 2",
    done: true,
  },
  {
    id: 1,
    name: "Replicar el eje del profe 3",
    done: false,
  },
  {
    id: 1,
    name: "Replicar el eje del profe 4",
    done: false,
  },
];

const listContainer = document.querySelector("#list-content");

paintList(list);

function paintList(lst) {
  let res = "";
  lst.forEach((element) => {
    res += renderListItem(element);
  });
  listContainer.innerHTML = res;
}

function renderListItem(item) {
  const isDone = item.done ? "isDone" : "";
  return `<li class="list-group-item list-item ${isDone}">${item.name}</li>`;
}

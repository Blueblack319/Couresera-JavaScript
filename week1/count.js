let counter = 1;

console.log(document.getElementById("list"));
const add = () => {
  let item = document.createElement("li");
  item.className = "list__item";
  item.innerHTML = "The counter is " + counter;
  document.getElementById("list").appendChild(item);
  ++counter;
};

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const saveBtn = document.getElementById("save-btn");
const deletebtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");

let myLeads = [];

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  leads.forEach((el) => {
    listItems += `<li><a href="${el}" target="_blank">${el}</a></li>`;
  });

  ulEl.innerHTML = listItems;
}

function saveLead() {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
}

inputBtn.addEventListener("click", saveLead);

saveBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

deletebtn.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

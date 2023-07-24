document.addEventListener("DOMContentLoaded", () => {
  const hydrocarbonsList = document.getElementById("hydrocarbons-list")

  fetch("/api/hydrocarbons")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((hydrocarbon) => {
      const listItem = document.createElement("li");
      listItem.innerHTML(`<strong>${hydrocarbon.name}</strong> (${hydrocarbon.formula}) - ${hydrocarbon.description}`);
      hydrocarbonList.appendChild(listItem);
    });
  })
  .catch((error) => console.log(error));
});

const cardButtons = document.querySelectorAll(".card-button");

cardButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const checkingId = button.getAttribute("data-id");
    window.location.href = `/checking/${checkingId}`;
  });
});

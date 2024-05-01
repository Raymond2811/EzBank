const cardButtons = document.querySelectorAll(".card-button");

cardButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const checkingId = button.getAttribute("data-id");
    window.location.href = `/checking/${checkingId}`;
  });
});

const newCheckingAccount = async () => {
  try {
   const response = await fetch('/bankaccount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'EzBank Checking Account',
      balance: 0,
    })
   });

   if(response.ok){
    location.reload();
   } else{
    console.error('Failed to create new checking account');
   }
  } catch (error) {
   console.log(error);
  }
};

document.getElementById('newCheckingAccount').addEventListener('click', newCheckingAccount);

const deleteCheckingAccount = async (checkingId) => {
  try {
   const response = await fetch(`/bankaccount/${checkingId}`,{
    method:'DELETE'
   });
   if(response.ok){
    location.reload();
   } else{
    console.error('Fail to delete checking account')
   }
  } catch (error) {
   console.log(error);
  }
};

document.addEventListener('click', async (e) => {
  if(e.target.id === 'delete-button'){
    const confirmation = confirm('Are you sure you want to delete this checking account?');
    if(confirmation){
      const checkingId = e.target.dataset.id;
      deleteCheckingAccount(checkingId);
    }
  }  
});
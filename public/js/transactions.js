const handleTransactionFormSubmit = async (e) => {
  e.preventDefault();

  const price = -1 * parseFloat(document.getElementById('price').value);
  const description = document.getElementById('description').value;

  console.log('Form data:', {price, description});
  
  try {
    const response = await fetch('/transactions',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        price,
        description
      })
    });

    if(response.ok){
      console.log('Transaction successful');
      updateAccountData();
    }else{
      console.error('Failed to make transaction');
    }
  } catch (error) {
   console.log('Error ',error);
  }
};


document.getElementById('transactionForm').addEventListener('submit', handleTransactionFormSubmit);

const updateAccountData= async() => {
  try{
    const response = await fetch('/accountData');
    if(response.ok) {
      const accountData = await response.json();
      document.querySelector('.account-overview p').textContent = `Balance: $${accountData.balance}`;
    } else{
      console.error('Failed to fetch updated account overview data');
    }
  } catch(error) {
    console.log('Error fetching account data:', error);
  }
};
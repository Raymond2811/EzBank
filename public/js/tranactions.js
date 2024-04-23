document.getElementById('transactionForm').addEventListener('submit', handleTransactionFormSubmit);

const handleTransactionFormSubmit = async (e) => {
  e.preventDefault();

  const price = document.getElementById('price').value;
  const description = document.getElementById('description').value;

  try {
    const response = await fetch('/transactions',{
      method:'POST',
      headers: {
        'Content-Type': 'apliication/json'
      },
      body: JSON.stringify({
        price,
        description
      })
    });

    if(response.ok){
      console.log('Transaction succesful');
    }else{
      console.error('Failed to make transaction');
    }
  } catch (error) {
   console.log('Error ',error);
  }
};
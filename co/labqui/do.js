const gasErrorElement = document.getElementById('gas-error');

const showGasError = () => {
  gasErrorElement.textContent = 'Insufficient gas to send transaction. Please top up your MetaMask account.';
  gasErrorElement.style.display = 'block';
};

// And when you need to hide it:
const hideGasError = () => {
  gasErrorElement.style.display = 'none';
};

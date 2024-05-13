// Assuming 'calculateGas' is a function that calculates the gas used
const calculateGas = async () => {
  // Simulate gas usage calculation
  const gasUsed = Math.floor(Math.random() * 1000); // Replace with actual gas calculation
  return gasUsed;
};

const myFunction = async () => {
  // Do something that uses gas
  // ...

  const gasUsed = await calculateGas();
  console.log(`Gas used: ${gasUsed}`);
};

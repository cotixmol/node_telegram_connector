import app from './app.js';  // Ensure path is correct based on your project structure

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

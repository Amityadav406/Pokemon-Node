import { connectDB } from './config/db';
import app from './app';

const PORT =  9000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import { app } from './app.js'
import { connectDB } from './utils/database.js'

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on PORT ${process.env.PORT} in ${process.env.Node_env} Mode`);
});

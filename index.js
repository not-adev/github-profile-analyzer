import { sequelize } from './src/configs/db.js'
import express from 'express'
const app = express();
app.use(express.json());


const port = 3000;

async function startServer() {
    try {
        await sequelize.authenticate();

        console.log(
            "Database Connected"
        );

        await sequelize.sync();

        console.log(
            "Tables Created Successfully"
        );

        app.listen(port, () => {
            console.log(
                `Server running on ${port}`
            );
        });
    } catch (error) {
        console.error(error);
    }
}

startServer();
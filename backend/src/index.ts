import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(cors());

app.listen(PORT, () => {
	console.log(`Hardsho app running on server host: ${PORT}`);
});

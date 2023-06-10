require('dotenv').config();
import expres from 'express';

const port = process.env.PORT;

const app = expres();

app.listen(port, () => {
    console.log(`Server ready on port ${port}`);
});
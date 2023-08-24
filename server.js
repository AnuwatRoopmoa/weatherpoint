import { app } from './app.js';

const port = process.env.PORT || 3306;

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});

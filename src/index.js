const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        app: 'vehicle-diagnostics-hub-vue3-ts-v50',
        category: 'Remote Fleet Vehicle Diagnostics',
        tech: 'TypeScript / Vue 3 & Pinia',
        status: 'active'
    });
});

app.listen(PORT, () => {
    console.log(`[vehicle-diagnostics-hub-vue3-ts-v50] Express engine listening on port ${PORT}`);
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("reflect-metadata");
const app_1 = require("./app");
const typeorm_1 = require("../typeorm");
const PORT = process.env.PORT;
typeorm_1.dataSource.initialize().then(() => {
    app_1.app.listen(PORT, () => {
        console.log(`Server started on port http://localhost:${PORT}`);
    });
}).catch(() => {
    console.log("Error connection status");
});
//# sourceMappingURL=server.js.map
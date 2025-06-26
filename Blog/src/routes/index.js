const newsRouter = require("./news");
const homeRouter = require("./home");
const searchRouter = require("./search");

function router(app) {
    app.use("/news", newsRouter);
    app.use("/search", searchRouter);

    app.use("/", homeRouter);
}

module.exports = router;

var req = require(process.cwd() + '/require-from-app-root').req;
var homeController = req('app/controllers/home-controller');

module.exports = function homeRoutes(app) {
    app.get('/', homeController.hello);
    app.get('/user', homeController.getUser);
};

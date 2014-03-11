var homeController = require('../controllers/home-controller');

module.exports = function homeRoutes(app) {
    app.get('/', homeController.hello);
    app.get('/user', homeController.getUser);
};
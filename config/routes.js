const env = require('./env');
const ExpressCommonControllerRouter = require('express-common-controller').default;

const router = new ExpressCommonControllerRouter(env.controllerPath);

router.get('/diagnostic', 'DiagnosticController#index');
router.get('/diagnostic/version', 'DiagnosticController#version');

router.get('/', 'DemoController#index');

router.get('/hello', 'HelloController#index');

router.all('*', 'NotFoundController#index');

module.exports = router.routes();

// const {AppConfig,AppInitRedisHandler,AppInitMysqlHandler} = require('dragonli-node-general-service-core');
// const EvnServerConfig = require('../appconfighandlers/EvnServerConfig');
// const AppInitInvokerServiceHandler = require('../servicesupport/AppInitInvokerServiceHandler');
// const AppInitRegistServiceHandler = require('../moduleservices/AppInitRegistServiceHandler');
// const AuthService = require('../moduleservices/AuthService');
// const DbService = require('../moduleservices/DbService');
// const OtherService = require('../moduleservices/OtherService');
// const WebSocketService = require('../moduleservices/WebSocketService');
// const ZookeeperService = require('../moduleservices/ZookeeperService');
// const AuthReadFilter = require('../filters/AuthReadFilter');
// const RoleFilter = require('../filters/RoleFilter');
// const AuthWriteFilter = require('../filters/AuthWriteHandler');
// const GeneralErrorAdvice = require('../advices/GeneralErrorAdvice');
// const GeneralResultFormatAdvice = require('../advices/GeneralResultFormatAdvice');

const {AppConfig,AppInitRegistServiceHandler} = require('dragonli-node-with-java-service-core');
const AuthReadByUserServiceFilter = require('../filters/AuthReadByUserServiceFilter');
const UserService = require('../moduleservices/UserService');

module.exports = class extends AppConfig {
    constructor(){
        super();
        this.removeHandlers('authReader');
        this.addAppInitHandlers([
            new AppInitRegistServiceHandler('userService' ,'InvokeService',UserService),
        ]);


        this.addControllerFilterHandlers([
            new AuthReadByUserServiceFilter('authReader','userService'),
        ]);


        this.addControllerIocKeys(['userService']);
    }
}
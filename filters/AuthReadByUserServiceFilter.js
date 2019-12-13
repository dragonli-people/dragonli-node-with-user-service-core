function createSetUser(userService,context){
    return async function (user) {
        // user && codeFilter && console.log('codeFilter',codeFilter(user));
        context.user = this.user = user;
        context.auth = this.auth = user ?  await userService.authGenerate(user.id || 0) : null;
    }
}


class  AuthReadByUserServiceFilter{

    constructor(handlerKey,userServiceVarName){
        this.HANDLER_KEY = handlerKey;
        this.userServiceVarName = userServiceVarName;
    }

    async doFilter (controller,context,controllerIocKeys, request, response, config, app) {
        var userService = this.userServiceVarName && controller[this.userServiceVarName] || null;
        if(!userService)throw new Error('authService cant be null');
        var user = null,auth = request.cookies.auth ? JSON.parse(request.cookies.auth) : null;
        auth = await userService.authValidateAndRefresh(auth,true,true);
        user = auth.uid ? await userService.getUserById(auth.uid) : null;
        context.auth = controller.auth = auth;
        context.user = controller.user = user;
        controller.getUser = ()=>context.user;
        controller.setUser = createSetUser(userService,context);
        controllerIocKeys.push('getUser','setUser','user','auth');
        return true;
    }
}

module.exports = AuthReadByUserServiceFilter;

module.exports = {
    defaultInterfaceName: 'org.dragonli.service.modules.user.interfaces.UserService',
    registUser: (username,password)=>({parasType:['string','string'],resultType:'object'}),
    registUser: (username,password,recommendCode,countryId,email,phone,nickname,passwdCode,expendsParas)=>
        ({parasType:['string','string','string','long','string','string','string','string','object'],resultType:'object'}),
    login: (username,encryptedPasswd)=>({parasType:['string','string'],resultType:'object'}),
    loginByCode: (username,encryptedPasswd)=>({parasType:['string','string'],resultType:'object'}),
    getUserById: (id)=>({parasType:['long'],resultType:'object'}),
    getUserList: (idList)=>({parasType:['array<long>'],resultType:'array<object>'}),
    findUser: (id)=>({parasType:['long'],resultType:'object'}),
    resetPasswdById: (id,code)=>({parasType:['long','string'],resultType:'object'}),
    resetPasswdById: (key,code)=>({parasType:['string','string'],resultType:'object'}),
    changePassword: (id,password,newpw,passwdCode,dontValicodeOld)=>
        ({parasType:['long','string','string','string','boolean'],resultType:'object'}),
    changeEmail: (id,code,newEmail,setEmailValidated)=>
        ({parasType:['long','string','string','boolean'],resultType:'object'}),
    changePhone: (id,code,newPhone,setPhoneValidated)=>
        ({parasType:['long','string','string','boolean'],resultType:'object'}),
    generateValidateCodeByUserId: (id)=>({parasType:['long'],resultType:'object'}),
    generateValidateCodeByUserId: (key)=>({parasType:['string'],resultType:'object'}),
    generateEmailCodeById: (uid,newEmail)=>({parasType:['string','string'],resultType:'object'}),
    generatePhoneCodeById: (uid,phone)=>({parasType:['string','string'],resultType:'object'}),

    generateLoginCode: (key)=>({parasType:['string'],resultType:'object'}),
    allCountries: ()=>({parasType:[],resultType:'array<object>'}),

    findCountryById: (id)=>({parasType:['long'],resultType:'object'}),

    authValidateAndRefresh: (authDto,refreshTime,autoGenerate)=>({parasType:['object','boolean','boolean'],resultType:'object'}),
    authValidateAndRefresh: (authDto,refreshTime,autoGenerate,privateKey,timeout)=>
        ({parasType:['object','boolean','boolean','string','long'],resultType:'object'}),
    authGenerate: (uid)=>({parasType:['long'],resultType:'object'}),
}


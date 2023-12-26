export const postEndpoint = 'users'

const LoginInputConfig = [
    {label:'Email',placeholder:'Email/Username',inputcss:'standard',formik:true,type:'text'},
    {label:'Password',placeholder:'Password',inputcss:'standard',formik:true,type:'password'},
]

const LoginButtonConfig = [
    {name:'submitButton',label:'Login',type:'submit',buttoncss:'PrimaryLogin'}
]

export {LoginInputConfig,LoginButtonConfig}
export const postEndpoint = 'User'

const RegisterInputConfig = [
    { label: 'name', placeholder: 'First Name', inputcss: 'standard', formik: true, type: 'text' },
    { label: 'lastName', placeholder: 'Last Name', inputcss: 'standard', formik: true, type: 'text' },
    { label: 'email', placeholder: 'Email', inputcss: 'standard', formik: true, type: 'email' },
    { label: 'password', placeholder: 'Password', inputcss: 'standard', formik: true, type: 'password' },
    { label: 'confirmPassword', placeholder: 'Confirm Password', inputcss: 'standard', formik: true, type: 'password' }
  ];
  
  const RegisterButtonConfig = [
    { name: 'submitButton', label: 'Register', type: 'submit', buttoncss: 'PrimaryRegister' }
  ];
  
  const CheckboxConfig = [
    { label: 'Ive Read and accept the Terms of Service', value: false, css: 'standard' },
    { label: 'Subscribe to the newsletter to stay up to date', value: false, css: 'standard' }
  ];
  
  export { RegisterInputConfig, RegisterButtonConfig, CheckboxConfig };
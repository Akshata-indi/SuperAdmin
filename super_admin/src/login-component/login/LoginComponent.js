import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import { postApiUrl } from '../../services/PostApi/PostApi';
import Input from '../dynamicInput/Input';
import Login2Styles from './LoginStyle';
import Button from '../../ui-configs/Buttons/Button';
import { LoginButtonConfig, LoginInputConfig } from './LoginConfig'
import { useFormik } from 'formik';
import { postEndpoint } from './LoginConfig'
import { postApi } from '../../services/ServiceApi'

const LoginComponent = () => {
    const validationSchema = Yup.object(
        Object.fromEntries(
            LoginInputConfig.map((input) => [input.label, Yup.string().required(`${input.label} is required`)])
        )
    );

    const formik = useFormik({
        initialValues: Object.fromEntries(LoginInputConfig.map((input) => [input.label, ''])),
        validationSchema,
        onSubmit: async (values) => {

            postApi(postEndpoint, values)
                .then((result) => {
                    console.log('POST request result:', result);
                    if (result.success) {
                        if (result.message === 'User is already logged in') {
                            alert('User is already logged in.');
                        } else {
                            alert('Login successful.');

                            // Reset the form
                            formik.resetForm();

                            window.location.href = '/next-page';
                        }
                    } else {
                        // Display an error message if login is unsuccessful
                        alert('Invalid credentials. Please try again.');
                    }
                })
                .catch((error) => {
                    console.error('Error in POST request:', error);
                    alert('Failed to save user data. Please try again.');
                });

            // try {
            //     const response = await axios.post(postApiUrl(USERS_API), values);

            //     if (response) {
            //         console.log('User data saved successfully.');
            //         alert('User data saved successfully.');
            //         resetForm();
            //     }
            // } catch (error) {
            //     console.error('Error:', error);
            // }
        },
    });
    return (
        <>
            <div>
                <div className={Login2Styles.Login2Form}>
                    <div className="mx-auto mt-2 p-10 bg-white rounded-xl flex flex-col">
                        <h1 className={Login2Styles.Header}>Log in</h1>
                        <p className={Login2Styles.Paragraph}>
                            Welcome to the Infokalash, please enter your login credentials
                        </p>
                        <p className={Login2Styles.Paragraph2}>below to start using the application</p>
                        <form onSubmit={formik.handleSubmit}>
                            <Input config={LoginInputConfig} formik={formik} />
                            <div className={Login2Styles.ForgotPassword}>
                                <Link to="/" className={Login2Styles.Link}>
                                    Forgot Password?
                                </Link>
                            </div>
                            <div className={Login2Styles.Line}></div>
                            <div className={Login2Styles.Remember}>
                                <div className="flex items-center">
                                    <input type="checkbox" id="rememberMe" className="mr-2" />
                                    <label htmlFor="rememberMe" className={Login2Styles.CheckboxLabel}>
                                        Remember Me
                                    </label>
                                    <Button configs={LoginButtonConfig} />
                                </div>
                            </div>
                            <div className="text-center">
                                <p className={Login2Styles.Paragraph3}>
                                    Don't have an account?{' '}
                                    <Link to="/register" className={Login2Styles.LinkBlue}>
                                        Create Account
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginComponent
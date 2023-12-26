import React from 'react';
import * as Yup from 'yup';
import axios from 'axios';
// import { postApiUrl } from '../../services/PostApi/PostApi';
import Input from '../dynamicInput/Input';
import Checkbox from '../../ui-configs/checkbox/Checkbox';
import { Link } from 'react-router-dom';
import Button from '../../ui-configs/Buttons/Button'
import { RegisterButtonConfig, CheckboxConfig } from './RegisterConfig';
import { useFormik } from 'formik';
import { postEndpoint } from './RegisterConfig'
import { postApi } from '../../services/ServiceApi'

const RegisterComponent = ({ config }) => {
  const validationSchema = Yup.object(
    Object.fromEntries(
      config.map((input) => [input.label, Yup.string().required(`${input.label} is required`)])
    )
  );

  const formik = useFormik({
    initialValues: Object.fromEntries(config.map((input) => [input.label, ''])),
    validationSchema,

    onSubmit: async (values) => {

      postApi(postEndpoint, values)
      .then((result) => {
       console.log('POST request result:', result);
      })
      .catch((error) => {
        console.error('Error in POST request:', error);
      });

      // try {
      //   const response = await axios.post("http://localhost:3003/users", values);
      //   console.log("hhhhhhhhh")

      //   if (response) {
      //     console.log('User data saved successfully.');
      //     alert('User data saved successfully.');
      //     formik.resetForm();
      //   }
      // } catch (error) {
      //   console.error('Error:', error);
      // }
    },
  });

  return (
    <>
      <div className="mx-auto sm:p-8 md:p-2 bg-white flex flex-col">
        <h1 className="text-2xl font-bold text-gray-00 p-0">Create Account</h1>

        <p className="mt-4 mb-4 text-gray-500 font-sans text-xs font-semibold">
          Welcome to Infokalash, please enter the details below
        </p>

        <form className="w-full" onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 text-xs">
            <div className="relative">

              <Input config={config} formik={formik} />

              <Checkbox CheckboxConfig={CheckboxConfig} />

              <Button configs={RegisterButtonConfig} />



              <div className="text-center">
                <p className="mt-8 text-gray-600 font-sans text-xs font-semibold mx-auto">
                  Already have an account?{' '}
                  <Link to="/" className="text-blue-600 hover:underline">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterComponent;
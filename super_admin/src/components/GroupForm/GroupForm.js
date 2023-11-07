// src/Form.js
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const GroupForm = () => {
  const initialValues = {
    name: '',
    email: '',
  };

  const onSubmit = (values) => {
    console.log('Form data submitted:', values);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Formik Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-200"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-200"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          <button
            type="submit"
            className="bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default GroupForm;

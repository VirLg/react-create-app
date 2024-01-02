import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormBTN, FormDiv } from './HeroForm.styled';

const HeroForm = ({ valueForm }) => {
  return (
    <FormDiv>
      <Formik
        initialValues={{ placeOfDelivery: '', date: '', returnPoint: '' }}
        validationSchema={Yup.object({
          placeOfDelivery: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          date: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          returnPoint: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        })}
        onSubmit={values => valueForm(values)}
      >
        <Form className="hero_form">
          <label htmlFor="placeOfDelivery">Place Of Delivery</label>
          <Field className="field" name="placeOfDelivery" type="text" />
          <ErrorMessage name="placeOfDelivery" />

          <label htmlFor="date">Date</label>
          <Field className="field" name="date" type="text" />
          <ErrorMessage name="date" />

          <label htmlFor="returnPoint">Return Point</label>
          <Field className="field" name="returnPoint" type="textt" />
          <ErrorMessage name="returnPoint" />

          <FormBTN type="submit" className="formBTN">
            Submit
          </FormBTN>
        </Form>
      </Formik>
    </FormDiv>
  );
};

export default HeroForm;

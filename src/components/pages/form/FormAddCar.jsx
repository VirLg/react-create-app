import { useAddCarMutation } from '../../../components/redux/rtkQuery/cars';
import React from 'react';

import * as Yup from 'yup';
import { AddButton, AddCarDiv } from './FormAddCar.styled';
import { ErrorMessage, Field, Formik } from 'formik/dist';
import { Form } from 'react-router-dom';

const FormAddCar = () => {
  const [addCar] = useAddCarMutation();

  useAddCarMutation();
  const valueForm = data => {
    console.log('data', data);
    addCar(data);
  };
  return (
    <AddCarDiv className="container">
      <Formik
        initialValues={{ firstName: '', lastName: '', mileage: '' }}
        validationSchema={Yup.object({
          year: Yup.string()
            .max(4, 'Must be 4 characters or less')
            .required('Required'),
          make: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          model: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          type: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          img: Yup.string().required('Required'),
          description: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          fuelConsumption: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          engineSize: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          accessories: Yup.string().required('Required'),
          functionalities: Yup.string().required('Required'),
          rentalPrice: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),

          rentalCompany: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          address: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          rentalConditions: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          minimumAge: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          mileage: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        })}
        onSubmit={values => valueForm(values)}
      >
        <Form style={{ display: 'flex', flexDirection: 'column' }}>
          <label
            htmlFor="year"
            className="searchPlaceholderFont"
            style={{ marginLeft: '22px', paddingTop: '10px' }}
          >
            Year
          </label>
          <Field className="addInput" name="year" type="text" />
          <ErrorMessage name="year" />

          <label
            htmlFor="make"
            className="searchPlaceholderFont"
            style={{ marginLeft: '22px', paddingTop: '10px' }}
          >
            Make
          </label>
          <Field className="addInput" name="make" type="text" />
          <ErrorMessage name="make" />

          <label
            htmlFor="model"
            className="searchPlaceholderFont"
            style={{ marginLeft: '22px', paddingTop: '10px' }}
          >
            Model
          </label>
          <Field className="addInput" name="model" type="text" />
          <ErrorMessage name="model" />

          <label
            htmlFor="type"
            className="searchPlaceholderFont"
            style={{ marginLeft: '22px', paddingTop: '10px' }}
          >
            Type
          </label>
          <Field className="addInput" name="type" type="text" />
          <ErrorMessage name="type" />

          <label
            htmlFor="img"
            className="searchPlaceholderFont"
            style={{ marginLeft: '22px', paddingTop: '10px' }}
          >
            Image
          </label>
          <Field className="addInput" name="img" type="text" />
          <ErrorMessage name="img" />

          <label
            htmlFor="description"
            className="searchPlaceholderFont"
            style={{ marginLeft: '22px', paddingTop: '10px' }}
          >
            Description
          </label>
          <Field className="addInput" name="description" type="text" />
          <ErrorMessage name="description" />

          <label
            htmlFor="fuelConsumption"
            className="searchPlaceholderFont"
            style={{ marginLeft: '22px', paddingTop: '10px' }}
          >
            fuel Consumption
          </label>
          <Field className="addInput" name="fuelConsumption" type="text" />
          <ErrorMessage name="fuelConsumption" />

          <label
            htmlFor="engineSize"
            className="searchPlaceholderFont"
            style={{ marginLeft: '22px', paddingTop: '10px' }}
          >
            engine Size
          </label>
          <Field className="addInput" name="engineSize" type="text" />
          <ErrorMessage name="engineSize" />

          <label
            htmlFor="accessories"
            className="searchPlaceholderFont"
            style={{ marginLeft: '22px', paddingTop: '10px' }}
          >
            Accessories
          </label>
          <Field className="addInput" name="accessories" type="text" />
          <ErrorMessage name="accessories" />

          <label
            htmlFor="functionalities"
            className="searchPlaceholderFont"
            style={{ marginLeft: '22px', paddingTop: '10px' }}
          >
            Functionalities
          </label>
          <Field className="addInput" name="functionalities" type="text" />
          <ErrorMessage name="functionalities" />

          <label
            htmlFor="rentalPrice"
            className="searchPlaceholderFont"
            style={{ marginLeft: '22px', paddingTop: '10px' }}
          >
            rentalPrice
          </label>
          <Field className="addInput" name="rentalPrice" type="text" />
          <ErrorMessage name="rentalPrice" />

          <label
            htmlFor="rentalCompany"
            className="searchPlaceholderFont"
            style={{ marginLeft: '22px', paddingTop: '10px' }}
          >
            rentalCompany
          </label>
          <Field className="addInput" name="rentalCompany" type="text" />
          <ErrorMessage name="rentalCompany" />

          <label
            htmlFor="address"
            className="searchPlaceholderFont"
            style={{ marginLeft: '22px', paddingTop: '10px' }}
          >
            address
          </label>
          <Field className="addInput" name="address" type="text" />
          <ErrorMessage name="address" />

          <label
            htmlFor="rentalConditions"
            className="searchPlaceholderFont"
            style={{ marginLeft: '22px', paddingTop: '10px' }}
          >
            rentalConditions
          </label>
          <Field className="addInput" name="rentalConditions" type="text" />
          <ErrorMessage name="rentalConditions" />

          <label
            htmlFor="minimumAge"
            className="searchPlaceholderFont"
            style={{ marginLeft: '22px', paddingTop: '10px' }}
          >
            Minimum Age
          </label>
          <Field className="addInput" name="minimumAge" type="text" />
          <ErrorMessage name="minimumAge" />

          <label
            htmlFor="mileage"
            className="searchPlaceholderFont"
            style={{ marginLeft: '22px', paddingTop: '10px' }}
          >
            Mileage
          </label>
          <Field className="addInput" name="mileage" type="text" />
          <ErrorMessage name="mileage" />

          <AddButton type="submit">Submit</AddButton>
        </Form>
      </Formik>
    </AddCarDiv>
  );
};

export default FormAddCar;

import React from 'react';
//models
import {User} from '../../../models/user.class.js'
import {ROLES} from '../../../models/roles.enum.js'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username:'',
        email:'',
        password:'',
        confirm: '',
        role: ROLES.USER
    }



    const registerSchema = Yup.object().shape(
        {
            username:Yup.string()
                .min(6,'Username too short')
                .max(12,'Username too long')
                .required('Username is required'),

            email: Yup.string()
                .email("Email format is invalid")
                .required("Email is required"),
            role: Yup.string()
            .oneOf([ROLES.USER,ROLES.ADMIN],'You must select a role:user/admin')
            .required('Role is required'),
            password: Yup.string()
                .min(8,'Password too short')
                .required("Password is required"),
            confirm:Yup.string()
                .when('password' ,{
                    is: value => value && value.length > 0 ? true : false,
                    then:Yup.string().oneOf(
                        [Yup.ref('password')],
                        'Passwords must match!'
                        )
                }).required('You must confirm the password')
           
        }
    )

    const submit  = (values) =>{
        alert('Register user')
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
             // on submit event
            onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          //we save the data in the local storage
        //   localStorage.setItem("credential", values);
        }}
        >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
            <Form>
            <label htmlFor="email">Username</label>
            <Field  id="username" type="text" name="username" placeholder="Your username"/>
             {/*USERNAME errors */}
             {errors.username && touched.username && (
              <ErrorMessage name="username" component="div"></ErrorMessage>
              )}


            <label htmlFor="email">Email</label>
            <Field id="email" type="email" name="email" placeholder="example@email.com" />
             {/*Email errors */}
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div"></ErrorMessage>
            )}

            <label htmlFor="password">Password</label>
            <Field id="password" name="password" placeholder="password" type="password"
            />
            {/*Password errors */}
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div"></ErrorMessage>
            )}

            <label htmlFor="confirm">Confirm Password</label>
            <Field id="confirm" name="confirm" placeholder="confirm password" type="password"
            />
            {/*Confirm password errors */}
            {errors.confirm && touched.confirm && (
              <ErrorMessage name="confirm" component="div"></ErrorMessage>
            )}
  

             <button type="submit">Register Account</button>
            {isSubmitting ? <p>Sending you credentials...</p> : null}


           



            </Form>
        )}

            </Formik>
        </div>
    );
};

export default RegisterFormik;
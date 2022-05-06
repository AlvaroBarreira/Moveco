import React from 'react';
import './FormContact.css';
import { useFormik } from "formik";
import { FormContactSchema } from './FormContact.schema';
import Error from '../Error/Error';

const FormContact = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            username: "",
            description: ""
        },

        validationSchema: FormContactSchema,

        onSubmit: () => {
            
        }
    })

  return (
    <form
        noValidate
        onSubmit={formik.handleSubmit} 
        className="form-container">
        <div className="form-aside"></div>
        <div className="form">
            <div className="form-title-container">
                <h2>¡Contactanos!</h2>
            </div>
            <div className="form-inputs-container">
                <div className="form-input-container">
                    <input 
                        name="username"
                        id="username"
                        type="text" 
                        placeholder="Ingrese su nombre"
                        value={formik.values.username}
                        style={{ border: formik.errors.username && '1.2px solid #fa4141' }}
                        onChange={formik.handleChange} />
                </div>
                {formik.errors.username && <Error message={formik.errors.username} />}
                <div className="form-input-container">
                    <input 
                        name="email"
                        id="email"
                        type="text" 
                        placeholder="Ingrese su email"
                        value={formik.values.email}
                        style={{ border: formik.errors.email && '1.2px solid #fa4141' }}
                        onChange={formik.handleChange} />
                </div>
                {formik.errors.email && <Error message={formik.errors.email}/>}
                <div className="form-textarea-container">
                <textarea
                    name="description"
                    id="description"
                    value={formik.values.description}
                    style={{ border: formik.errors.description && '1.2px solid #fa4141' }}
                    onChange={formik.handleChange} />
                </div>
                {formik.errors.description && <Error message={formik.errors.description} />}
                <div className="form-button-container">
                    <button type="submit">
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    </form>
  )
}

export default FormContact
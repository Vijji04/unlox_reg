import { Button, Form, Container, Col, Row } from "react-bootstrap"
import Styles from '../styles/pages/Register.module.scss'
import { Formik } from "formik";
import * as yup from "yup";




const validationSchema = yup.object().shape({
    name: yup.string().required("Required"),
    phone: yup.number().positive().required("Required"),
    email: yup.string().email("Invalid email format").required("Required"),
    service: yup.string().required("Required")
});


const formInitialValues = {
    name: "",
    phone: "",
    email: "",
    service: "",
};


const registerAsProfessional = () => {

    const OnSubmitValues = (values) => {
      axios
        .post(
          "https://v1.nocodeapi.com/vijayendradev/google_sheets/HqRpYqYqobCnxAQm",
          values
        )
        .then(() => {
          console.log("Success");
        });
    };


    return (
       
        

        <Container fluid className={Styles.registerProfessionalContainer}>
            <div className={Styles.registerProfessionalWrapper}>

                <Formik
                    initialValues={formInitialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                        OnSubmitValues(values);
                        
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => {
                        return (
                            <Form onSubmit={handleSubmit} className={Styles.registerFormSec}>
                                <h3 className={Styles.formTitle}>Please provide your details</h3>
                                <Row>
                                    <Form.Group as={Col} className={Styles.formGroup}>
                                        <Form.Label className={Styles.label}>Name</Form.Label>
                                        <Form.Control name="name" className={Styles.formInput} placeholder="Your name"  onChange={handleChange} onBlur={handleBlur} isInvalid={errors.name} />
                                        <Form.Control.Feedback className="pl-2" type="invalid">
                                            {errors.name}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} className={Styles.formGroup}>
                                        <Form.Label className={Styles.label}>What do you do ?</Form.Label>
                                        <Form.Control name="service" as="select" className={Styles.formInput} onChange={handleChange} onBlur={handleBlur} isInvalid={errors.service} >
                                            <option value={null} default>-- select --</option>
                                            <option>student</option>
                                            <option>professional</option>
                                            <option>Others</option>
                                        </Form.Control>
                                        <Form.Control.Feedback className="pl-2" type="invalid">
                                            {errors.service}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} className={Styles.formGroup}>
                                        <Form.Label className={Styles.label}>Phone Number</Form.Label>
                                        <Form.Control name="phone" className={Styles.formInput} placeholder="Your mobile number goes here" onChange={handleChange} onBlur={handleBlur} isInvalid={errors.phone} />
                                        <Form.Control.Feedback className="pl-2" type="invalid">
                                            {errors.phone}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Form.Group className={Styles.formGroup}>
                                    <Form.Label className={Styles.label}>Email Address</Form.Label>
                                    <Form.Control name="email" className={Styles.formInput} placeholder="Your email ID please" onChange={handleChange} onBlur={handleBlur} isInvalid={errors.email} />
                                    <Form.Control.Feedback className="pl-2" type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className={Styles.formGroup}>
                                    <Button type="submit" className={Styles.submitButton}>Get in touch</Button>
                                </Form.Group>
                            </Form>
                        )
                    }}
                </Formik>

            </div>
        </Container>
        
    )
}

export default registerAsProfessional

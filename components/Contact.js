import { useContext, useState } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import hedgeGif from "./Assets/Maingif.gif";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AppContext } from "../pages";

export const Contact = () => {
  const { grecaptchaKeyId, token, setToken, loading, setLoading } =
    useContext(AppContext);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            Authorization: token,
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();
        if (response.status !== 200) throw data;

        formik.resetForm();
      } catch (error) {
        console.error("An error occurred: ", error);
        formik.setErrors(error);
      } finally {
        try {
          const newToken = await grecaptcha.enterprise.execute(
            grecaptchaKeyId,
            { action: "login" }
          );
          setToken(newToken);
        } catch (error) {
          console.log(error);
          // createToast({ id: toasts.length, variant: "error", message: "Captcha failed to load. Please refresh and try again." });
        }

        setLoading(false);
      }
    },
  });

  const [buttonText] = useState("Send");

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <Image
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={hedgeGif}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>

                  <form onSubmit={formik.handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formik.values.firstName}
                          placeholder="First Name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />{" "}
                        {formik.touched.firstName && formik.errors.firstName ? (
                          <div>{formik.errors.firstName}</div>
                        ) : null}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={formik.values.lastName}
                          placeholder="Last Name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />{" "}
                        {formik.touched.lastName && formik.errors.lastName ? (
                          <div>{formik.errors.lastName}</div>
                        ) : null}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formik.values.email}
                          placeholder="Email Address"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div>{formik.errors.email}</div>
                        ) : null}
                      </Col>

                      <Col size={12} className="px-1">
                        <textarea
                          id="message"
                          name="message"
                          rows="6"
                          value={formik.values.message}
                          type="text"
                          placeholder="Message"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        ></textarea>
                        <button type="submit" disabled={loading}>
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

"use client";
import React, { useContext } from "react";
import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AppContext } from "../Context/AppContext";

export const ContactUsFrom = () => {
  const { apiUrl } = useContext(AppContext);
  console.log(apiUrl);

  // state
  const [errorMessage, setErrorMessage] = useState(null);
  const [submiteMessage, setSubmiteMessage] = useState("");

  // use fromik method
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(
          `${apiUrl}/api/admin/message/submited`,
          values
        );
        if (response.data.Status) {
          setErrorMessage(null);
          setSubmiteMessage("free consultation requset successfull");
        }
      } catch (error) {
        setErrorMessage(`${error}`);
        setSubmiteMessage("");
      }

      resetForm();
    },
  });
  return (
    <>
      <div className="contactUsCenterGradientRoundedPosition">
        <div className="gradientRoundedDiv"></div>
      </div>

      <div className="contactus_input_section">
        <h3 className="text-center">Book a Free Consultation</h3>
        {errorMessage && errorMessage ? (
          <p className="error-message">{errorMessage}</p>
        ) : (
          <p className="success-message">{submiteMessage}</p>
        )}
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            placeholder="Full Name *"
            className="contactus_input_fild"
          />
          <PhoneInput
            country={"us"}
            value={formik.values.phoneNumber}
            onChange={(phone) => formik.setFieldValue("phoneNumber", phone)}
            enableSearch={true}
            inputProps={{
              name: "phoneNumber",
              required: true,
              autoFocus: false,
            }}
            className="contactus_input_fild"
          />
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
            placeholder="Work Email *"
            className="contactus_input_fild"
          />
          <input
            type="text"
            id="emailSubject"
            name="subject"
            onChange={formik.handleChange}
            value={formik.values.subject}
            required
            placeholder="Subject"
            className="contactus_input_fild"
          />
          <textarea
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            required
            placeholder="Message"
          />
          <button type="submit" className="meassageSentbtn">
            <span className="pt-1">Submit</span>
            <img
              src="/Images/ContactUsPage/meassageSent.svg"
              alt="Submit Icon"
            />
          </button>

          {/* <input type="submit" value="Submit " /> */}
        </form>
      </div>
    </>
  );
};

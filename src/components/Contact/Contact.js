import React, { useState, useRef } from "react";
import * as S from "./Contact.styles";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [contactDates, setContactDates] = useState({
    name: "",
    email: "",
    message: "",
    checkedTerms: false,
  });
  const [emptyInputs, setEmptyInputs] = useState(false);
  const [successSendForm, setSuccessSendForm] = useState(false);
  const [errorSendForm, setErrorSendForm] = useState(false);
  const [errorDetails, setErrorDetails] = useState("");

  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    
    if (
      contactDates.name === "" ||
      contactDates.email === "" ||
      contactDates.message === "" ||
      contactDates.checkedTerms === false
    ) {
      setEmptyInputs(true);
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_USER_ID
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result); 
            setSuccessSendForm(true);
            setErrorSendForm(false);
            setErrorDetails(""); 
          },
          (error) => {
            console.error("Log ERROR", error); 
            setErrorSendForm(true);
            setSuccessSendForm(false); 
            setErrorDetails(`Error code: ${error.status} - ${error.text}`); 
          }
        );
    }
  };

  return (
    <S.ContainerContact id="contact">
      <S.Title>👋🏽 Contact with me</S.Title>
      <S.ContainerForm>
        {successSendForm ? (
          <S.SucessMessage>The form was sent succesfully</S.SucessMessage>
        ) : (
          <S.Form onSubmit={onSubmit} ref={form}>
            <S.InputForm
              placeholder="Your name"
              type="text"
              name="name"
              onChange={(e) =>
                setContactDates({ ...contactDates, name: e.target.value })
              }
              value={contactDates.name}
            />
            <S.InputForm
              placeholder="Your email"
              type="email"
              name="email"
              onChange={(e) =>
                setContactDates({ ...contactDates, email: e.target.value })
              }
              value={contactDates.email}
            />
            <S.TextArea
              placeholder="Write your message"
              name="message"
              onChange={(e) =>
                setContactDates({ ...contactDates, message: e.target.value })
              }
              value={contactDates.message}
            />
            <S.ContainerConditions>
              <input
                type="checkbox"
                onChange={(e) =>
                  setContactDates({
                    ...contactDates,
                    checkedTerms: e.target.checked,
                  })
                }
              />
              <span>Accept the terms and conditions</span>
            </S.ContainerConditions>
            <S.Button type="submit">Send</S.Button>
          </S.Form>
        )}
        {emptyInputs && (
          <p>You should fill all the inputs and accept the terms</p>
        )}
        {errorSendForm && (
          <S.TextError>There was an error, try it later.</S.TextError>
        )}
      </S.ContainerForm>
    </S.ContainerContact>
  );
};

export default Contact;

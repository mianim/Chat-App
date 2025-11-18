import React from "react";
import styled from "styled-components";

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src="" alt="" />
            <h1>snappy</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(event) => handleChange(event)}
          ></input>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(event) => handleChange(event)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(event) => handleChange(event)}
          ></input>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(event) => handleChange(event)}
          ></input>
          <button type="submit">Register</button>
        </form>
      </FormContainer>
    </>
  );
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

export default Register;

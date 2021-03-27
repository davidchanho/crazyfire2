import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "yup-phone";
import Section from "../shared/section";
import SectionTitle from "../shared/section-title";

interface IFormInputs {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().phone(),
  message: yup.string().required(),
});

export default function Contact() {
  const { register, handleSubmit, errors } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <Section>
      <SectionTitle>Contact Us</SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input className="border" type="text" name="name" ref={register} />
        <p>{errors.name?.message}</p>

        <label htmlFor="email">Email</label>
        <input className="border" type="email" name="email" ref={register} />
        <p>{errors.email?.message}</p>

        <label htmlFor="phone">Phone</label>
        <input className="border" type="text" name="phone" ref={register} />
        <p>{errors.phone?.message}</p>

        <label htmlFor="message">Message</label>
        <textarea className="border" name="message" ref={register} />
        <p>{errors.message?.message}</p>

        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>
    </Section>
  );
}

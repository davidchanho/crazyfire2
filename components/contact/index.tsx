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
        <input
          type="text"
          name="name"
          ref={register}
          aria-invalid={errors.name ? "true" : "false"}
        />
        <p>{errors.name?.message}</p>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          ref={register}
          aria-invalid={errors.email ? "true" : "false"}
        />
        <p>{errors.email?.message}</p>

        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          ref={register}
          aria-invalid={errors.phone ? "true" : "false"}
        />
        <p>{errors.phone?.message}</p>

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          ref={register}
          aria-invalid={errors.name ? "true" : "false"}
        />
        <p>{errors.message?.message}</p>

        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>
    </Section>
  );
}

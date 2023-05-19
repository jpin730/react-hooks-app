import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const onSubmit = () => {
    console.log(formState);
    setFormState(initialForm);
  };

  return { formState, onInputChange, onSubmit };
};

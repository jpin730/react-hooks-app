import { act, renderHook } from "@testing-library/react";

import { useForm } from "../../src/hooks";

describe("useForm", () => {
  const initialForm = {
    name: "MockedName",
    email: "mocked@email.com",
  };

  test("should return default values", () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
      onSubmit: expect.any(Function),
    });
  });

  test("should change name in form value", () => {
    const newValue = "NewMockedName";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() =>
      onInputChange({
        target: { name: "name", value: newValue },
      })
    );

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test("should reset form value", () => {
    const newValue = "NewMockedName";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({
        target: { name: "name", value: newValue },
      });
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});

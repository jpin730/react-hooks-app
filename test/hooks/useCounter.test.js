import { act, renderHook } from "@testing-library/react";

import { useCounter } from "../../src/hooks";

describe("useCounter", () => {
  test("should return default values", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("should set counter with passed value", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("should increment counter", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => increment());
    const { counter } = result.current;
    expect(counter).toBe(101);
  });

  test("should decrement counter", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => decrement());
    const { counter } = result.current;
    expect(counter).toBe(99);
  });

  test("should reset counter", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment, reset } = result.current;

    act(() => {
      increment();
      reset();
    });
    const { counter } = result.current;
    expect(counter).toBe(100);
  });
});

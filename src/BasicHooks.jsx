import { CounterApp, CounterWithCustomHook } from "./useState";
import { SimpleForm, FormWithCustomHook } from "./useEffect";
import { MultipleCustomHooks } from "./multipleHooks/MultipleCustomHooks";
import { FocusScreen } from "./useRef/FocusScreen";
import { Layout } from "./useLayoutEffect/Layout";
import { CallbackHook, MemoHook, Memorize } from "./memos";
import { Parent } from "./challenge/Parent";

export const BasicHooks = () => {
  const components = [
    <CounterApp />,
    <CounterWithCustomHook />,
    <SimpleForm />,
    <FormWithCustomHook />,
    <MultipleCustomHooks />,
    <FocusScreen />,
    <Layout />,
    <Memorize />,
    <MemoHook />,
    <CallbackHook />,
    <Parent />,
  ];

  return (
    <>
      {components.map((component, index) => (
        <div className="bg-white border rounded p-5 my-5" key={index}>
          {component}
        </div>
      ))}
    </>
  );
};

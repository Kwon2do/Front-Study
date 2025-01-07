import type { UseFormRegisterReturn } from "react-hook-form";
interface IButtonProps {
  title: string;
  isActive: boolean;
}
import { JSX } from "react";
export default function Button01(props: IButtonProps): JSX.Element {
  return (
    <button style={{ backgroundColor: props.isActive ? "yellow" : "gray" }}>
      {props.title}
    </button>
  );
}

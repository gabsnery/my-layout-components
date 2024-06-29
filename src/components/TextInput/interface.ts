import { InputHTMLAttributes } from "react";

export default interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  variant?: string;
}

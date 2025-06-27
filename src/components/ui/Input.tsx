import type { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...rest }: IProps) {
  return (
    <input
      className="border-2 border-gray-300 flex h-10 w-full rounded-md
        border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0
        file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      {...rest}
    />
  );
}

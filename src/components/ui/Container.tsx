import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className="mx-auto w-full max-w-8xl px-6 md:px-8 lg:px-10">
      {children}
    </div>
  );
}
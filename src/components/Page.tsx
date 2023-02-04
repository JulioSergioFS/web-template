import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

export function Page({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="page">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
}

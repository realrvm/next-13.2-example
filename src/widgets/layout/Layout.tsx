import { FC, PropsWithChildren } from "react";
import dynamic from "next/dynamic";

import { Header } from "@/widgets/header/Header";
import { Meta } from "@/widgets/meta/Meta";

const OnlyClientFooter = dynamic(() => import("@/widgets/footer/Footer"), {
  ssr: false,
});

export const Layout: FC<
  PropsWithChildren<{ title: string; description?: string }>
> = ({ children, title, description }) => {
  return (
    <Meta title={title} description={description}>
      <Header />
      {children}
      <OnlyClientFooter />
    </Meta>
  );
};

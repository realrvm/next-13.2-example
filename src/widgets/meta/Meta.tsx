import { FC, PropsWithChildren } from "react";
import Head from "next/head";

type MetaProps = {
  title: string;
  description?: string;
};

function getTitle(title: string) {
  return `${title} | nextjs 13.2`;
}

export const Meta: FC<PropsWithChildren<MetaProps>> = ({
  title,
  description,
  children,
}) => {
  const fullTitle = getTitle(title);

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        {description ? (
          <>
            <meta name="description" content={description} />
            <meta name="og:title" content={fullTitle} />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      {children}
    </>
  );
};

import { useRouter } from "next/router";
import { FC } from "react";

import { Layout } from "@/widgets/layout/Layout";
import Image from "next/image";

const NotFound: FC = () => {
  const { replace } = useRouter();

  return (
    <Layout>
      <button onClick={() => replace("/")}>Back to home</button>
      <div style={{ textAlign: "center" }}>
        <Image priority src="/404.jpg" alt="404" width={300} height={300} />
      </div>
    </Layout>
  );
};

export default NotFound;

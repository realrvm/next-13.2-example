import { Layout } from "@/widgets/layout/Layout";
import { useRouter } from "next/router";
import { FC } from "react";

const log = console.log.bind(console);

export const Pet: FC<{ name: string; id: number }> = ({ name, id }) => {
  const { push } = useRouter();

  return (
    <Layout title="pet" description="pet page">
      <h1>{name}</h1>
      <button onClick={() => push(`/pet/${id}`)}>To {name} page</button>
    </Layout>
  );
};

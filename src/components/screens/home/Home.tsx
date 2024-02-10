import { FC } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

import { Layout } from "@/widgets/layout/Layout";
import { Pets } from "@/shared/types";
import { Pet } from "@/components/screens/pet/Pet";

import styles from "./styles.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const Home: FC<Pets> = ({ pets }) => {
  return (
    <Layout title="Main" description="main page">
      <main className={styles.main}>
        <h1 className={inter.className}>Home page</h1>
        {pets.length ? (
          pets.map((pet) => {
            const { id, name } = pet;
            return <Pet key={id} name={name} id={id} />;
          })
        ) : (
          <div>Not pets found</div>
        )}
      </main>
    </Layout>
  );
};

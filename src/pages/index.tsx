import { FC } from "react";
import Head from "next/head";
import { GetStaticProps } from "next/types";

import { Home } from "@/components/screens/home/Home";
import { Pets } from "@/shared/types";
import { PetService } from "@/services/pet.service";

const HomePage: FC<Pets> = ({ pets }) => {
  return <Home pets={pets} />;
};

export const getStaticProps: GetStaticProps<Pets> = async () => {
  const pets = await PetService.getAll();

  return { props: { pets }, revalidate: 60 };
};

// export const getServerSideProps: GetServerSideProps<Pets> = async () => {
//   const pets = await PetService.getAll();
//
//   return { props: { pets } };
// };

export default HomePage;

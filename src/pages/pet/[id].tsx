import { FC } from "react";
import { Pet } from "@/components/screens/pet/Pet";
import { Pet as PetType } from "@/shared/types";
import { GetStaticPaths, GetStaticProps } from "next/types";
import { PetService } from "@/services/pet.service";
import { ParsedUrlQuery } from "querystring";

const PetPage: FC<PetType> = (pet) => {
  const { name } = pet;

  return (
    <>
      <Pet name={name} />
    </>
  );
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const pets = await PetService.getAll();

  return {
    paths: pets.map((pet) => ({
      params: {
        id: pet.id.toString(),
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<PetType> = async ({ params }) => {
  const pet = await PetService.getPetById(String(params?.id));

  return {
    props: pet,
    revalidate: 60,
  };
};

export default PetPage;

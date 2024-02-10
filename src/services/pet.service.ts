import axios from "axios";

import { Pet } from "@/shared/types";

const API_URL = "http://localhost:4433";
axios.defaults.baseURL = API_URL;

export const PetService = {
  async getAll() {
    const { data } = await axios.get<Pet[]>("/pets");
    return data;
  },

  async getPetById(id: string) {
    const { data } = await axios.get<Pet[]>("/pets", { params: { id } });
    return data[0];
  },
};

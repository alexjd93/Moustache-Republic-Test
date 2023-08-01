import { instance } from "../config/instance";

export const productApi = {
  getProduct: async () => {
    try {
      const { data } = await instance.get("/product");
      return data;
    } catch (err) {
      console.log(err);
    }
  },
};

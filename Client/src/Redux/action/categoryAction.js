import { GET_ALL_CATEGORY, GET_ERROR } from "../type";
import useGetData from "../../hooks/useGetData";

export const getAllCategory = (limit) => async (dispatch) => {
  try {
    const respose = await useGetData(`/api/v1/categories?limit=${limit}`);
    console.log(respose.data);
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: respose,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "ERROR" + e,
    });
  }
};

export const getAllCategoryPage = (page) => async (dispatch) => {
  try {
    const respose = await useGetData(`/api/v1/categories?limit=3&page=${page}`);
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: respose,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "ERROR" + e,
    });
  }
};


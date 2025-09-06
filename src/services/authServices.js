import axios from "axios";

const baseUrl = "https://note-sigma-black.vercel.app/api/v1/users/";

export async function registerApi(formdata) {
  try {
    const { data } = await axios.post(baseUrl + "signUp", formdata);
    return data;
  } catch (error) {
    return error.response?.data || { message: "Something went wrong" };
  }
}

export async function LoginApi(formdata) {
  try {
    const { data } = await axios.post(baseUrl + "signIn", formdata);
    return data;
  } catch (error) {
    return error.response?.data || { message: "Something went wrong" };
  }
}

import axios from "axios";

const API_URL = "https://dummyjson.com/auth/login";

export const loginUser = async (email, password) => {
  try {
    console.log(API_URL);
    // const response = await axios.post(API_URL, { username: email, password });
    return {
      success: 200,
      email: "dhwanipopat@yopmail.com",
      first_name: "Dhwani",
      last_name: "Popat",
    };
  } catch (error) {
    throw new Error("Login failed, please try again");
  }
};

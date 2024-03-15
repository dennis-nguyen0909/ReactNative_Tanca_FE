import axios from "axios";
export const getAllUser = async () => {
  const res = await axios.get(
    "https://api.jsonbin.io/v3/b/65f3f4a41f5677401f3dc705",
    {
      headers: {
        "X-Master-Key":
          "$2a$10$W36p8cyyOGpo8mb2KmBuo.0fUC6H9StTv9kwzfqY7k3AfWmSpEYkK",
        "X-Access-Key":
          "$2a$10$lOjlrHlGhP7jtoK31O3avekfiVVkf3SoXgGX/I0ZD.6cwDgEhAZbm",
      },
    }
  );
  return res.data.record;
};

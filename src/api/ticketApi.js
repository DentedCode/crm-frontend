import axios from "axios";

export const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3001/v1/ticket", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImUyQGUuY29tIiwiaWF0IjoxNjA4MTU5MzE0LCJleHAiOjE2MDgyNDU3MTR9.59n2aDsOvpKQOk7JG8lcIXVXFNxk4MWdEfZsYBG60FE",
        },
      });

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

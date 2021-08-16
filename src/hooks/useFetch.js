import { useState } from "react";

function useFetch(data) {
  const [resStatus, setResStatus] = useState("fail");

  const fetchRoute = async (data) =>
    await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        if (resData.status === "success") {
          setResStatus("success");
          console.log(resStatus);
          alert("success");
        } else if (resData.status === "fail") {
          setResStatus("fail");
          console.log(resStatus);
          alert("fail");
        }
      });

  return {
    fetchRoute,
    resStatus,
  };
}

export default useFetch;

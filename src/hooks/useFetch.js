function useFetch() {
  const fetchRoute = async (data) =>
    await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    }).then((res) => console.log(res.status));

  return {
    fetchRoute,
  };
}

export default useFetch;

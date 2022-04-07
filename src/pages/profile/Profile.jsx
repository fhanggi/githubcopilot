import { useEffect, useState } from "react";

export default function Profile() {
  //fetch data from server
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  //fetch data from server
  const fetchData = async () => {
    const response = await fetch("http://localhost:3001/profile");
    const json = await response.json();
    console.log(json);
    setData(json);
  };

  //update data
    const updateData = async () => {
    const response = await fetch("http://localhost:3001/profile", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "test",
            email: "test@x.com"

        })
    });
    const json = await response.json();
    console.log(json);
    setData(json);
    };

    //delete data
    const deleteData = async () => {

    const response = await fetch("http://localhost:3001/profile", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "test",
            email: "    "
        })
    });
    const json = await response.json();
    console.log(json);
    setData(json);
    };

  useEffect(() => {
    if (refresh) {
      fetchData();
      setRefresh(false);
    }
  }, [refresh]);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Profile</h2>
      <div>{data.name}</div>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={() => setRefresh(true)}>Refresh</button>
      <button onClick={updateData}>Update Data</button>
      <button onClick={deleteData}>Delete Data</button>
    </main>
  );
}

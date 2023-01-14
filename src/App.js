import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Result from "./components/Result";

function App() {
  const [city, setCity] = useState("france");
  const [imageURL, setImageUrl] = useState("");

  const getCityName = (arrgs) => {
    setCity(arrgs);
  };

  const changeUrl = (city) => {
    console.log(city);
    if (city === "france") {
      setImageUrl(
        "https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg?w=360"
      );
    } else if (city === "africa") {
      setImageUrl(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjak19Zh7nR5_2OLP9zysjSd7oJRTOBQoRFhn8E40Dv0yIcUHBQEoNXjMXXGcang1MwsU&usqp=CAU"
      );
    } else if (city === "qatar") {
      setImageUrl(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbDm-wdXgzcTnuY3MDMAqsBZAscb1-Kkyzg&usqp=CAU"
      );
    } else if (city == "japan") {
      setImageUrl(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEH8z7BXUiz1k4aJaEXtzdp7KQkI_LNuonXaQUwxxtJLmJgtOYpqODyCNtobvwwlytqCo&usqp=CAU"
      );
    } else {
      setImageUrl(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNWpwUO6WcJsmLc81hl7qs95VCXeHWbcg4w&usqp=CAU"
      );
    }
  };

  useEffect(() => {
    console.log(city);
    changeUrl(city);
  }, [city]);

  return (
    <div className="App">
      <Result data={city} iurl={imageURL} />
      <Cards getCityName={getCityName} />
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import CoffeeCard from "@components/CoffeeCard";

export default function Home() {
  const [coffee, setCoffee] = useState({});
  const [count, setCount] = useState(0);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    fetch("https://random-data-api.com/api/coffee/random_coffee")
      .then((res) => res.json())
      .then((data) => {
        setCoffee(data);

        setNotes(
          data.notes
            .split(", ")
            .map((note) => note.toUpperCase())
            .join(" • ")
        );
      });
  }, [count]);

  return (
    <>
      <CoffeeCard coffee={coffee} notes={notes} />

      <button type="button" onClick={() => setCount(count + 1)}>
        Trouve moi un café ({count})
      </button>
    </>
  );
}

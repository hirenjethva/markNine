import React, { useState } from "react";
import "./styles.css";

const travelDB = {
  Mumbai: [
    {
      name: "Marine Drive, Mumbai",
      rating: "10/10",
      disp:
        "Starting from the north of Nariman Point and ending at the famous Chowpatty beach, the Marine Drive is a 3km long arc shaped road along the sea coast of South Mumbai. You Can not miss this place if you are Visiting Mumbai."
    },
    {
      name: "Elephanta Caves",
      rating: "09/10",
      disp:
        "An UNESCO World Heritage Site, Elephanta Caves is a specimen of rock cut art and architecture from the times of medieval India. It is an island and is located at a distance of 11km from the city of Mumbai."
    },
    {
      name: "Colaba Causeway",
      rating: "09/10",
      disp:
        "One of the most crowded and electrifying places to visit in Mumbai is the Colaba Causeway, famous for being a shopping paradise and having endless shops to choose from."
    }
  ],

  Thane: [
    {
      name: "Kelva Beach",
      rating: "08/10",
      disp:
        "For Beach Lovers.There are several beaches near Thane but this beautiful one is a must-visit beach in the district."
    },
    {
      name: "Yeoor Hills",
      rating: "09/10",
      disp:
        "If you were looking for picnic spots near Thane then we have a suggestion. Let Yeoor Hills be your escapade! Located in Upvan, Yeoor Hills are also known as Yogi Hills in Mulund and is also known as the ‘Mama Bhanja’ mountain. "
    },
    {
      name: "Upvan Lake",
      rating: "10/10",
      disp:
        "One of the most well-known tourist places in Thane, Upvan Lake is a man-made, eco-friendly lake in Thane and was built in the 1880s by the Thane Municipal Corporation but it was reconstructed by a factory owner named JK Singhania to serve as a source of water supply to Raymond Factory."
    }
  ],

  Pune: [
    {
      name: "Shaniwar Wada Palace",
      rating: "10/10",
      disp:
        "A prominent historical landmark in Pune is Shaniwarwada which is considered as one of the best pune tourist places. It is a majestic fortification which was built in 1732 and during that time it was the seat of the Peshwas of the Maratha Empire and they ruled over there until 1818."
    },
    {
      name: "Aga Khan Palace",
      rating: "10/10",
      disp:
        "Yet another amazing landmark and one of the famous places to visit in Pune with friends is the Aga Khan Palace which was built by Sultan Muhammed Shah Aga Khan III in 1892."
    },
    {
      name: "Dagdusheth Halwai Temple ",
      rating: "10/10",
      disp:
        "A famous Ganesha temple in Pune is Shreemath Dagdusheth Halwai Temple which is a major attraction in Maharashtra."
    }
  ]
};

var travelData = Object.keys(travelDB);

export default function App() {
  const [selecteddestination, setDestination] = useState("Mumbai");
  function destinationClickHandler(destination) {
    setDestination(destination);
  }

  return (
    <div className="App">
      <h1> goodTravel</h1>
      <p id="paragraph">Checkout my favorite go to places in Maharashtra.</p>

      <div>
        {travelData.map((destination) => (
          <button
            onClick={() => destinationClickHandler(destination)}
            style={{
              cursor: "pointer",
              background: "#D1D5DB"
            }}
          >
            {destination}
          </button>
        ))}
      </div>

      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {travelDB[selecteddestination].map((place) => (
            <li
              key={place.name}
              style={{
                listStyle: "none",
                background: "#D1D5DB",
                padding: "1rem",
                border: "1px solid",
                width: "60%",
                margin: "1rem 0.5rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}>{place.name}</div>
              <div
                style={{
                  fontSize: "smaller",
                  background: "#9CA3AF",
                  width: "2rem",
                  padding: "0.1rem 0.2rem"
                }}
              >
                {place.rating}
              </div>
              <div>{place.disp}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

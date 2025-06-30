import { useState } from "react";
import { episodeList } from "./data.js";

export default function App() {
  const { selectedEpisode, setSelectedEpisode } = useState(null);

  function changeEpisodeSelected(idx) {
    setSelectedEpisode(episodeList[idx]);
  }

  return (
    <>
      <h1>Dark Echoes</h1>
      <main>
        <section>
          <h2>Episodes</h2>
          <ul>
            {episodeList.map((episode, idx) => {
              return (
                <li
                  className="episodeItem"
                  key={idx}
                  onClick={() => {
                    changeEpisodeSelected(idx);
                  }}
                >
                  {episode.title}
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          {selectedEpisode ? (
            <>
              <h2>{selectedEpisode.title}</h2>
              <div>{selectedEpisode}</div>
            </>
          ) : (
            <p>Select an episode</p>
          )}
        </section>
      </main>
    </>
  );
}

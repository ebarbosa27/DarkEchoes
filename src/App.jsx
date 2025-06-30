import { useState } from "react";
import { episodeList } from "./data.js";

export default function App() {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  function EpisodeList() {
    return (
      <section>
        <h2>Episodes</h2>
        <ul>
          {episodeList.map((episode, idx) => {
            return (
              <li
                className="episodeItem"
                key={idx}
                onClick={() => {
                  setSelectedEpisode(episode);
                }}
              >
                {episode.title}
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  function EpisodeSelection() {
    if (selectedEpisode) {
      console.log(selectedEpisode);
      return (
        <section>
          <h2>Episode {selectedEpisode.id}</h2>
          <h3>{selectedEpisode.title}</h3>
          <p>{selectedEpisode.description}</p>
          <button>Watch now</button>
        </section>
      );
    }

    return (
      <section>
        <p>Select an episode</p>
      </section>
    );
  }

  return (
    <>
      <h1>Dark Echoes</h1>
      <main>
        <EpisodeList />
        <EpisodeSelection />
      </main>
    </>
  );
}

import { useState } from "react";

export default function App() {
  const { selectedEpisode, setSelectedEpisode } = useState(null);

  return (
    <>
      <h1>Dark Echoes</h1>
      <div>
        <div>
          <h2>Episodes</h2>
          {/* List items here */}
        </div>
        {selectedEpisode ? (
          <div>
            <h2>{selectedEpisode.title}</h2>
            {selectedEpisode}
          </div>
        ) : (
          <div>Select an episode</div>
        )}
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";

import { stats } from "../../types";

interface Props {
  socket: any;
}

const Stats: React.FC<Props> = ({ socket }) => {
  const [stats, setStats] = useState<stats | null>(null);

  const displayStats = stats || { bro: "Loading..", sis: "Loading..." };

  useEffect(() => {
    socket.on("stats", (res: stats) => setStats(res));
    socket.emit("getStats");
  }, []);

  return (
    <>
      <div className="bg-primary rounded p-2 m-2 text-white">
        Bro: {displayStats.bro}
      </div>
      <div className="bg-primary rounded p-2 m-2 text-white">
        Sis: {displayStats.sis}
      </div>
    </>
  );
};

export default Stats;

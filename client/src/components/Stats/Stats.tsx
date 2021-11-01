import React, { useState, useEffect } from "react";

import { stats } from "../../types";

interface Props {
  socket: any;
}

const Stats: React.FC<Props> = ({ socket }) => {
  const [stats, setStats] = useState<stats | null>(null);

  const displayStats = stats || { bro: "?", sis: "?" };

  useEffect(() => {
    socket.on("stats", (res: stats) => setStats(res));
    socket.emit("getStats");
  }, []);

  return (
    <h5>
      Total messages sent:{" "}
      <span className="bg-secondary rounded py-1 px-2 text-white">
        {displayStats.bro}
      </span>{" "}
      bros and{" "}
      <span className="bg-secondary rounded py-1 px-2 text-white">
        {displayStats.sis}
      </span>{" "}
      sisses.
    </h5>
  );
};

export default Stats;

"use client";

import useSearchStore from "@/common/lib/zustand/hooks/useSearchStore";
import { memo } from "react";

const ResultBlock = memo(function ResultBlock() {
  const location = useSearchStore((state) => state.location);
  const lat = useSearchStore((state) => state.lat);
  const lng = useSearchStore((state) => state.lng);
  const nested = useSearchStore((state) => state.nested);

  return (
    <div>
      <h2>Result Block</h2>
      <p>Location: {location}</p>
      <p>Lat: {lat}</p>
      <p>Lng: {lng}</p>
      <p>Nested Data: {JSON.stringify(nested)}</p>
    </div>
  );
});

export default ResultBlock;

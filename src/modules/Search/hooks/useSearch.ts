import React, { useState } from "react";
import SearchResult from "../classes/SearchResult";

const MOCK_SEARCH_RESULTS: Array<ConstructorParameters<typeof SearchResult>> = [
  [{ value: "test" }],
  [{ value: "test2" }],
  [{ value: "test3" }],
  [{ value: "test4" }],
  [{ value: "test5" }],
  [{ value: "test6" }],
  [{ value: "test7" }],
  [{ value: "test8" }],
  [{ value: "test9" }],
  [{ value: "test10" }],
];

export default function useSearch() {
  const [searched, setSearched] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchQuery(event.target.value);
  };

  const [searchResults, setSearchResults] = useState<Array<SearchResult>>([]);

  const handleSearch = () => {
    setSearched(true);
    setSearchResults(
      MOCK_SEARCH_RESULTS.map((result) => new SearchResult(...result)),
    );
    // setSearchResults([])
  };

  return {
    searched,
    searchQuery,
    handleSearchQueryChange,
    searchResults,
    handleSearch,
  };
}

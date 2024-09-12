"use client";

import UButton from "@/common/components/atoms/UButton";
import { styled } from "@/common/lib/mui/theme";
import { SearchIcon } from "@/common/styles/assets/Icons";
import { Box, ClickAwayListener, Icon, Input } from "@mui/material";
import useSearch from "../hooks/useSearch";
import SearchResultList from "./SearchResultList";
import { useRef } from "react";

interface SearchBarProps {
  className?: string;
  /** 讓 SearchResultList 渲染在特定元件底下 */
  resultParentEl: HTMLElement | null;
  onClickAway?: () => void;
}

const StyledIcon = styled(Icon)(({ theme }) => ({
  color: theme.color.grey[600],
  marginRight: theme.spacing(1),
}));

const StyledContainer = styled(Box)(() => ({
  width: "100%",
}));

const StyledInput = styled(Input)(({ theme }) => ({
  backgroundColor: theme.color.searchBar.inputBackground,
  borderRadius: "100px",
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  height: "40px",
}));

const StyledButton = styled(UButton)(({ theme }) => ({
  backgroundColor: theme.color.searchBar.searchButtonBackground,
  "&:hover": {
    backgroundColor: theme.color.searchBar.searchButtonBackground,
  },
}));

const StyledSearchResultList = styled(SearchResultList)(() => ({}));

const SearchBar = ({ resultParentEl, onClickAway }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    searchQuery,
    handleSearchQueryChange,
    handleSearch,
    searchResults,
    searched,
  } = useSearch();

  const handleClickAway = () => {
    onClickAway?.();
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box display="flex" flexDirection="column" width="100%">
        <StyledContainer
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          <StyledInput
            ref={inputRef}
            disableUnderline
            fullWidth
            startAdornment={
              <StyledIcon fontSize="small">
                <SearchIcon />
              </StyledIcon>
            }
            onChange={handleSearchQueryChange}
          />
          <StyledButton
            variant="contained"
            rounded
            onClick={handleSearch}
            disabled={!searchQuery}
          >
            Search
          </StyledButton>
        </StyledContainer>
        {searched && (
          <StyledSearchResultList
            results={searchResults}
            headerAnchorEl={resultParentEl}
            inputAnchorEl={inputRef.current}
          />
        )}
      </Box>
    </ClickAwayListener>
  );
};

export default SearchBar;

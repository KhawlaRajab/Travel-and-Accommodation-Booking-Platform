import {
  Box,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Filter from "./Filter";
import SearchBar from "../../components/Searchbar/SearchBar";
import Grid from "@mui/material/Grid2";
import List from "./List";
import { useQuery } from "react-query";
import { getSearchedHotels } from "../../components/Searchbar/Api";
import { useSearchContext } from "../../components/Searchbar/SearchContext";
import { ResultType } from "./type";
import { useState } from "react";

const SearchResultPage: React.FC = () => {
  const { searchParams } = useSearchContext();
  const [filteredData, setFilteredData] = useState<ResultType[]>([]);
  const { data, error, isLoading } = useQuery<ResultType[], Error>(
    ["SearchResult", searchParams],
    () => getSearchedHotels(searchParams),
    {
      enabled: !!searchParams,
      onSuccess: (fetchedData) => setFilteredData(fetchedData),
    }
  );

  const handleFilter = (filtered: ResultType[]) => {
    setFilteredData(filtered);
  };

  return (
    <Stack direction="column">
      <Box sx={{ py: 12 }}>
        <SearchBar />
      </Box>
      <Container>
        <Grid container spacing={4}>
          <Grid size={{ sm: 12, md: 4 }} paddingLeft={10}>
            <Filter data={data || []} onFilter={handleFilter} />
          </Grid>
          <Grid size={{ sm: 12, md: 8 }}>
            {error && <Typography variant="body1">{error?.message}</Typography>}
            {isLoading && <CircularProgress />}
            <List data={filteredData} />
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default SearchResultPage;

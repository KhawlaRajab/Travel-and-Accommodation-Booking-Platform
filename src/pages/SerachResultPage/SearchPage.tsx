import { Box, Container, Stack } from "@mui/material";
import Filter from "./Filter";
import SearchBar from "../../components/Searchbar/SearchBar";
import Navbar from "../../components/Navbar";
// import List from "./Hotel";
import Grid from "@mui/material/Grid2";
import List from "./List"
import Footer from "../../components/footer";

const SearchResultPage: React.FC = () => {

    return (
        <Stack direction="column">
    
            <Navbar />
            
            <Box sx={{ py: 12 }}>
                <SearchBar />
            </Box>

            <Container sx={{ mt: 1 }}>
                <Grid container spacing={4}>
                {/* <Grid size={{ md: 1 }}>
                    </Grid> */}
                    <Grid size={{ sm:12, md: 4 }} paddingLeft={10}>
                        <Filter />
                    </Grid>
                    <Grid size={{ sm:12, md: 7}}>
                        <List />
                    </Grid>
                </Grid>
            </Container>
         <Footer/>   
        </Stack>
    );
};

export default SearchResultPage;

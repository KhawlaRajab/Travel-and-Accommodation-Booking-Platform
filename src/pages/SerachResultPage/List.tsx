import { useQuery } from "react-query";
import { ResultType } from "./type";
import { useSearchContext } from "../../components/Searchbar/SearchContext";
import { getSearchedHotels } from "../../components/Searchbar/Api";
import { Stack } from "@mui/material";
import Hotel from "./Hotel";


const List: React.FC = () => {
    const { searchParams } = useSearchContext();
   
    const { data, error, isLoading } = useQuery<ResultType[], Error>(
        ['SearchResult', searchParams],
        () => getSearchedHotels(searchParams),
        {
            enabled: !!searchParams,
        }
    );

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    
    
    return (
        <Stack direction={'column'} spacing={3}>
           
            {data?.map((result) => ( 
                <Hotel key={result.hotelId} searchResult={result}/>  
            ))}
        </Stack>
    )
}
export default List;
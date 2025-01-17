import React, { createContext, useState, useContext, ReactNode } from "react";
import { SearchParam } from "./type";


type SearchContextType = {
    searchParams: SearchParam;
    setSearchParams: React.Dispatch<React.SetStateAction<SearchParam>>;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [searchParams, setSearchParams] = useState<SearchParam>({
        checkInDate: '',
        checkOutDate: '',
        city: '',
        starRate: 5,
        sort: 'desc',
        numberOfRooms: 1,
        adults: 2,
        children:0
    });

    return (
        <SearchContext.Provider value={{ searchParams, setSearchParams }}>
            {children}
        </SearchContext.Provider>
    );
};

const useSearchContext = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearchContext must be used within a SearchProvider");
    }
    return context;
};

export { SearchProvider, useSearchContext };

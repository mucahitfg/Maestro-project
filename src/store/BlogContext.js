import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const BlogContext = createContext({
    data: [],
})
function BlogContextProvider({ children }) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://www.lenasoftware.com/api/v1/en/maestro/1')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error))
    }, [])


    const value = {
        data: data,
        setData: setData,
    }

    return (
        <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
    )
}
export default BlogContextProvider;
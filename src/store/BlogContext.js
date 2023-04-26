import React, { useState } from "react";
import { createContext } from "react";

export const BlogContext = createContext({
    ids: [],
    selectedBlog: (id) => { },
})

function BlogContextProvider({ children }) {
    const [blogIds, setBlogIds] = useState([])

    function selectedBlog(id) {
        setBlogIds((currentBlogIds) => [...currentBlogIds, id])
    }

    const value = {
        ids: blogIds,
        selectedBlog: selectedBlog
    }

    return (
        <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
    )
}
export default BlogContextProvider;
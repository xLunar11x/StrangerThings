import React, { useState, useEffect } from "react";
const COHORT = "2211-ftb-et-web-ft";
export const SearchForm = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const getResponse = async () => {
      const {
        success,
        data: { posts },
      } = await fetch(
        `https://strangers-things.herokuapp.com/api/${COHORT}/posts`
      ).then((response) => response.json());
      if (success) {
        setPosts(posts);
      }
    };
    getResponse();
  }, []);
  useEffect(() => {
    console.log({ search, posts });
    if (posts.length) {
      console.log({ posts });
      setFilteredData(
        posts.filter((post) => new RegExp(search, "i").test(post.title))
      );
      console.log({ filteredData });
    }
  }, [search, posts]);
  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {filteredData.map((val) => {
        return (
          <div key={val._id}>
            <p>{val.title}</p>
          </div>
        );
      })}
    </div>
  );
};
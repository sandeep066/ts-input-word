  import "./Word.css";
  import React, { useState } from "react";
  import { WordDetailsType } from "../interfaces/wordInterfaces";
  import WordDetailsComponent from "../components/word/WordDetails";
  import SearchForm from "../components/word/SearchForm";
  import useWordDetails from "../hooks/useWordDetails";

  const Word: React.FC = () => {
    const [searchWord, setSearchWord] = useState<string>("");
    const { wordDetails, isLoading, error } = useWordDetails(searchWord);

    const handleSearch = (word: string) => {
      setSearchWord(word);
    };

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }
    
    return (
      <div className="App">
        <SearchForm onSearch={handleSearch} />
        {
          wordDetails.map((wordDetail:WordDetailsType, index:number) => (
            <WordDetailsComponent key={index} wordDetail={wordDetail} />
          ))
        }
      </div>
    );
  };

  export default Word;

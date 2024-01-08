 import "./Word.css";
  import React, { useState } from "react";
  import { WordDetailsType } from "../interfaces/wordInterfaces";
  import WordDetailsComponent from "../components/word/WordDetails";
  import SearchForm from "../components/word/SearchForm";
  import useWordDetails from "../hooks/useWordDetails";
  import LoadingComponent from '../components/common/loading/LoadingComponent';
  import ErrorComponent from '../components/common/error/ErrorComponent';
 

  const Word: React.FC = () => {
    const [searchWord, setSearchWord] = useState<string>("");
    const { wordDetails, isLoading, error } = useWordDetails(searchWord);

    const handleSearch = (word: string) => {
      setSearchWord(word);
    };

    if (isLoading) {
      return <LoadingComponent/>;
    }

    if (error) {
      return <ErrorComponent message={error} />;
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
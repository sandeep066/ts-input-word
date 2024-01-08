import React, { useState } from "react";


type keyboardEvent=React.KeyboardEvent<HTMLInputElement>
type changeEvent=React.ChangeEvent<HTMLInputElement>
type FCProps=React.FC<SearchFormProps>

interface SearchFormProps {
  onSearch: (word: string) => void;
}

const SearchForm: FCProps = ({ onSearch }) => {
  const [word, setWord] = useState<string>("");

  const handleEnterPress = async (e: keyboardEvent) => {
    if (e.key === "Enter") {
      if (word.trim().length > 0) {
        onSearch(word);
      } else {
        alert("You entered an empty word!!!");
      }
    }
  };

  const handleChange = (e: changeEvent) => {

    if (e.target.value.length === e.target.maxLength) {
      alert('You have reached the maximum length of ' + e.target.maxLength + ' characters.');
    }
      setWord(e.target.value); 
  };

  return (
    <div>
      <h1>Dictionary meaning for a given word</h1>
      <input
        type="text"
        placeholder="Enter a word here..."
        onChange={handleChange}
        onKeyDown={handleEnterPress}
        maxLength={50}
        required
      />
    </div>
  );
};

export default SearchForm;

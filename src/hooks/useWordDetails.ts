import { useState, useEffect } from "react";
import { WordDetailsType } from "../interfaces/wordInterfaces";
import { fetchData } from "../utils/api";
import { API_BASE_URL,ERROR_MESSAGE,WORDAPIDATA } from '../utils/constants'


interface UseWordDetailsResult {
  wordDetails: WordDetailsType[];
  isLoading: boolean;
  error: string | null;
}

const useWordDetails = (word: string): UseWordDetailsResult => {
  const [wordDetails, setWordDetails] = useState<WordDetailsType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWordDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const wordApiData: WordDetailsType[] = await fetchData(
          `${API_BASE_URL}${word}`
        );

        console.log(`${WORDAPIDATA}`, wordApiData);

        setWordDetails(wordApiData);
      } catch (error) {
        console.error(`${ERROR_MESSAGE}`, error);
        setError(`${ERROR_MESSAGE}`);
      } finally {
        setIsLoading(false);
      }
    };

    if (word.trim().length > 0) {
      fetchWordDetails();
    }
  }, [word]);

  return { wordDetails, isLoading, error };
};

export default useWordDetails;

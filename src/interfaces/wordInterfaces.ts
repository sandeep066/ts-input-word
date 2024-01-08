export interface Phonetic {
    text: string;
    audio: string;
    sourceUrl: string;
    license: {
      name: string;
      url: string;
    };
  }
  
  export interface Definition {
    definition: string;
    synonyms?: string[];
    antonyms?: string[];
  }
  
  export interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
  }
  
  export interface WordDetailsType {
    word: string;
    phonetic: string;
    phonetics: Phonetic[];
    meanings: Meaning[];
  }
  
 export interface UseWordDetailsResult {
  wordDetails: WordDetailsType[];
  isLoading: boolean;
  error: string | null;
}

  
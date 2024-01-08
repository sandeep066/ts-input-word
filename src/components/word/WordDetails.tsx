import React from "react";
import { WordDetailsType, Meaning ,Definition} from "../../interfaces/wordInterfaces";
import { NOUN,VERB} from '../../utils/constants'

interface WordDetailsProps {
  wordDetail: WordDetailsType;
}

const WordDetailsComponent: React.FC<WordDetailsProps> = ({ wordDetail }) => (
  <div>
    <h2>Word: {wordDetail.word}</h2>
    <h3>Phonetic: {wordDetail.phonetic}</h3>
    <h3>Meanings:</h3>
    {wordDetail.meanings.map((meaning:Meaning, meaningIndex:number) => (
      <div key={meaningIndex}>
        {(meaning.partOfSpeech === `${NOUN}` || meaning.partOfSpeech === `${VERB}`) && (
          <div>
            <h4>Part of Speech: {meaning.partOfSpeech}</h4>
            <ul>
              {meaning.definitions.map((definition:Definition, defIndex:number) => (
                <li key={defIndex}>{definition.definition}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ))}
  </div>
);

export default WordDetailsComponent;

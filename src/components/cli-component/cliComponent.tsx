import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

interface Answers {
  [key: number]: boolean;
}

export const CliComponent: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [lines, setLines] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Answers>({});

  const questions = [
    '>Do you want to trade BTC? ',
    '>Do you want to do 1 BTC? ',
    '>Do you want to spread it by 5bps? ',
    '>Do you want to do 5 orders for asks and bids? ',
    '>Do you like BTC? ',
    '>Would you like to run this? ',
    '>Would you like to run this? ',
    '>Would you like to run this? ',
    '>Would you like to run this? ',
    '>Would you like to run this? ',
    '>Would you like to run this? ',
    '>Would you like to run this? ',
    '>Would you like to run this? ',
    '>Would you like to run this? ',
    '>Would you like to run this? ',
    '>Would you like to run this? ',
    '>Would you like to run this? ',
    '>Would you like to run this? ',
    '>Would you like to run this? ',
    '>Would you like to run this? ',
    '>Would you like to run this? ',
    '>What? ',
    '>What? ',
    '>What? ',
    '>What? ',
    '>What? ',
    '>What? ',
    '>What? ',
    '>What? ',
    '>What? ',
    
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const currentLine = lines.length;
      if (currentLine < questions.length) {
        const answer = input.toLowerCase() === 'yes';
        setAnswers({ ...answers, [currentLine]: answer });
      }
      if (currentLine === questions.length - 1 && answers[currentLine]) {
        // Run your command here
        console.log('Command executed');
      }
      setLines([...lines, input]);
      setInput('');
    }
  };

  const displayLines = lines.map((line, index) => (
    <div key={index} className="flex flex-row">
      {index < questions.length && <span>{questions[index]}</span>}
      <span>{line}</span>
    </div>
  ));

return (
<div className="relative group">
  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-black rounded-lg blur opacity-40 animate-tilt"></div>
  <div className="max-w-xl mx-auto bg-black border-2 border-white p-4 my-2" style={{ width: '600px', borderRadius: '5px' }}>
    <div className="whitespace-pre-wrap break-words text-left">
      {displayLines}
      {lines.length < questions.length && (
        <div className="flex flex-row">
          <span>{questions[lines.length]}</span>
          <input
            className="bg-black border-none text-green-500 focus:outline-none" style={{ fontWeight: 'bolder' }}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            autoFocus
          />
        </div>
      )}
    </div>
  </div>
</div>







);
};


import React, { useState, ChangeEvent, KeyboardEvent, useRef, useEffect } from 'react';

interface Answers {
  [key: number]: boolean;
}

export const CliComponent: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [lines, setLines] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Answers>({});
  const terminalContainerRef = useRef<HTMLDivElement | null>(null);

  const questions = [
    '> Click ENTER to test  ',
    '> Do you want to trade BTC?  ',
    '> Do you want to trade BTC?  ',
    '> Do you want to trade BTC?  ',
    '> Do you want to trade BTC?  ',
    '> Do you want to trade BTC?  ',
    '> Do you want to trade BTC?  ',
    '> Do you want to trade BTC?  ',
    '> Do you want to trade BTC?  ',
    '> Do you want to trade BTC?  ',
    '> Do you want to trade BTC?  ',
    '> Do you want to trade BTC?  ',
    '> Do you want to trade BTC?  ',
    '> Do you want to trade BTC?  ',
    '> Do you want to trade BTC?  ',
    '> Do you want to trade BTC?  ',
    '> Do you want to trade BTC?  ',
    '> Do you want to trade BTC?  ',
    '> Do you want to trade BTC?  ',
    '> Do you want to trade BTC?  ',
    '> Do you want to trade BTC?  ',
    '> Do you want to trade BTC?  ',
    '> Do you want to trade BTC?  ',
    '> Do you want to trade BTC?  ',
    '> Do you want to trade BTC?  ',
  ];

  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop =  terminalContainerRef.current.scrollHeight;
    }
  }, [lines]);

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
    <div key={index} className="flex flex-row text-green-500">
      {index < questions.length && <span>{questions[index]}</span>}
      <span className="ml-2" style={{ fontWeight: 'bolder' }}>{line}</span>
    </div>
  ));

  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-black blur opacity-40 animate-tilt" style={{ zIndex: 3 }}></div>
      <div className="mx-auto mockup-code bg-primary border-2       border-[#5252529f] p-6 px-10 my-2" style={{ width: '700px', height: "300px", zIndex: 4 }}>
        <div
          ref={terminalContainerRef}
          className="overflow-y-auto max-h-full"
        >
          {lines.length < questions.length && (
            <>
              {displayLines}
              <div className="flex flex-row text-green-500">
                <span>{questions[lines.length]}</span>
                <input
                  className="bg-black border-none text-green-500 focus:outline-none ml-2 pb-4" style={{ fontWeight: 'bolder' }}
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  autoFocus
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};





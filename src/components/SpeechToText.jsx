import React, { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";

const SpeechToText = () => {
  const [value, setValue] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });
  return (
    <div className="h-screen bg-slate-300 flex justify-center items-center">
      <div className="w-2/5 h-96 bg-slate-500">
        <div className="w-full h-[60vh] p-4 bg-slate-200">
          <textarea
            className="w-full text-slate-900"
            value={value}
            rows={15}
            disabled
            // onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <div className="w-full px-5 py-3 flex justify-center items-center bg-slate-500">
          {listening ? (
            <button
              className="py-2 px-3 bg-slate-700 text-slate-50 rounded"
              onMouseDown={stop}
            >
              Stop
            </button>
          ) : (
            <button
              className="py-2 px-3 bg-slate-700 text-slate-50 rounded"
              onMouseDown={listen}
            >
              Start
            </button>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default SpeechToText;

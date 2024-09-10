import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const TextToSpeech = () => {
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();
  return (
    <div className="h-screen bg-slate-300 flex justify-center items-center">
      <div className="w-2/5 h-96 bg-slate-500">
        <div className="w-full h-[60vh] p-4 bg-slate-200">
          <textarea
            className="w-full text-slate-900"
            value={value}
            rows={15}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <div className="w-full px-5 py-3 flex justify-center items-center bg-slate-500">
          <button
            className="py-2 px-3 bg-slate-700 text-slate-50 rounded"
            onClick={() => speak({ text: value })}
          >
            Speak
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextToSpeech;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SpeechToText from "../components/SpeechToText";
import TextToSpeech from "../components/TextToSpeech";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SpeechToText />} />
          <Route path="/text-to-speech" element={<TextToSpeech />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;

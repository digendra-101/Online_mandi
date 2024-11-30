
import * as Speech from 'expo-speech';

const TextToAudio = {
  speak: (text) => {
    if (!text) return;
    Speech.stop(); // Stop any ongoing speech
    Speech.speak(text, {
      language: 'hi-IN',
      pitch: 1.0,
      rate: 0.5,
    });
  },

  stop: () => {
    Speech.stop();
  },
};

export default TextToAudio;

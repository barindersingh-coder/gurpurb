function makeWish() {
    const nameInput = document.getElementById("nameInput").value;
    const greetingMessage = document.getElementById("greetingMessage");
    const blessingSong = document.getElementById("blessingSong");

    if (nameInput.trim()) {
        // Announce the full message including the entered name
        const speech = new SpeechSynthesisUtterance(`Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh! Blessings to you, ${nameInput}!`);
        speech.lang = 'en-US'; // Set language for speech
        speech.onend = function () {
            // Once the speech ends, show the greeting message and play the song
            greetingMessage.innerHTML = `Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh! Blessings to you, ${nameInput}!`;
            blessingSong.play();
        };
        speechSynthesis.speak(speech);  // Speak the text

    } else {
        greetingMessage.innerHTML = "Please enter a valid name.";
    }
}

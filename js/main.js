import DnaConfig from "./Dna/DnaConfig.js";
import DnaProcessor from "./Dna/DnaProcessor.js";

document.addEventListener("DOMContentLoaded", () => {
    const inputTextarea = document.getElementById("input");
    const outputTextarea = document.getElementById("output");
    const processBtn = document.getElementById("processBtn");
    const pasteBtn = document.getElementById("pasteBtn");
    const copyInputBtn = document.getElementById("copyInputBtn");
    const copyOutputBtn = document.getElementById("copyOutputBtn");

    // Load DNA configuration
    const config = new DnaConfig();

    // Function to process text when user clicks the button
    const processText = () => {
        const inputText = inputTextarea.value.trim();
        if (inputText) {
            const processor = new DnaProcessor(inputText, config);
            const processedText = processor.processDna();
            outputTextarea.value = processedText;
        } else {
            outputTextarea.value = "⚠️ No DNA input detected!";
        }
    };

    const pasteFromClipboard = async () => {
        try {
            const text = await navigator.clipboard.readText();
            inputTextarea.value = text;
        } catch (err) {
            alert("⚠️ Unable to paste from clipboard.");
        }
    };

    const copyToClipboard = async (textarea) => {
        try {
            await navigator.clipboard.writeText(textarea.value);
        } catch (err) {
            console.error("⚠️ Unable to copy to clipboard:", err);
        }
    };

    // Event Listeners
    processBtn.addEventListener("click", processText);
    pasteBtn.addEventListener("click", pasteFromClipboard);
    copyInputBtn.addEventListener("click", () => copyToClipboard(inputTextarea));
    copyOutputBtn.addEventListener("click", () => copyToClipboard(outputTextarea));
});

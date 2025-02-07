# 🛡️ Crusader Kings 3 DNA Beautifier ⚔️  

A **dark medieval-themed** web tool for **enhancing and processing Crusader Kings 3 Persistent DNA**. This tool **makes characters look younger, slows aging, and enhances their appearance** (*beauty is subjective, but you can modify the settings to match your personal preferences*).
---

## **📜 Features**
✅ **DNA Processing** - Converts CK3 DNA input into a more beautiful.  
✅ **Clipboard Integration** - Supports **paste & copy**.
✅ **Fast & Lightweight** - No unnecessary dependencies.  

---

## **📂 Project Structure**
```
/ck3-dna-beautifier
│── /css
│   ├── styles.css       # Main UI styles
│── /js
│   ├── main.js          # Handles UI interactions (copy, paste, process)
│   ├── DnaConfig.js     # Stores DNA-related configuration
│   ├── DnaProcessor.js  # Processes DNA text
│── index.html          # Main UI structure
│── README.md           # Documentation
```

---

## **🚀 Installation & Usage**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/ck3-dna-beautifier.git
cd ck3-dna-beautifier
```

### **2️⃣ Open the `index.html`**
You can simply open the file in your browser:
```bash
open index.html   # MacOS
xdg-open index.html   # Linux
start index.html   # Windows
```

### **3️⃣ Paste & Beautify CK3 DNA**
- **Paste** your DNA string in the **input box**.
- Click **"Beautify DNA"** to process it.
- **Copy** the structured DNA output.

---

## **📜 Example Input & Output**
### **🔹 Input:**
```
genes={ hair_color={ 245 184 90 240 } gene_eye_height={ "eye_height_neg" 115 "eye_height_pos" 120 } }
```
### **🔹 Output:**
```json
genes={
    hair_color={ 245 184 90 240 },
    gene_eye_height={
        "eye_height_neg": 127,
        "eye_height_pos": 130
    }
}
```
(Values depend on the `DnaConfig.js` configuration.)

---

## **🎨 UI Preview**
✨ The interface follows a **dark medieval aesthetic** with **black/gray tones, silver borders, and white text** for **high contrast and readability**.

![Dark Medieval UI Preview](https://via.placeholder.com/800x400?text=Dark+Medieval+UI+Preview) *(Replace with a screenshot when available.)*

---

## **🛠️ Technologies Used**
- **HTML5**
- **CSS3 (Dark Medieval Themed)**
- **JavaScript (Clipboard API, Text Processing)**

---

## **🛡️ Contributing**
1. **Fork** the repository.  
2. Create a **new branch**:  
   ```bash
   git checkout -b feature-name
   ```
3. Make your **changes** and **test** them.  
4. **Commit** and **push**:  
   ```bash
   git commit -m "Added feature XYZ"
   git push origin feature-name
   ```
5. Create a **pull request**!

---

## **⚔️ License**
This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it.

---

## **📬 Contact**
For questions or feature requests:  
📧 Email: `your-email@example.com`  
🐦 Twitter: `@your-twitter`  
🔗 GitHub: [your-username](https://github.com/your-username)

---

🔥 **Now you can easily mod CK3 characters like a true medieval ruler!** ⚔️  
🚀 **Happy DNA editing!** 🏰🎭
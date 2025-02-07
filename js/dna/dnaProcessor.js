export default class DnaProcessor {
    constructor(text, config) {
        this.text = text;
        this.config = config; // Configuration will define modification rules
    }

    extractGenesBlock(text) {
        const startIndex = text.indexOf("genes={");
        if (startIndex === -1) return null;

        let bracketCount = 0;
        let endIndex = startIndex;
        let foundBrackets = false;

        for (let i = startIndex; i < text.length; i++) {
            if (text[i] === "{" && bracketCount == 0 && !foundBrackets) foundBrackets = true;
            if (text[i] === "{") bracketCount++;
            if (text[i] === "}") bracketCount--;

            if (bracketCount === 0 && foundBrackets) {
                endIndex = i;
                break;
            }
        }

        return text.substring(startIndex, endIndex + 1);
    }

    processDna() {
        try {
            // Extract the genes block using the new function
            const genesBlock = this.extractGenesBlock(this.text);
            if (!genesBlock) {
                console.error("No genes block found.");
                return "No genes block found.";
            }

            // Process each gene inside the block
            const genePattern = /([\w_]+)=\{\s*([^\{\}]+?)\s*\}/g;

            // Replace individual gene values
            const updatedGenes = genesBlock.replace(genePattern, (geneMatch, geneName, geneValues) => {
                const configGene = this.config.getGene(geneName);
                if (configGene) {
                    let updatedValues = geneValues.trim().split(/\s+/).map(val => val.replace(/^"|"$/g, ''));
                    updatedValues = [
                        { [updatedValues[0]]: updatedValues[1] },
                        { [updatedValues[2]]: updatedValues[3] }
                    ];
                    
                    updatedValues = updatedValues.map(item => {
                        console.log(item);
                        let geneKey = Object.keys(configGene)[0];
                        console.log(geneKey);
                        let geneValue = configGene[geneKey];
                        console.log(geneValue);
                        Object.keys(item).forEach(key => {
                            if (!isNaN(configGene[key])) {
                                geneKey = key;
                                item[key] = configGene[key];
                            }
                        });
                        return `\"${geneKey}\" ${geneValue}`;
                    });
                    return `${geneName}={ ${updatedValues.join(" ")} }`;
                } else {
                    return geneMatch
                }
            });

            this.text = this.text.replace(genesBlock, `${updatedGenes} }`);
            console.log("Processed DNA text successfully.");
            console.log(this.text);
            return this.text;
        } catch (error) {
            console.error("Error processing DNA:", error);
            return "An error occurred while processing the DNA.";
        }
    }
}

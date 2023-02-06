export default function getFormattedText(text: string[], lineBreak?: string){
    return text.reduce(
        (prevTxt, currentLine) => prevTxt + "\n" + lineBreak + currentLine
      );
}
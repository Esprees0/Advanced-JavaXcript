function censorWord(sentence, wordToCensor) {
    const regex = new RegExp(wordToCensor, 'gi');
    const censordText = sentence.replace(regex, '***');
    return censordText;
}

const originalPost = "JavaScript is the best programming language. I love JavaScript!";
const clenPost = censorWord(originalPost, "JavaScript");

console.log(clenPost);
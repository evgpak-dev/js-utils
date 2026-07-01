function removeEmoji(str) {
    const emojiRegex = /\p{RGI_Emoji}/gv;
    return str.replace(emojiRegex, '').replace(/  +/g, ' ');
}

export { removeEmoji };
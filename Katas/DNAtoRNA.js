// Given a string, replace every 'T' with a 'U':

const DNAtoRNA = s => s.replaceAll('T', 'U');

// With regex:

const DNAtoRNAV2 = s => s.replace(/T/g, 'U');
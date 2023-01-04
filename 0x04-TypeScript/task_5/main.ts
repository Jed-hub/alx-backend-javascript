// Major Credits interface
interface MajorCredits {
  credits: number;
  _majorBrand: 'major';
}

// Minor credits interface
interface MinorCredits {
  credits: number;
  _minorBrand: 'minor';
}

// created functions
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
  return subject1.credits + subject2.credits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
  return subject1.credits + subject2.credits;
}

const Math = { credits: 3 } as MajorCredits;
const Biology = { credits: 3 } as MajorCredits;
const Economy = { credits: 1 } as MinorCredits; 
const French = { credits: 1 } as MinorCredits; 

console.log(sumMajorCredits(Math, Biology));
console.log(sumMinorCredits(Economy, French));

export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
     // new line
	const task = true;
     // new line
	const task2 = false;
  }

  return [task, task2];
}

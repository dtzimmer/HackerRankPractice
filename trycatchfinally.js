// A good simple example of a try, catch, finally

function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log(s);
  }
}

module.exports = function toReadable (number) {
   if (number == 0) { return 'zero'; }
   let units = number % 10;
   let dozens = ((number - units) / 10) % 10;
   let hundreds = Math.floor(((number - units - dozens) / 100) % 10);
   let currentUnit = '';
   let currentDozen = '';
   let currentHundred = '';
   console.log(units, dozens, hundreds);
   switch (hundreds) {
      case 1: currentHundred = (dozens || units) ? 'one hundred ' : 'one hundred'
         break;
      case 2: currentHundred = (dozens || units) ? 'two hundred ' : 'two hundred'
         break;
      case 3: currentHundred = (dozens || units) ? 'three hundred ' : 'three hundred'
         break;
      case 4: currentHundred = (dozens || units) ? 'four hundred ' : 'four hundred'
         break;
      case 5: currentHundred = (dozens || units) ? 'five hundred ' : 'five hundred'
         break;
      case 6: currentHundred = (dozens || units) ? 'six hundred ' : 'six hundred'
         break;
      case 7: currentHundred = (dozens || units) ? 'seven hundred ' : 'seven hundred'
         break;
      case 8: currentHundred = (dozens || units) ? 'eight hundred ' : 'eight hundred'
         break;
      case 9: currentHundred = (dozens || units) ? 'nine hundred ' : 'nine hundred'
         break;
   }
   switch (dozens) {
      case 1: currentDozen = ''
         break;
      case 2: currentDozen = units ? 'twenty ' : 'twenty'
         break;
      case 3: currentDozen = units ? 'thirty ' : 'thirty'
         break;
      case 4: currentDozen = units ? 'forty ' : 'forty'
         break;
      case 5: currentDozen = units ? 'fifty ' : 'fifty'
         break;
      case 6: currentDozen = units ? 'sixty ' : 'sixty'
         break;
      case 7: currentDozen = units ? 'seventy ' : 'seventy'
         break;
      case 8: currentDozen = units ? 'eighty ' : 'eighty'
         break;
      case 9: currentDozen = units ? 'ninety ' : 'ninety'
         break;
   }
   switch (units) {
      case 1: currentUnit = !(dozens == 1) ? 'one' : 'eleven'
         break;
      case 2: currentUnit = !(dozens == 1) ? 'two' : 'twelve'
         break;
      case 3: currentUnit = !(dozens == 1) ? 'three' : 'thirteen'
         break;
      case 4: currentUnit = !(dozens == 1) ? 'four' : 'fourteen'
         break;
      case 5: currentUnit = !(dozens == 1) ? 'five' : 'fifteen'
         break;
      case 6: currentUnit = !(dozens == 1) ? 'six' : 'sixteen'
         break;
      case 7: currentUnit = !(dozens == 1) ? 'seven' : 'seventeen'
         break;
      case 8: currentUnit = !(dozens == 1) ? 'eight' : 'eighteen'
         break;
      case 9: currentUnit = !(dozens == 1) ? 'nine' : 'nineteen'
         break;
      default: currentUnit = (dozens == 1) ? 'ten' : ''
         break;
   }
   //    let arr = [currentHundred, currentDozen, currentUnit]
   //    return arr.join(' ');
   return `${currentHundred}${currentDozen}${currentUnit}`;
}

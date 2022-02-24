module.exports = function reverse (n) {
    if (n < 0) {
        n = Math.abs(n);
    }
        let str = n.toString();
        let i = str.length-1;
        let result = '';
        while (i>=0) {
          result = result + str[i];
          i = i - 1;
        }
        return result;
      }
 


const stringSize = (text) => { 
    return text.length;
}

const replaceCharacterE = (text) => { 
    return text.replace('e'," ");

}
const concatString = (text1, text2) => { 
    return text1+text2;

}
const showChar5 = (text) => {
    return text.charAt(4);

}
const showChar9 = (text) => {
    return text.substr(0,9);

}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();

}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    //typeof is like an opperator or method it just return the type of the input, it can be a bolean,number..
    if (typeof text === 'string'){
        return true;
    }
    else {
        return false;
    }
}

const getExtension = (text) => {
    //you can use two methods, The split() method will convert a string into an array of substrings, separated by the character you passed as the method’s parameter.
    //the pop() method will remove the last element of an array and return that as a value.  chain call the methods to get the extension of a filename as follows:
    return text.split('.').pop();

}
const countSpaces = (text) => {
    return text.split(" ").length -1;    

}
const InverseString = (text) => {

        var splitString = text.split(""); // var splitString = "hello".split("");
        // ["h", "e", "l", "l", "o"]
     
        // Step 2. Use the reverse() method to reverse the new created array
        var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
        // ["o", "l", "l", "e", "h"]
     
        // Step 3. Use the join() method to join all elements of the array into a string
        var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
        // "olleh"
        
        //Step 4. Return the reversed string
        return joinArray; // "olleh"
    }



const power = (x, y) => {

    return Math.pow(x,y);

}
const absoluteValue = (num) => {
     return Math.abs(num);

}
const absoluteValueArray = (array) => {
    return array.map(Math.abs);
}
 

const circleSurface = (radius) => {
    return Math.round(Math.PI*radius*radius);

}
const hypothenuse = (ab, ac) => {
   //return Math.sqrt((Math.pow(ab,2))+(Math.pow(ac,2)));
   //or
   return Math.hypot(ab,ac);
}
const BMI = (weight, height) => {
    return parseFloat((weight / (height * height)).toFixed(2));
}

const createLanguagesArray = () => {
    const languages = ["Html", "CSS", "Java", "PHP"];
    return languages;
}

const createNumbersArray = () => {
 const number=[0,1,2,3,4,5];
 return number;
}

const replaceElement = (languages) => {
    languages[2] = "Javascript";
    return languages;
}

const addElement = (languages) => {
    languages.push("Ruby", "Python");
    return languages;
}

const addNumberElement = (numbers) => {
    numbers.unshift(-2, -1);
    return numbers;
}

const removeFirst = (languages) => {
    languages.shift();
    return languages;
}

const removeLast = (languages) => {
    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {
    const arr=social_arr.split(",");
    return arr;

}

const convertArrToStr = (languages) => {
    const str = languages.join();
    return str;

}

const sortArr = (social_arr) => {
    social_arr.sort();
    return social_arr;
}

const invertArr = (social_arr) => {
    social_arr.reverse();
    return social_arr;
}
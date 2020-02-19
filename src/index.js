module.exports = function toReadable(number) {
    const determine_num_from_10_to_90 = (num) => {
        switch (+num) {
            case 1:
                return "ten";
            case 2:
                return "twenty";
            case 3:
                return "thirty";
            case 4:
                return "forty";
            case 5:
                return "fifty";
            case 6:
                return "sixty";
            case 7:
                return "seventy";
            case 8:
                return "eighty";
            case 9:
                return "ninety";
            case 0:
                return "";
        }
    };
    const determine_num_from_11_to_19 = (num) => {
        switch (+num) {
            case 1:
                return "eleven";
            case 2:
                return "twelve";
            case 3:
                return "thirteen";
            case 4:
                return "fourteen";
            case 5:
                return "fifteen";
            case 6:
                return "sixteen";
            case 7:
                return "seventeen";
            case 8:
                return "eighteen";
            case 9:
                return "nineteen";
        }
    };
    const determine_num_from_0_to_9 = (item) => {
        switch (+item) {
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
            case 7:
                return "seven";
            case 8:
                return "eight";
            case 9:
                return "nine";
            case 0:
                return "zero";
        }
    };
    const numArr =
        number % 10 === 0 && number >= 100 && number < 1000 && number !== 0
            ? determine_num_from_0_to_9(String(number).split("")[0]) +
              " hundred " +
              determine_num_from_10_to_90(String(number).split("")[1])
            : number >= 100 && +String(number)[1] === 1 && number !== 10
            ? determine_num_from_0_to_9(String(number).split("")[0]) +
              " hundred " +
              determine_num_from_11_to_19(String(number).split("")[2])
            : number >= 100 && number < 1000 && +String(number)[1] === 0
            ? determine_num_from_0_to_9(String(number).split("")[0]) +
              " hundred " +
              determine_num_from_0_to_9(String(number).split("")[2])
            : number >= 100 && number < 1000
            ? determine_num_from_0_to_9(String(number).split("")[0]) +
              " hundred " +
              determine_num_from_10_to_90(String(number).split("")[1]) +
              " " +
              determine_num_from_0_to_9(String(number).split("")[2])
            : number % 10 === 0 && number < 100 && number !== 0
            ? determine_num_from_10_to_90(String(number).split("")[0])
            : (number >= 20 && number <= 99) || number === 10
            ? determine_num_from_10_to_90(String(number).split("")[0]) +
              " " +
              determine_num_from_0_to_9(String(number).split("")[1])
            : number >= 11 && number <= 19
            ? determine_num_from_11_to_19(String(number).split("")[1])
            : determine_num_from_0_to_9(String(number).split(""));
    return numArr.trim();
};

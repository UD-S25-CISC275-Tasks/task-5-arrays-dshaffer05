/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (!numbers[0]) {
        return numbers;
    }
    let endNumbers: number[] = [];
    endNumbers.push(numbers[0]);
    endNumbers.push(numbers[numbers.length - 1]);
    return endNumbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ints = numbers.map((num: string): number =>
        Number(num) ? Number(num) : 0,
    );
    return ints;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    // Map
    const filteredAmounts = amounts.map((amount: string): string =>
        amount[0] === "$" ? amount.slice(1) : amount,
    );
    // Map
    const ints = filteredAmounts.map((num: string): number =>
        Number(num) ? Number(num) : 0,
    );
    return ints;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    // Filter
    const noQuest = messages.filter(
        (message: string): boolean => message[message.length - 1] !== "?",
    );
    // Map
    const shouted = noQuest.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message,
    );
    return shouted;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const onlyShort = words.filter((word: string): boolean => word.length < 4);
    return onlyShort.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const rgb: string[] = ["red", "green", "blue"];
    if (!colors[0]) {
        return true;
    }
    const isAllRGB = colors.every((color: string): boolean =>
        rgb.includes(color),
    );
    return isAllRGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (!addends[0]) {
        return "0=0";
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    const math = addends.join("+");
    return sum.toString() + "=" + math;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    // check for negative value
    const anyNegative = values.some((value: number): boolean => value < 0);
    // if there are negative values
    if (anyNegative) {
        // find the index of the negative value
        const negativeIndex = values.findIndex(
            (value: number): boolean => value < 0,
        );
        // make a new copy of values and cut off everything after the negative
        let valueBefore = [...values];
        valueBefore = valueBefore.slice(0, negativeIndex);
        // sum everything in the new array
        const sum = valueBefore.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0,
        );
        // throw the sum in the array after the negative
        const ready = [...values];
        ready.splice(negativeIndex + 1, 0, sum);

        return ready;
    } else {
        // if no negative values, sum and return
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0,
        );
        let newvalues = [...values];
        newvalues.push(sum);
        return newvalues;
    }
}

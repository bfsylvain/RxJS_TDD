import {Observable, of, range} from 'rxjs';
import {filter, map} from 'rxjs/operators';

/*
    DO NOT TOUCH CONST NAMES (Otherwise, tests won't work)
 */

// Just an observable which should send "Hello World"
export const helloWorldObservable: Observable<string> = of('Hello World');

// This one must trigger numbers from 0 to 10
// Pro tip: You can also use `range` from RxJS
export const zeroToTenObservable: Observable<number> = range(0, 11);

// Use map operator to pick the first letter au each word
export const firstLetterObservable: Observable<string> = of('Wild', 'Code', 'School')
.pipe(map(word => word.charAt(0)))
;

// Use filter operator to allow only positive numbers
export const positiveNumbersObservable: Observable<number> = of(-23, 543, 7, 6, 3, -234, 43).pipe(filter(number => number >=0))

// Write a function that produce the first 15th fibonnaci numbers
// In mathematics, the Fibonacci numbers, commonly denoted Fn form a sequence,
// called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.
// It starts with number 0 and 1. Example:
// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8
// ect ...
//
// NOTE: Do not use `scan` operator
export const fibonacciObservable = new Observable(function (observer) {

    let prevNumber: number = 0
    let actualNumber: number = 1
    let newNumber: number = 1
    const numberOfRepeats: number = 15

    for(let i = 0; i < numberOfRepeats; i++){
        observer.next(newNumber)
        prevNumber = actualNumber
        actualNumber = newNumber
        newNumber = actualNumber + prevNumber
        if(i >= numberOfRepeats-1) {
            observer.complete()
        }
    }
});

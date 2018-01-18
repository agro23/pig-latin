# _Pig-Latin_

#### _This is the Pig Latin Translator program, 01/18/18_

#### By _**Andy Grossberg and Michael Albers**_

## Description

_This is the Pig Latin Translator program code from the homework_

_Rules for Pig Latin from the assignment:_

* First, here are the rules of Pig Latin:

* For words beginning with a vowel, add "way" to the end. X

* For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay". X

* If the first consonants include "qu", move the "u" along with the "q". X
  - Don't forget about words like "squeal" where "qu" doesn't come first!

* For words beginning with "y", treat "y" as a consonant.

## Methodology

_The following specs are included in the program:_

* Take a sentence from the user, translate it into pig latin, and display it back to them.

* The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
 - Example Input: 3
 - Example Output: 3

* The program adds "way" to single-letter words beginning with a vowel.
 - Example Input: i
 - Example Output: iway

* The program adds "ay" to a single-letter word beginning with a consonant
 - Example Input: c
 - Example Output: cay

* The program adds "way" to a multi-letter word beginning with a vowel.
 - Example In: apple
 - Example Out: appleway

* The program moves the consonant to the end of the word if it starts with a consonant
 - Example In: Banana
 - Example Out: ananaB
 - Exception: Chin (would become hinC)

* The program adds "ay" to a multi-letter word that has just gotten a consonant added at the end.
 - Example In: ananaB
 - Example Out: ananaBay

* The program moves consecutive consonants to the end of the word
 - Example In: Chin
 - Example Out: inCh

* The program adds "ay" to a multi-letter word that has just gotten consecutive consonants added at the end.
 - Example In: inCh
 - Example Out: inChay

* The program checks if the word starts with "qu" and moves it to the end.
 - Example In: queen
 - Example Out: eenqu

* The program adds "ay" to a multi-letter word that have just gotten consecutive consonants added at the end.
 - Example In: eenqu
 - Example Out: eenquay

* The program takes in a sentence and applies the above rules to each word.
 - Example In: I am Oliver Queen.
 - Example Out: Iway amWay Oliverway eenQuay
 - Example In: This is a test of the program
 - Example Out: isThay isway away esttay ofway ethay ogrampray


## Setup/Installation Requirements

* _Download the files from the repository_
* _Open the files with the browser of your choice._

## Known Bugs

_There are no known issues at this time. However, the program does not catch non-number input._

## Support and contact details

_You can contact us at andy.grossberg@gmail.com or albersmichael@tutanota.com _

## Technologies Used

_Uses HTML, CSS, javascript, and jQuery._

### License

*Distributed under the GPL*

Copyright (c) 2018 **_Andy Grossberg and Michael Albers_**

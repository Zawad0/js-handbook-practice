
console.log(typeof null) 
//assuming it would just show null as output as null is a primitive data type

//output : object

/*
Explination : 
In JS the type of null is object because of a historical bug which continues to persist even in modern JS versions.
In the first version of JavaScript, values were stored in 32-bit units. These units consisted of a value and a 1-to-3 bit type tag used to 
quickly identify the data type. 
000 was the type tag designated for objects.
null was represented as the null pointer, which meant it was encoded as all zeros (0x00).
When the typeof operator looked at the value for null, it checked the first three bits, saw 000, and incorrectly evaluated it as an "object". 

The bug was kept intentionally to preserve backwards compatibility as JS runs on alot of older websites on the internet. Fixing this bug would cause
multiple sites to break.

Brendan Eich, the creator of JavaScript, has publicly acknowledged this as an unintended mistake

*/
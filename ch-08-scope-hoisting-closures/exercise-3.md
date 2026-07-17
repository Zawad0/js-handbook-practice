# Explaining Closers
> Closers are basically functions within a function that can remember the variables of the outer function even after the outer function finishes execution. If `start()` is a function with `distance` being its variable and `step()` is its inner function, then `step()` can access that  `distance` variable even after `start()` finished executing. This allows `distance` to be private unless we choose to access it with a specific function like `step()`.

```javascript
function start(){
    let distance = 0;

    return function step(){
        distance++;
        return console.log(distance);
    }
}

const racer1 = start();
racer1();
```

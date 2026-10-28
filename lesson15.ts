function identity<T> (value: T): T{
    return value;
}

identity("Samad");
identity(100);
identity(true);

function getLastItem<T>(value: T[]): T |undefined{
    return value[value.length - 1];
}

console.log(getLastItem([10, 20, 30]));
console.log(getLastItem(["Apple", "Mango", "Orange"]));
console.log(getLastItem([]));



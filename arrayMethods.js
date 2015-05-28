//var nameArray = ['Ray', 'Farias'];
var nameArray = [];
nameArray.push("Daniel");
nameArray.push("Turner");
//nameArray.push(myArray);

var genericNumberArray = [1, 2, 3, 4, 5];
genericNumberArray = genericNumberArray.concat([6,7,8,9,10]);

var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var popResult = colors.pop();

console.log(colors);

var scrambledWords = ['win', 'the', 'for', 'burritos'];
scrambledWords.reverse();

console.log(scrambledWords);

var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
phoneNumber.reverse();

var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var nextOrder = orderQueue.shift();

var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
mixedNums.sort();

var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
mixedWords.sort();

var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var notFruit = fruitCollection.splice(1,3);

var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
gemBox.splice(5,2);
gemBox.splice(6,4);

var upToTen = [1, 2, 9, 10];
upToTen.splice(2,0,3,4,5,6,7,8);

var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
brownOnly.splice(1,5,'brown','brown','brown');

var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var orderedValuesNewLength = orderedValues.unshift(1,2,3);
//orderedValues.sort();

var randomThingsArray = genericNumberArray.concat(colors);
var updatedOrders = orderQueue.concat([{takeOut:'stuff'}, {takeOut: 'morestuff'}]);

var sentence = scrambledWords.join(' ');
var myFruits = fruitCollection.join(' + ');

//var favoriteColor = colors.

var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var favoriteFriends = friends.slice(1,3);
var owesMoney = friends.slice(3);

console.log(owesMoney);

var favoriteColor = colors.lastIndexOf('Red');

var favoriteEvenNumber = mixedNums.lastIndexOf(76);

var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var monthNameString = monthNames.join();

var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];
var lastNine = bulkNumbers.lastIndexOf(9);
var lastFive = bulkNumbers.lastIndexOf(5);

//var nameArray = ['Ray', 'Farias'];
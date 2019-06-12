//题目一
let user = {};
user.name = 'John';
user.surname = 'Mike';
user.name = 'Peter';
delete user.name;

//题目二
var fruit = {
	apple: 20,
	pear: 20,
	peach: 10
};
// write your code here...
let count = 0;
for(let fruitKey in fruit) {
	count += fruit[fruitKey];
}
console.log(count);	//50
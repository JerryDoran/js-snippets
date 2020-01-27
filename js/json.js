const str = `{
    "data": [
        { 
            "shoppingCart": "ABC123",
            "items": ["123", "456"]
        }]
}`;

const obj = {
  data: [{ shoppingCart: 'ABC123', items: ['123', '456'] }]
};

console.log(str);
console.log(obj.data[0].shoppingCart);
console.log(obj.data[0].items[0]);

// Use JSON parse function for strings
console.log(JSON.parse(str).data[0].shoppingCart);
console.log(JSON.parse(str).data[0].items[1]);

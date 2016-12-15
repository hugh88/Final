class Cart{
  //What is the first part of every class? Type it below.
constructor(itemList,itemQuantity){
  this.itemQuantity = [];
  this.itemList = [];
}
  //Type the instance functions below this comment.
addItem(){
let q = itemQuantity.push();
let i = itemList.push();
}
totalCart(){
  let total = 0;
  for(var c=0; c < this.itemList[].length;c++)
    total = total+this.itemlist[c].price+this.itemQuantity[c]

return total;
}
subCart(days){
    let subCart = new Cart();
      for(var c=0; c < this.itemList[].length;c++)
        if(this.itemList[c].shipping == days){
          subCart.itemList.push(this.itemList[c]);
          subCart.itemQuantity.push(this.itemQuantity[c]);
        }
return subCart;
}
}

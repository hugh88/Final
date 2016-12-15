class Cart{
  //What is the first part of every class? Type it below.
constructor(i,q){
  this.itemQuantity = q;
  this.itemList = i;
}
  //Type the instance functions below this comment.
addItem(){
let q = this.itemQuantity.push();
let i = this.itemList.push();
}
totalCart(){
  let total = 0;
  for(var c=0; c < this.itemList[].length;c++)
    total = total+this.itemlist[c].price+this.itemQuantity[c]

return total;
}
subCart(days){
    let subCart = new Cart([],[]);
      for(var c=0; c < this.itemList[].length;c++)
        if(this.itemList[c].shipping == days){
          subCart.itemList.push(this.itemList[c]);
          subCart.itemQuantity.push(this.itemQuantity[c]);
        }
return subCart;
}
}

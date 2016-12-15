class Password{
  //The first part of the class.
constructor(k,p){
  this.privatekey = k;
  this.publickey = p;
}


  //Instance functions below this comment.
validPublicKey(){
  if(this.publickey.length > 8 && this.publickey.length <= 25)
    return true;

  else()
    return false;
}


  //Static function below this comment.
}

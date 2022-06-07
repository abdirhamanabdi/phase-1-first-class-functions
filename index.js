function receivesAFunction(callback) {
    callback(callback)
  }
  

  
  function returnsANamedFunction (){
      return function (){

      }
  }

  

 

  function returnsAnAnonymousFunction () {
    return function () {  
        return "something"
    }
}
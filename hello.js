function sayHello(name){
  if (name != null) {
    console.log("Hello, "+ name);
    return 0;
  };
  console.log("Hello, world");

};

sayHello();
sayHello("dank");
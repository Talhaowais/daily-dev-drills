    const mynum = [1,2,3,4,5,6,7,8,9,10]
    const newnum = mynum 
                    .map( (num) => num*10)
                    .map( (num) => num+1)
                    .filter( (num) => num > 40)

    // console.log(newnum);


    // reduce uper sa gya ha fr sa dkhna ha video 30 // re-wwatching
    const num = [1,2,3]
    const totalnum = num.reduce((acc, num) => acc + num, 0 )
    //console.log(totalnum);

    //playing with reduce 
    const shoppingCart = [
  {
    itemName: "js course",
    price: 2999
  },
  {
    itemName: "py course",
    price: 2499
  },
  {
    itemName: "react course",
    price: 3999
  },
  {
    itemName: "node course",
    price: 3499
  },
  {
    itemName: "css course",
    price: 1999
  },
  {
    itemName: "html course",
    price: 1499
  },
  {
    itemName: "typescript course",
    price: 3299
  },
  {
    itemName: "nextjs course",
    price: 4299
  },
  {
    itemName: "mongodb course",
    price: 2799
  },
  {
    itemName: "fullstack course",
    price: 5999
  }
];
    const mytotal = shoppingCart.reduce((acc, item) => acc + item.price, 0);
    console.log(mytotal);

    
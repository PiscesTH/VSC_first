const arr = ['apple', 'banana', 'orange']
for (let index in arr) {    //js에서 배열과 for문 사용하는 또다른 방법. 일반적인 for문도 가능하다.
    console.log(arr[index]);
}
for(let i = 0; i <arr.length; i++){
    console.log(arr[i]);
}

const obj = {   //객체도 가능
    name: 'jim',
    age: 20
};
for (let key in obj){   //객체는 key
    console.log(obj[key]);
}
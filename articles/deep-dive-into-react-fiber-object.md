---
title: "Deep dive into React Fiber object | React Node"
date: "2022-04-04"
og:
  description: "Async and await are javascript keywords used to handle asynchronus programming."
  image: "https://telmo.im/og/youdontsuck.png"
author:
  twitter: "akash_webdev"
  name: "Akash Bhandwalkar"
---

I always wondered about what is virtual DOM or How different is virtual DOM from real DOM. We will try to understand what happens behind the scene when you declare any component in ReactJS.


---
Let's figure out what does fiber look like for the below Counter component.

```js

const counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }
  return (
  	<div>
      <span> { count } </span>
      <button onClick={increment}> click me </button>
    </div>
  )
}

```

---

Before jumping to actual Fiber node, let's understand what we are really asking react to do.

```js

const counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }
  return (
    [
      React.createElement(
        'div',
        {
          children: [
            React.createElement(
              'span',
              {},
              count
            ),
            React.createElement(
              'button',
              {
                onClick: increment
              },
              'click me'
            )
          ]
        }
      )
    ]
  )
}

```

---

Now, we are set to know what React.createElement returns to us.

```js
[
    {
        $$typeof: Symbol(react.element),
        type: 'span',
        props: {
            children: '0',
        }
    },
    {
        $$typeof: Symbol(react.element),
        type: 'button',
        onClick: 
        props: {
            children: 'click me',
            onClick: () => { increment() }
        }
    }
]

```

## What is async?

The javascript keyword async is used to declare asynchronous functions, and the await keyword is allowed to be used inside them. When you declare a function async, it responds with a promise. Returning a promise from an async function is not required, but whatever you return from it is received as a promise by its callee.

---

Example one when success is returned.

```js

const getResult = async () => {
  return 'You have passed the exam';
}

const result = getResult();

console.log(result); // Promise {<fulfilled>: 'You have passed the exam'}

```

As you see we are returning string from it but when you print the result it says **promise**.

---

Example two when error is returned.

```js

const getResult = async () => {
  trhow 'something went wrong';
}

const result = getResult();

console.log(result); // Promise {<rejected>: 'something went wrong'}

```



## What is await?

The javascript keyword await is used to wait for the data from the asynchronus function.

---

Example one when success is returned.

```js

const getUserDetails = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve({ 
        id: 1,
        enrollmentNo: '123'
      });
    }, 300);
  })
}

const user = await getUserDetails();

console.log(user); // 'You have passed the exam'

```

Our asynchronus function, as you can see, returns the data without error, hence our result prints the data. One more thing to notice, our *console.log *waits until the *getUserDetails* resolves.

---

Example two when error is returned.

```js

const getUserDetails = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      reject('something went wrong');
    }, 300);
  })
}

const user = await getUserDetails();

console.log(user); // Uncaught something went wrong

```
Our asynchronus function, as you can see, returns the data **with** error, hence we see the uncaught error.

---

## How to handle the erros using await

To handle any possible errors received from the asynchronus function, we can utilise the try/catch block.

```js

const getUserDetails = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      reject('something went wrong');
    }, 300);
  })
}

try {
  const user = await getUserDetails();
  // Handle success here
} catch(error) {
  // Handle error here
}

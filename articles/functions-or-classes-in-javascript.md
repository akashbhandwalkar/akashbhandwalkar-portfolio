---
title: "Async and await in JavaScript!"
date: "2022-04-04"
og:
  description: "Async and await are javascript keywords used to handle asynchronus programming."
  image: "https://telmo.im/og/youdontsuck.png"
author:
  twitter: "akash_webdev"
  name: "Akash Bhandwalkar"
---

Working with asynchrnous writing computer programs is tricky for quite a long time in JavaScript. Promise and Callback pair is taking care of the issue yet the design of Promise makes code looks smidgen difficult to peruse. It's not extremely challenging to unravel how Promises functions in any case, dealing with various sequential Promises is bit troublesome. I concur the Promise chain makes it look simpler yet there is chomped more straightforward code with async and anticipate pair.


---

How does promise work in JavaScript?
```js

// Returns User details in Promise object
const getUserDetails = (id) => {
  return http.get(`domain.com/${id}`);
}

// Handling Asynchronus Function
getUserDetails(1)
  .then(user => {
    // Handle success here
  })
  .catch(error => {
    // Handle error here
  })


```

---

Another example where we are handling sequencial asynchonus call.


```js


// Returns User details in Promise object

const getUserDetails = (id) => {
  return http.get(`domain.com/user/${id}`);
}

// Returns User's result based on enrollment Id received in earlier Promise object

const getResult = (enrollmentNo) => {
  return http.get(`domain.com/result/${enrollmentNo}`);
}

// Handling Asynchronus Function
getUserDetails(1)
  .then(user => {
    return getResult(user.enrollmentNo)
  })
  .then(result => {
    // Handle result response here
  })
  .catch(error => {
    // Handle error here
  })

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

As you see we are returning string from it but when you print the result it says **promise**.

---
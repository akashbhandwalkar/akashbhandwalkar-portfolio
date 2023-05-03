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
        ref: null,
        key: null,
        props: {
            children: '0',
        }
    },
    {
        $$typeof: Symbol(react.element),
        type: 'button',
        ref: null,
        key: null,
        props: {
            children: 'click me',
            onClick: () => { increment() }
        }
    }
]

```

Now, let's debug through code and see what react returns on the top level.

![Alt text](/assets/mini-version-of-fiber-node.png)


Now, we are ready to see detailed fiber node when hooks and complex logic is attached. React saves a lot of information in terms of dependencies, effects.

![Alt text](/assets/max-version-of-fiber-node.png)

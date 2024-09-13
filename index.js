import React from 'react';
import ReactDOM from 'react-dom/client';


// const head = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     name: "abc",
//   },
//   "Hello World by React!"
// );

// const Head = () => (
//   <h1 id='heading' name='abc'>Hello World by React!</h1>
// )

// console.log(head); // React Element, a plain JS object

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     head,
//     React.createElement("h2", {}, "I'm a h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     head,
//     React.createElement("h2", {}, "I'm a h2 tag"),
//   ]),
// ]);

// console.log(parent);

// const jsxParent = (
//   <div id="parent">
//     <Head/>
//     <h2>I'm a h2 tag</h2>
//     <Head/>
//     <h2>I'm 2nd h2 tag</h2>
//   </div>
// );

const Title = () => (
  <h1 className='heading'>
    Namaste React using JSX 🙏
  </h1>
);

const Heading = () => (
  <div id='container'>
    <Title/>
    <h2>Namaste React Functional Components</h2>
  </div>

);

const main = ReactDOM.createRoot(document.getElementById("root"));
// main.render(head);
// main.render(parent);
main.render(Heading());
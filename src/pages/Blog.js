import React from "react";
import Navbar from "../components/Navbar";

const Blog = () => {
  return (
    <div>
      <Navbar/>
      <div className="mx-4 lg:mx-20 border my-10 p-4 lg:py-20 lg:px-40 text-center">
      <h2 className="text-2xl">Questions and Answers</h2>
      <hr />

      <div className="mt-10">
        <h4 className="text-md font font-semibold">
          What are the different ways to manage a state in a React application
        </h4>
        <p>
          <span className="text-gray-600 font-semibold">
            There are four ways to manage a state
          </span>
          <br />
          i. Local State: by adding a state on the local component we can manage
          the state but to pass that data we have to send it via props.
          <br />
          ii. Global State: is used to access the state globally. This does not
          need to pass data from one component to another to access the data.
          <br />
          iii. Server State: recieves data from an external server that must be
          integrated with UI state.
          <br />
          iv. URL State: data that contains on the url. Recieve data using
          pathname, query parameter.
        </p>
      </div>

      <div className="mt-10">
        <h4 className="text-md font font-semibold">
          How does prototypical inheritance work?
        </h4>
        <p>
          prototypical inheritance means accessing methods from one object to
          another object. When ever we create an object javascript creates some
          hidden properties and functions. By using .__proto__. we can check the
          javascript methods and functions.So, when we create an object or even
          a function by adding a dot javascript allows us to access the
          properties of the function or object.
        </p>
      </div>

      <div className="mt-10">
        <h4 className="text-md font font-semibold">
          Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts?
        </h4>
        <p>
          if we use products = [...] instead of state then , when we need to
          pass the data to another component then it will not rerender the value
          even if we update. but in state when we pass data even in another
          component after updating its data, it will rerender and update the
          value.
        </p>
      </div>

      <div className="mt-10">
        <h4 className="text-md font font-semibold">
          You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h4>
        <code>
          const products = &#91; &#123;name: "abu",price:30&#125;,
          &#123;name:"khabu",price:50&#125;,
          &#123;name:"dabu",price:70&#125;,&#123;name:"ghumabu",price:100&#125;
          &#93;; <br />
          const search = "Dabu";
          <br />
          const searched =
          products.find&#40;p&#61;&#62;p.name.toLowerCase&#40;&#41;.includes&#40;search.toLowerCase&#40;&#41;&#41;&#41;;
          <br />
          console.log&#40;searched&#41;;
        </code>
      </div>

      <div className="mt-10">
        <h4 className="text-md font font-semibold">
          What is a unit test? Why should write unit tests?
        </h4>
        <p>
          <span className="text-gray-600 font-semibold">Unit Test:</span> unit test means testing each unit of software to check if
          the software is performing as aspected or is there any issue or to
          solve. <br/> <span className="text-gray-600 font-semibold">Why :</span> Developers looking to learn what functionality is
          provided by a unit and how to use it can look at the unit tests to
          gain a basic understanding of the unit API. Unit test ensure the
          product quality and resolves bugs before production. Unit testing is
          very important to make sure if the product is qualified for
          production.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Blog;

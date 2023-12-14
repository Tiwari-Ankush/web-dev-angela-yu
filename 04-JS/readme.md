JAVASCRIPT ANGELA YU

compiled vs interpreted yt link
https://www.youtube.com/watch?v=_C5AHaS1mOA&ab_channel=BitsandBytesTVO


History of JS
**JavaScript** is a widely used, versatile, and high-level programming language primarily known for its role in web development. It allows developers to add interactivity, functionality, and dynamic behavior to websites and web applications.

***few concepts***
Let's briefly cover each of these:

**1. JScript:**
- **JScript** is a scripting language developed by Microsoft. It is essentially Microsoft's version of JavaScript with some proprietary extensions.
- JScript was commonly used in Microsoft technologies like Internet Explorer and Active Server Pages (ASP).

**2. LiveScript:**
- **LiveScript** is the predecessor to JavaScript, created by Netscape.
- To capitalize on the popularity of Java at the time, Netscape initially named its scripting language LiveScript. However, to leverage the growing success of Java, Netscape later changed the name to JavaScript.

**3. ECMAScript:**
- **ECMAScript** is the standard upon which JavaScript is based. It is a scripting language specification developed by Ecma International.
- JavaScript conforms to the ECMAScript specification, and the terms are often used interchangeably.
- ECMAScript specifies the core features that a scripting language should provide and how those features should be implemented.

**4. ES5 (ECMAScript 5):**
- **ECMAScript 5** is the fifth edition of the ECMAScript standard, published in December 2009.
- It introduced significant features, including strict mode, which helps catch common coding errors and prevents the use of certain error-prone features.
- Many of the JavaScript engines in browsers supported ES5, making its features widely adopted.

**5. ES6 (ECMAScript 2015) and Beyond:**
- **ECMAScript 2015 (ES6)** is the sixth edition of the ECMAScript standard, published in June 2015.
- ES6 introduced several new features and improvements to the language, such as arrow functions, template literals, and the `let` and `const` keywords for variable declaration.
- Following ES6, ECMAScript introduced yearly updates, such as ES2016, ES2017, and so on, each bringing new features and improvements to the language.
- These yearly updates are often collectively referred to as ECMAScript 20XX, where XX represents the publication year of the standard.





**Evolution of JavaScript:**
- **1995:** JavaScript was created by Brendan Eich at Netscape Communications Corporation.
- **1996:** It was submitted to ECMA International for standardization, resulting in ECMAScript, the official specification for the language.
- **2000s:** JavaScript became a fundamental technology for web development, used in conjunction with HTML and CSS.
- **2009:** The introduction of Node.js allowed JavaScript to run on the server-side, expanding its capabilities beyond the browser.
- **2010s:** The rise of popular JavaScript libraries and frameworks, such as jQuery, Angular, React, and Vue, made web development more efficient and powerful.
- **2020s:** JavaScript continues to evolve with ES2020 and future ECMAScript updates, improving language features and performance.

JavaScript's evolution has led to its usage in both front-end and back-end development, as well as in other contexts, making it one of the most influential programming languages in the modern software landscape.




***differences between Java and JavaScript:***

**1. **Purpose and Use:**
   - **Java:** Primarily used for server-side development, building large-scale enterprise applications, Android app development, and general-purpose programming.
   - **JavaScript:** Primarily used for client-side web development, enhancing interactivity in web browsers, and building dynamic user interfaces.

**2. **Execution Environment:**
   - **Java:** Java applications run in a standalone Java Virtual Machine (JVM), allowing them to be platform-independent.
   - **JavaScript:** JavaScript is executed directly in web browsers, making it a client-side scripting language.

**3. **Syntax and Design:**
   - **Java:** Has a syntax similar to C++, is a statically-typed language, and uses classes and object-oriented programming principles.
   - **JavaScript:** Has a syntax influenced by C, is a dynamically-typed language, and supports both procedural and object-oriented programming.

**4. **Typing:**
   - **Java:** Statically-typed, meaning variable types must be declared before compilation.
   - **JavaScript:** Dynamically-typed, meaning variable types are determined at runtime.

**5. **Mobile Development:**
   - **Java:** Widely used for Android app development.
   - **JavaScript:** Used with frameworks like React Native and Flutter for cross-platform mobile app development.



***key points regarding browser support for Java:***

Limited Support: Major web browsers, including Chrome, Firefox, Safari, and Microsoft Edge, have deprecated or completely removed support for Java applets.

Security Concerns: Java applets were known for security vulnerabilities, making them a target for malicious activities. Browsers moved away from supporting technologies with potential security risks.

Plugin Deprecation: Browsers have been deprecating and removing support for NPAPI plugins, including Java plugins, in favor of more secure and efficient web technologies.

Modern Alternatives: Web technologies such as HTML5, JavaScript, and WebAssembly have become the standard for web development, providing a more secure and versatile platform than Java applets.

Enterprise Usage: Some legacy systems and enterprise applications may still rely on Java, but the trend is towards migrating to more modern and secure solutions.


**JavaScript Alerts (Adding Behavior to Websites):**

- JavaScript allows you to add interactivity to websites through various features, including pop-up alerts.
- You can create alerts using the `alert()`, `confirm()`, and `prompt()` functions.
- `alert()` displays a simple pop-up message, `confirm()` shows a confirmation dialog with "OK" and "Cancel" buttons, and `prompt()` prompts the user for input.





**Data Types in JavaScript:**
- JavaScript has several data types, including:
  - **Primitive Data Types:** These include `number`, `string`, `boolean`, `null`, `undefined`, and `symbol`.
  - **Object Data Type:** This includes complex data structures like arrays, functions, and custom objects.
  - **Special Data Types:** There are additional data types like `NaN` (Not-a-Number) and `Infinity` for special values.






**JavaScript Variables (In Short):**
- Variables in JavaScript are used to store and manage data.
- To declare a variable, use the `var`, `let`, or `const` keyword.
- `var` has function-level scope, `let` and `const` have block-level scope.
- Variables can store different data types, and you can change their values during the program's execution.
- Example variable declarations:
  ```javascript
  var x = 5;       // Function-scoped variable
  let y = "Hello"; // Block-scoped variable
  const z = true;  // Block-scoped constant
  ```




***Naming and naming conventions in JavaScript***:

- Use meaningful and descriptive names for variables and functions.
- Use camelCase for multi-word names (e.g., `myVariableName`).
- Constants should be in UPPERCASE_SNAKE_CASE (e.g., `MAX_VALUE`).
- Constructor functions should use PascalCase (e.g., `Person`).
- Object properties follow the same naming conventions as variables.
- Function parameters should use camelCase (e.g., `calculateTaxRate(incomeAmount)`).
- Prefix private or non-public variables with an underscore (e.g., `_privateVariable`).
- Minimize the use of global variables to reduce naming conflicts.
- For acronyms, use consistent capitalization (e.g., `XMLHttpRequest`).
- Be consistent with your chosen naming style throughout your codebase.
- Avoid using JavaScript reserved words or keywords as names.
- Choose context-appropriate names for better code understanding.
- Balance clarity and brevity to avoid overly long names.




****String****

***1. String Concatenation:***
   - **Description:** Concatenation is the process of combining strings.
   - **Example:**
     ```javascript
     let firstName = "John";
     let lastName = "Doe";
     let fullName = firstName + " " + lastName;
     console.log(fullName); // Output: John Doe
     ```

***2. String Length:***
   - **Description:** The `length` property retrieves the number of characters in a string.
   - **Example:**
     ```javascript
     let message = "Hello, World!";
     let length = message.length;
     console.log(length); // Output: 13
     ```

***3. Retrieving the Number of Characters:***
   - **Description:** Use the `length` property to get the number of characters in a string.
   - **Example:**
     ```javascript
     let text = "JavaScript";
     let charCount = text.length;
     console.log(charCount); // Output: 10
     ```

***4. Slicing and Extracting Parts of a String:***
   - **Description:** Use `slice(startIndex, endIndex)` to extract a portion of a string.
   - **Example:**
     ```javascript
     let sentence = "This is a sample sentence.";
     let extracted = sentence.slice(5, 12);
     console.log(extracted); // Output: is a sa
     ```





***1. Changing Casing in Text:***
   - **Description:** You can change the casing of a string to uppercase or lowercase.
   - **Examples:**
     ```javascript
     let text = "Hello, World!";
     let uppercaseText = text.toUpperCase();
     let lowercaseText = text.toLowerCase();
     console.log(uppercaseText); // Output: HELLO, WORLD!
     console.log(lowercaseText); // Output: hello, world!
     ```

***2. Basic Arithmetic and Modulo Operator:***
   - **Description:** JavaScript supports basic arithmetic operations such as addition, subtraction, multiplication, and division. The modulo operator `%` returns the remainder after division.
   - **Examples:**
     ```javascript
     let sum = 10 + 5; // Addition
     let difference = 10 - 5; // Subtraction
     let product = 10 * 5; // Multiplication
     let quotient = 10 / 5; // Division
     let remainder = 10 % 3; // Modulo
     console.log(sum, difference, product, quotient, remainder);
     ```

***3. Increment and Decrement Expressions:***
   - **Description:** Increment (`++`) increases a variable's value by 1, and decrement (`--`) decreases it by 1.
   - **Examples:**
     ```javascript
     let count = 5;
     count++; // Increment by 1
     console.log(count); // Output: 6

     let number = 8;
     number--; // Decrement by 1
     console.log(number); // Output: 7
     ```


***1. Functions in JavaScript:***
   - **Description:** Functions are blocks of reusable code that perform a specific task. They help organize code and make it more modular.
   - **Example:**
     ```javascript
     function greet() {
       console.log("Hello, there!");
     }

     // Calling the function
     greet(); // Output: Hello, there!
     ```

***2. Creating and Calling Functions:***
   - **Description:** To create a function, use the `function` keyword followed by the function name and a block of code. To call a function, use the function name followed by parentheses.
   - **Example:**
     ```javascript
     function addNumbers(a, b) {
       let sum = a + b;
       console.log(sum);
     }

     // Calling the function with arguments
     addNumbers(5, 3); // Output: 8
     ```

***3. Parameters and Arguments of a Function:***
   - **Description:** Parameters are variables in the function definition, and arguments are the values passed to the function when it's called.
   - **Example:**
     ```javascript
     function multiply(a, b) {
       let result = a * b;
       console.log(result);
     }

     // Calling the function with arguments
     multiply(4, 6); // Output: 24
     ```

***4. Function Outputs and Return Values:***
   - **Description:** Functions can return values using the `return` keyword. The returned value can be used or assigned to a variable.
   - **Example:**
     ```javascript
     function square(x) {
       return x * x;
     }

     // Using the returned value
     let result = square(3);
     console.log(result); // Output: 9
     ```

These examples demonstrate the creation and calling of functions, passing parameters and arguments, and returning values from functions in JavaScript. Functions are a fundamental building block for structuring and organizing code.
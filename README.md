<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>DynamicFlow Website</title>
</head>
<body>

<h1>DynamicFlow Website</h1>

<p>DynamicFlow is a full-stack web application built using React, Node.js, and MySQL. It provides a dynamic and interactive platform for users to manage their notes, interact with Gemini AI Bot, and access various functionalities through a secure login system.</p>

<h2>Features</h2>

<ul>
  <li><strong>User Authentication:</strong> Secure user authentication system implemented using JSON Web Tokens (JWT). Users can sign up, log in, and log out securely.</li>
  
  <li><strong>Admin Panel:</strong> Admins have access to an admin panel where they can view, delete, and edit user accounts.</li>

  <li><strong>Notes Management:</strong> Users can create, view, and delete their notes. This feature allows users to keep track of important information in an organized manner.</li>

  <li><strong>Profile Management:</strong> Users can view and update their profile information, ensuring their details are always up to date.</li>

  <li><strong>Gemini AI Bot Integration:</strong> Interact with Gemini AI Bot for various tasks and queries, enhancing user experience and providing additional functionalities.</li>
</ul>

<h2>Technologies Used</h2>

<ul>
  <li><strong>Frontend:</strong> React.js</li>
  <li><strong>Backend:</strong> Node.js</li>
  <li><strong>Database:</strong> MySQL</li>
  <li><strong>Authentication:</strong> JSON Web Tokens (JWT)</li>
</ul>

<h2>Setup</h2>

<ol>
  <li><strong>Clone the repository:</strong><br>
   <code>git clone https://github.com/your-username/dynamicflow.git</code></li>
   
  <li><strong>Install dependencies:</strong><br>
   <code>cd dynamicflow<br>npm install</code></li>

  <li><strong>Database Setup:</strong><br>
   Set up your MySQL database and update the database configuration in <code>server/config/db.config.js</code>.</li>

  <li><strong>Start the server:</strong><br>
   <code>npm start</code></li>

  <li><strong>Run the client:</strong><br>
   <code>cd client<br>npm start</code></li>

  <li><strong>Access the application:</strong><br>
   Open your web browser and navigate to <code>http://localhost:3000</code>.</li>
</ol>
<h2>Setting Up Environmental Variables</h2>

<p>Before running the backend server, ensure that you have set up all the necessary environmental variables. These variables typically include sensitive information such as database credentials, API keys, and other configurations. Follow these steps to set up environmental variables:</p>

<ol>
  <li><strong>Create a <code>.env</code> File:</strong> In the root directory of the backend repository, create a new file named <code>.env</code>. This file will store all your environmental variables.</li>
  
  <li><strong>Define Environmental Variables:</strong> Inside the <code>.env</code> file, define each environmental variable on a new line using the following format:
    <pre><code>VARIABLE_NAME=variable_value</code></pre>
    Replace <code>VARIABLE_NAME</code> with the name of the environmental variable and <code>variable_value</code> with its corresponding value.</li>
<h2>Screenshots</h2>

<img src="https://i.ibb.co/0cvtxXz/dynamic-signin.jpg" alt="dynamic-signin" alt="Screenshot 1">
<img src="https://i.ibb.co/GQTLkWF/dynamic-user.jpg" alt="dynamic-user" alt="Screenshot 2">
<img src="https://i.ibb.co/GRwFy01/dynamic-bot.jpg" alt="dynamic-bot" alt="Screenshot 2">
<img src="https://i.ibb.co/Vmhbm9k/dynamic-notes.jpg" alt="dynamic-notes" alt="Screenshot 2">
<img src="https://i.ibb.co/0XN6xWJ/dynamic-admin.jpg" alt="dynamic-admin" alt="Screenshot 2">

<h2>Contributing</h2>

<p>Contributions are welcome! Please feel free to submit pull requests to enhance the functionality or fix any bugs.</p>

<h2>License</h2>

<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

</body>
</html>

 
 

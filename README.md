# Basics of Server with Node.js

This project demonstrates a **basic HTTP server built using Node.js** without any external frameworks.
It shows how to handle different **routes (URLs)** and send appropriate responses to the client.

The goal of this project is to understand the **fundamentals of backend development**, including how servers receive requests and send responses.

---

##  Features

* Create a simple HTTP server using Node.js
* Handle multiple routes
* Send different responses based on URL
* Return proper HTTP status codes
* Demonstrate the basic **request–response cycle**

---

##  Technologies Used

* Node.js
* HTTP Core Module

---

##  Project Structure

```
server-node.js
README.md
```

---

## How It Works

The server listens on:

```
http://127.0.0.1:3131
```

When a user sends a request, the server checks the **requested URL** and responds accordingly.

### Available Routes

| Route           | Description    | Response              |
| --------------- | -------------- | --------------------- |
| `/`             | Home route     | Hello!! What's up!!   |
| `/greetings`    | Greeting route | Thanks for everything |
| Any other route | Not found      | 404 not found         |

---

##  Running the Server

1. Make sure **Node.js is installed**

Check version:

```
node -v
```

2. Run the server

```
node server-node.js
```

3. Open your browser and visit:

```
http://127.0.0.1:3131
```

---

##  Example URLs

Home route:

```
http://127.0.0.1:3131/
```

Greeting route:

```
http://127.0.0.1:3131/greetings
```

Invalid route example:

```
http://127.0.0.1:3131/anything
```

Response:

```
404 not found
```

---

##  Learning Purpose

This project helps beginners understand:

* How Node.js servers work
* How HTTP requests are processed
* How to implement basic routing
* How to send responses using the HTTP module

---



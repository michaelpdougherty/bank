# Sign up for Amazon AWS
https://portal.aws.amazon.com/billing/signup#/start

# Technologies Used
GitHub
BASH / Shell
Amazon Web Services (cloud computing)
RDS = Relational Database Service
Amazon Aurora (MySQL)
MySQL Community Server

# EC2 = Elastic Cloud Computer
Operating system = Amazon Linux (CentOS/Fedora)
Web server / Reverse proxy = Apache / httpd
Application server = Node.js using Express.js

Node.js imports the node mysql package
Node.js listens on port :3000 using Express.js
Visiting endpoint triggers MySQL query (connected to RDS)
Result is passed into templating software to dynamically structure
the webpage (Pug)

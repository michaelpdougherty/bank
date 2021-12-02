# Sign up for Amazon AWS
Access to free Managed Relational Database and Elastic Cloud Compute

Must activate account with debit card
https://portal.aws.amazon.com/billing/signup#/start

# Sign up for GitHub
Allows you to save your code projects

Used in all coding work

# Locate your computer's command line interface (CLI)
Windows:
  Press WINDOWS + R
  Enter cmd.exe

If you have Windows Powershell installed, use that instead (Unix shell)

MacOS Terminal (Unix shell)

https://en.wikipedia.org/wiki/Unix_shell

# Secure Shell (SSH)
Allows you to connect to remote computers

Easy SSH client as Google Chrome extension:
https://chrome.google.com/webstore/detail/secure-shell/iodihamcpbpeioajjeobimgagajmlibd/related

Not necessary if you have MacOS or PuTTY installed

# RDS = Relational Database Service
Relational = Primary keys in one table, relative keys in another table


Local hosting = MySQL Community Server
Cloud hosting = Amazon Aurora (MySQL-based)

# EC2 = Elastic Cloud Computer
Elastic = 

Cloud Instance => Virtual Remote PC

Operating system = Amazon Linux (CentOS/Fedora)
Controlled with SSH (Unix commands)

# Apache / httpd
Apache is a web server

https://www.wpbeginner.com/glossary/apache/
Web server / Reverse proxy = Apache / httpd

# Node.js Application Server
Node.js runs JavaScript code on an operating system

Uses Express.js to listen on port 3000
https://expressjs.com/

Uses mysql npm package to connect to AWS database server
https://github.com/mysqljs/mysql

# Reverse proxy
Root privileges are required to listen on protected ports
This includes 22 (SSH), 80 (HTTP), and 443 (HTTPS)

Apache reverse proxy configuration redirects HTTP traffic to Node
This way, Node.js does not run on port 80 with root privileges (insecure)

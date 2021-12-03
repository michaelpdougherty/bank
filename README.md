# Make a GitHub account
GitHub is a website and cloud service that lets you save code online

It is extremely useful in all computer science work

It is based on ***git*** and ***version control***

https://kinsta.com/knowledgebase/what-is-github/




# Apache / httpd
Apache is the world's most popular ***web server*** software

A web server accepts ***HTTP requests*** and returns ***HTML documents*** (how all websites work)

https://www.wpbeginner.com/glossary/apache/

Apache also allows ***virtual hosting*** and can act as a ***reverse proxy***

https://en.wikipedia.org/wiki/Virtual_hosting

https://en.wikipedia.org/wiki/Reverse_proxy




# Cloud Computing
Cloud computing = the practice of using a network of remote servers hosted on the internet to store, manage, and process data, rather than a local server or a personal computer

Cloud computing = ***Use of machine resources over the Internet***

# Sign up for Amazon Web Services
AWS ***IS*** CLOUD COMPUTING

https://aws.amazon.com/what-is-aws/

https://aws.amazon.com/what-is-cloud-computing/

You can use it for free as long as you activate your account with a debit card

https://portal.aws.amazon.com/billing/signup#/start


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
Relational = Primary keys in one table, foreign keys in another table

Allows you to connect multiple data tables

Local hosting = MySQL Community Server

Cloud hosting = Amazon Aurora (MySQL-based)


# EC2 = Elastic Cloud Compute
Resources = memory, storage, processing power, etc.
Cloud Instance => Virtual Remote PC

Elastic = More/less resources according to need

Operating system = Amazon Linux (CentOS/Fedora)

Controlled with SSH (Unix commands)



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

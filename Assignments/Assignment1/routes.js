const requestHandler = (req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello from Node.js!</h1>');
    res.write('<form action="/create-user" method="POST">');
    res.write('<label>Username: </label>');
    res.write('<input type="text" name="username" placeholder="Enter your name">');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    return res.end();
  }

  if (req.url === '/users' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>User List</h1>');
    res.write('<ul>');
    res.write('<li>User 1</li>');
    res.write('<li>User 2</li>');
    res.write('<li>User 3</li>');
    res.write('</ul>');
    return res.end();
  }

  if (req.url === '/create-user' && req.method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split('=')[1];
      console.log('Received Username:', username);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Page not found</h1>');
  res.end();
};

module.exports = {
  handler: requestHandler
};

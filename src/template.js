// src/template.js
export default ({ body, title }) => `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${title}</title>
</head>
<body>
  <div id="app">${body}</div>
</body>
</html>
`;

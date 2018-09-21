function renderHTML(markup) {
  const script = 'client.bundle.js';

  // If in production environment, serve the client bundle from CDN

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World</title>
      </head>

      <body>
        <div id="content">${markup}</div>
        <script src="${script}" defer></script>
      </body>
    </html>
  `;
}

export default renderHTML;

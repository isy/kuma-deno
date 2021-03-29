addEventListener("fetch", (event) => {
  const html = `<html>
  <body>
     <div style='font-size:48px;display:flex;justify-content:center;align-items:center;'>🐻</div>
  </body></html>`;
  

  event.respondWith(
    new Response(html, {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/html; charset=UTF-8",
      },
    }),
  );
});

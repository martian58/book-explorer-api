import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Book Explorer API</title>
        <link rel="icon" type="image/ico" href="./public/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <style>
          body {
            background: linear-gradient(120deg, #2e026d 0%, #6d28d9 100%);
            min-height: 100vh;
            margin: 0;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
          }
          .container {
            background: rgba(30, 27, 75, 0.88);
            border-radius: 1.5rem;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
            padding: 2.5rem 2rem 2rem 2rem;
            max-width: 400px;
            text-align: center;
            border: 2px solid #a78bfa;
          }
          h1 {
            font-size: 2.2rem;
            font-weight: 800;
            margin-bottom: 0.5rem;
            color: #fde68a;
            letter-spacing: 0.03em;
          }
          .emoji {
            font-size: 2.4rem;
          }
          p {
            margin-top: 0.8rem;
            margin-bottom: 0.8rem;
            color: #e0e7ff;
            font-size: 1.15rem;
          }
          .api-link {
            display: inline-block;
            margin-top: 1.2rem;
            padding: 0.65rem 1.1rem;
            background: linear-gradient(90deg, #fde68a 65%, #f472b6 100%);
            color: #1e1b4b;
            font-weight: 700;
            border-radius: 999px;
            text-decoration: none;
            font-size: 1rem;
            box-shadow: 0 2px 8px 0 rgba(252,211,77,0.18);
            transition: background 0.2s, color 0.2s;
          }
          .api-link:hover {
            background: linear-gradient(90deg, #f472b6 0%, #fde68a 100%);
            color: #6d28d9;
          }
          .footer {
            margin-top: 2rem;
            color: #a5b4fc;
            font-size: 0.92rem;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="emoji" aria-label="books">📚</div>
          <h1>Book Explorer API</h1>
          <p>
            Welcome to the <b>Book Explorer API</b>!<br>
            Use this API to star, unstar, and discover books.<br>
            Built with <span style="color:#a78bfa;font-weight:700;">Node.js</span> &amp; <span style="color:#f472b6;font-weight:700;">Express</span>.
          </p>
          <a class="api-link" href="https://github.com/martian58/book-explorer-api" target="_blank" rel="noopener">
            View on GitHub
          </a>
          <div class="footer">
            <span>Made with <span style="color:#f472b6;">♥</span> by <b>martian58</b></span>
          </div>
        </div>
      </body>
    </html>
  `);
});

export default router;
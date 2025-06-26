import { verifyToken } from "@clerk/backend";

export async function requireClerkAuth(req, res, next) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Missing token" });

    const payload = await verifyToken(token, { secretKey: process.env.CLERK_SECRET_KEY });
    req.userId = payload.sub;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid Clerk token" });
  }
}
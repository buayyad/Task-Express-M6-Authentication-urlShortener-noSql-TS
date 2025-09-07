import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function authorize(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const header = req.headers.authorization;
  console.log(header);

  if (!header) {
    res.status(401).json({ message: "No token provided" });
    return;
  }

  const [scheme, token] = header.split(" ") || [];
  if (scheme !== "Bearer" || !token) {
    res.status(401).json({ message: "Invalid auth format" });
    return;
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!);
    (req as any).user = payload;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
    return;
  }
}

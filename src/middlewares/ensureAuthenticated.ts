import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authtoken = req.headers.authorization;

  if (!authtoken) {
    return res.status(401).end();
  }

  const [, token] = authtoken.split(' ');

  try {
    const { sub } = verify(
      token,
      '707fb94df1ad26da74b2f8a22f3f765c',
    ) as IPayload;

    req.user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).end();
  }
}

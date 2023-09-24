import { Router, Request, Response } from "express";

const router = Router();

router.get("/test", (req: Request, res: Response) => {
  //   throw new Error("Error request.");
  return res.json({ ok: true, name: "Ronald" });
});

export { router };

import { NextFunction, Request, Response } from "express";
import MarkdownService from "../../services/markdown";

export default class MarkdownController {
  public static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const markdown = await MarkdownService.getById(
        "clvbr8ctq0000nctbhydwvt01"
      );
      return res.json(markdown);
    } catch (error) {
      next(error);
    }
  }

  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { body } = req;

      const markdown = await MarkdownService.create(body);

      return res.json(markdown);
    } catch (error) {
      next(error);
    }
  }
}

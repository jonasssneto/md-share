import { Markdown } from "@prisma/client";
import { prisma } from "../prisma";

export default class MarkdownService {
  public static async getById(id: Markdown["id"]) {
    const markdown = await prisma.markdown.findUnique({
      where: {
        id,
      },
    });
    return markdown;
  }

  public static async create(data: Markdown) {
    const markdown = await prisma.markdown.create({
      data,
    });
    return markdown;
  }
}

import type { NextPageContext } from "next";

export async function POST(request: Request, context: NextPageContext) {
  console.dir(context)
}

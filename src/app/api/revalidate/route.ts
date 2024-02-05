import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

type Body = {
  path: string;
};

export async function POST(req: Request) {
  const body: Body = (await req.json()) as Body;
  revalidatePath(body.path);

  return NextResponse.json({
    revalidated: true,
    revalidatedAt: new Date().toISOString(),
    revalidatedPath: body.path,
  });
}

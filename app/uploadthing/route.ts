import { createRouteHandler } from "uploadthing/next";
import { FileRouter } from "uploadthing/next";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest } from "next/server";

export const { GET, POST } = createRouteHandler({
    router: {} as FileRouter,
});

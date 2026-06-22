import { createClient } from "@supabase/supabase-js";

export async function GET() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );

    const { data, error } = await supabase
      .from("services")
      .select("id")
      .limit(1);

    if (error) {
      return Response.json(
        { success: false, error: error.message },
        { status: 500 },
      );
    }

    return Response.json({
      success: true,
      message: "Supabase is awake",
      data,
    });
  } catch (err) {
    return Response.json(
      { success: false, error: "Keepalive failed" },
      { status: 500 },
    );
  }
}

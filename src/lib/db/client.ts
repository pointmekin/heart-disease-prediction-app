import { createClient } from "@supabase/supabase-js";
import { PUBLIC_SUPABASE_PROJECT, PUBLIC_SUPABASE_API_KEY } from "$env/static/public";

export const supabase = createClient(
	`https://${PUBLIC_SUPABASE_PROJECT}.supabase.co`,
	PUBLIC_SUPABASE_API_KEY
);

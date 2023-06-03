import { createClient } from "@supabase/supabase-js";
// import { PUBLIC_SUPABASE_PROJECT, PUBLIC_SUPABASE_API_KEY } from "$env/static/public";

export const supabase = createClient(
	`https://${import.meta.env.VITE_PUBLIC_SUPABASE_PROJECT}.supabase.co`,
	import.meta.env.VITE_PUBLIC_SUPABASE_API_KEY
);

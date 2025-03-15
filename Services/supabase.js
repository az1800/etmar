import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://nqveldgyeonkhrsrsjbn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xdmVsZGd5ZW9ua2hyc3JzamJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4MDM3MzAsImV4cCI6MjA1NzM3OTczMH0.hHxoyNeH7tKayPakJ3vw5RskRW8GeM8CBlR9iKlLGM8";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;

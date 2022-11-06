import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sdkbrxshditosdqxjnrq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNka2JyeHNoZGl0b3NkcXhqbnJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc0ODIwMzEsImV4cCI6MTk4MzA1ODAzMX0.qUqXOrPFH2-e9Z099ylTpxStxImmxzQmMDfCGhzLm2o";
const supabase = createClient(supabaseUrl, supabaseKey, {
  //   global: { fetch: fetch.bind(globalThis) },
});

export default supabase;

// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// Replace these with your actual values
const supabaseUrl = "https://ikjnsizxsmklofwstdou.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlram5zaXp4c21rbG9md3N0ZG91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwMTA4MzksImV4cCI6MjA0OTU4NjgzOX0.1cbiX7wCxVjvdkxgx2dH8EQTgNGsMFmsOshEq4SQYOI';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

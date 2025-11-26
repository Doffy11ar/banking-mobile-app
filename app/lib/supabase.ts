import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://jrzvnoswxidpzpgtxxcs.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyenZub3N3eGlkcHpwZ3R4eGNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxODE2NjEsImV4cCI6MjA3OTc1NzY2MX0.r23ntwtO7syGLpc82bdrZv0weeVLjnhTVuj7fmOGRiU';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);


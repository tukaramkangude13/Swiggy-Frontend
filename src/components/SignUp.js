import { supabase } from './supabaseClient';

const signUp = async (email, password) => {
  try {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    console.log('User signed up:', user);
  } catch (error) {
    console.error('Error during sign-up:', error.message);
  }
};

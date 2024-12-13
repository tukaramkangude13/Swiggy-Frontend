const signIn = async (email, password) => {
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
  
      if (error) throw error;
  
      console.log('User signed in:', user);
    } catch (error) {
      console.error('Error during sign-in:', error.message);
    }
  };
  
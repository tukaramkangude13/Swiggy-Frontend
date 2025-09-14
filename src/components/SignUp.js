const signUp = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setErrorMessage("Signup failed: " + error.message);
      console.error(error.message);
    } else {
      setSuccessMessage(
        "Signup successful! Please check your email to confirm your account."
      );
    }
  } catch (error) {
    setErrorMessage("Unexpected error occurred during signup.");
    console.error(error.message);
  }
};

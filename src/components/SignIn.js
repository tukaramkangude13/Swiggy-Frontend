const signIn = async (email, password) => {
  if (!email || !password) {
    setErrorMessage("Please enter both email and password.");
    return;
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      if (error.message.includes("Email not confirmed")) {
        setErrorMessage("Email not confirmed. Please check your inbox.");
      } else {
        setErrorMessage("Sign-in failed: " + error.message);
      }
      console.error("Sign-in failed:", error.message);
      return;
    }

    console.log("Sign-in successful:", data.user);
    setSuccessMessage("Sign-in successful! Welcome back.");
  } catch (error) {
    console.error("Unexpected error during sign-in:", error.message);
    setErrorMessage("Unexpected error occurred. Please try again later.");
  }
};

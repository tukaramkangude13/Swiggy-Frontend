import React, { useRef, useState } from 'react';
import supabase from '../utils/supabaseClient';
import Validate from '../utils/Validate';

const SignInSignUp = () => {
  const email = useRef(null);
  const password = useRef(null);
  const [errors, setErrors] = useState({ emailError: '', passwordError: '' });
  const [isSignUp, setIsSignUp] = useState(true); // For toggling between Sign Up / Sign In
  const [successMessage, setSuccessMessage] = useState(''); // To show success message
  const [isSuccessPopupVisible, setIsSuccessPopupVisible] = useState(false); // To toggle popup visibility

  const handleOnSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Validate form input
    const validationResults = Validate(email.current.value, password.current.value);
    setErrors({
      emailError: validationResults.emailError,
      passwordError: validationResults.passwordError,
    });

    if (validationResults.isValid) {
      if (isSignUp) {
        // Call signUp function
        await signUp(email.current.value, password.current.value);
      } else {
        // Call signIn function
        await signIn(email.current.value, password.current.value);
      }
    } else {
      console.log('Validation errors:', validationResults);
    }
  };

  // Sign-up function with Supabase
  const signUp = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error('Sign-up failed:', error.message);
      } else {
        console.log('Sign-up successful:', data.user);
        // Show success popup for sign-up
        setSuccessMessage('Sign-up successful! You can now log in.');
        setIsSuccessPopupVisible(true);
        setTimeout(() => setIsSuccessPopupVisible(false), 3000); // Hide popup after 3 seconds
      }
    } catch (error) {
      console.error('Error during sign-up:', error.message);
    }
  };

  // Sign-in function with Supabase
  const signIn = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Sign-in failed:', error.message);
      } else {
        console.log('Sign-in successful:', data.user);
        // Show success popup for sign-in
        setSuccessMessage('Sign-in successful! Welcome back.');
        setIsSuccessPopupVisible(true);
        setTimeout(() => setIsSuccessPopupVisible(false), 3000); // Hide popup after 3 seconds
      }
    } catch (error) {
      console.error('Error during sign-in:', error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-500 to-red-500">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </h2>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              ref={email}
              name="email"
              placeholder="Enter your email"
              required
              className={`w-full px-4 py-2 border ${errors.emailError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none text-gray-700`}
            />
            {errors.emailError && <p className="text-red-500 text-sm">{errors.emailError}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              ref={password}
              name="password"
              placeholder="Enter your password"
              required
              className={`w-full px-4 py-2 border ${errors.passwordError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none text-gray-700`}
            />
            {errors.passwordError && <p className="text-red-500 text-sm">{errors.passwordError}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            {isSignUp ? (
              <>
                Already have an account?{' '}
                <button onClick={() => setIsSignUp(false)} className="text-orange-500 hover:underline">
                  Log In
                </button>
              </>
            ) : (
              <>
                Don't have an account?{' '}
                <button onClick={() => setIsSignUp(true)} className="text-orange-500 hover:underline">
                  Sign Up
                </button>
              </>
            )}
          </p>
        </div>
      </div>

      {/* Success Popup */}
      {isSuccessPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold text-green-500">{successMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInSignUp;

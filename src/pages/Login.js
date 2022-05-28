import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import auth from '../firebase.init';
import useToken from '../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
    let errorMessage;
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [token] = useToken(user || googleUser);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (error || googleError) {
    errorMessage = (
      <p className="text-red-600">{error?.message || googleError?.message}</p>
    );
  }

  if (loading || googleLoading) {
    return <Loading />;
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
    return (
        <div>
          <Navbar/>
          <div className="flex justify-center items-center h-screen bg-gradient-to-r from-yellow-100 to-base-100">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl mb-12">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+\.[a-z]{2,3}/,
                    message: "Email is not valid.",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or more.",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            <input
              type="submit"
              className="btn w-full max-w-xs"
              value="Login"
            />
          </form>

          {errorMessage}
          <p className="text-sm">
            New to Doctors Portal?{" "}
            <Link to="/signup" className="text-secondary">
              Create new account
            </Link>
          </p>

          <div className="divider">OR</div>

          <button
            className="btn btn-accent btn-outline"
            onClick={() => signInWithGoogle()}
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Login;
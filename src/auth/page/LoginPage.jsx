import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UsersInPlatform } from "../../helper/users";

export const LoginPage = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm();


  const onSubmit = (data) => {
    console.log(data);
    const { dni, password } = data;
    const user = UsersInPlatform.find(
      (user) => user.dni === dni && user.password === password
    );
    if(!user) {
      alert("Error: Usuario o contraseña incorrecta");
      reset();
      return;
    }
    window.location.href = "/calendar";
  };
  return (
    <main className="h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/">
            <img
              className="mx-auto h-10 w-auto rounded-md"
              src="https://cdn6.aptoide.com/imgs/c/8/2/c82d88a3bf5ce9285718a734434b9ea9_icon.png"
              alt="RENIEC Logo"
            />
          </Link>
          <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
            Iniciar Sesión
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="dni"
                className="block text-lg font-medium leading-6 text-gray-900"
              >
                Ingrese su DNI
              </label>
              <div className="mt-2">
                <input
                  id="dni"
                  name="dni"
                  type="text"
                  {...register("dni", {
                    required: {
                      value: true,
                      message: "Ingrese su DNI",
                    },
                    minLength: {
                      value: 10,
                      message: "DNI INVALIDO - El DNI debe tener 10 caracteres",
                    },
                  })}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.dni && (
                  <span className="text-red-800 text-sm font-semibold">
                    {errors.dni.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-red-800 hover:text-red-600"
                  >
                    Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type={visiblePassword ? "text" : "password"}
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Ingrese su contraseña",
                    },
                    minLength: {
                      value: 8,
                      message: "La contraseña debe tener al menos 8 caracteres",
                    },
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
                {errors.password && (
                  <span className="text-red-800 text-sm font-semibold">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="mt-5 flex justify-center items-center">
                <input
                  type="checkbox"
                  onClick={() => setVisiblePassword(!visiblePassword)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

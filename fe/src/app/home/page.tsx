import Link from "next/link";

import NavBar from "@/components/navbar/navbar";

export default function HomePage() {
  return (
    <div className="bg-white">
      <div className="p-10 bg-emerald-700">
        <NavBar></NavBar>
      </div>
      <div className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-emerald-700">
              Metropolitan Green Design and Technology
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Us
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide organizations with the tools and expertise they need to
              actively manage their social and environmental impacts. We have
              worked with partners comprising under-resourced organizations and
              MNCs to implement sustainable solutions that impact upon their
              businesses.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-700">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                      />
                    </svg>
                  </div>
                  Reduce
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Reducing the eco impact.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-700">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                  </div>
                  Sustain
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Sustainable living for our future generations.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-700">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </div>
                  Framework
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Strategic green framework for construction.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-700">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
                      />
                    </svg>
                  </div>
                  Maximise
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Maximising business performance.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="relative cursor-pointer dark:text-white w-1/2">
          <div className="relative p-6 bg-white dark:bg-gray-800 border-2 border-emerald-700 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
            <div className="flex justify-center items-center">
              <span className="text-xl">😎</span>
              <Link href="/events">
                <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 dark:text-white">
                  Get the FREE Starter Kits by Joining our Events Now!
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-12 bg-white px-4 py-20 lg:px-20 mt-10">
        <div className="flex w-72">
          <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
            <div className="p-3">
              <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-gray-700 to-gray-400 text-center text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-4 h-7 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="pt-1 text-right">
                <p className="text-sm font-light capitalize">Our Members</p>
                <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
                  500
                </h4>
              </div>
            </div>
            <hr className="opacity-50" />
            <div className="p-4">
              <p className="font-light">
                <span className="text-sm font-bold text-green-600">
                  Our community has grown by 20% in the last month.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-72">
          <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
            <div className="p-3">
              <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 text-center text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-4 h-7 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="pt-1 text-right">
                <p className="text-sm font-light capitalize">Food</p>
                <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
                  2,300
                </h4>
              </div>
            </div>
            <hr className="opacity-50" />
            <div className="p-4">
              <p className="font-light">
                <span className="text-sm font-bold text-green-600">
                  We have grown 2300kg of food to feed 100 families in the last
                  year.{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-72">
          <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
            <div className="p-3">
              <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-emerald-700 to-emerald-500 text-center text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-4 h-7 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="pt-1 text-right">
                <p className="text-sm font-light capitalize">Locations</p>
                <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
                  20
                </h4>
              </div>
            </div>
            <hr className="opacity-50" />
            <div className="p-4">
              <p className="font-light">
                <span className="text-sm font-bold text-green-600">
                  We currently have 20 farming sites in 5 areas of Singapore.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

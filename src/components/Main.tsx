import React from "react";

const Main = () => {
  return (
    <div className="flex flex-col flex-1 w-full overflow-auto">
      <div className="py-8 px-4 mx-auto w-full">
        <form action="#">
          <div className="grid gap-4 sm:gap-6">
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ttitle
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="description"
                rows="8"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
      <div className="py-8 px-4 mx-auto w-full bg-slate-100 h-full">
        <h3 className="text-xl font-semibold">タイトルタイトル</h3>
        <div className="mt-4">
          プレビュープレビュープレビュープレビュープレビュープレビュープレビュープレビュープレビュープレビュープレビュープレビュープレビュープレビュープレビュープレビュープレビュープレビュープレビュープレビュープレビュープレビュープレビュープレビュープレビュープレビュープレビュー
        </div>
      </div>
    </div>
  );
};

export default Main;

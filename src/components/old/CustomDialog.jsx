import { useState } from "react";

function CustomDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  function openDialog() {
    setIsDialogOpen(true);
  }

  function closeDialog() {
    setIsDialogOpen(false);
  }
  return (
    <>
      <button
        onClick={openDialog}
        className="px-4 py-2 text-slate-100 bg-blue-500 dark:bg-blue-700 rounded-lg transition-all cursor-pointer active:scale-95">
        Open Dialog
      </button>
      <dialog
        open={isDialogOpen}
        className={`min-w-100 ${isDialogOpen ? "fixed opacity-100" : "hidden scale-90 opacity-0"} p-6 top-1/2 left-1/2 -translate-1/2 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-2xl transition-all transition-discrete starting:opacity-0 starting:scale-90`}>
        <h2 className="text-2xl text-gray-800 dark:text-slate-200 font-semibold">Hello, World!</h2>
        <p className="mt-2 mb-4 text-gray-500 dark:text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex justify-end items-center gap-2">
          <button
            className="px-4 py-2 text-white bg-base-color rounded-lg transition-color duration-300 cursor-pointer hover:bg-hover-color">
            Switch
          </button>
          <button
            onClick={closeDialog}
            className="px-4 py-2 text-slate-700 dark:text-white bg-transparent rounded-lg transition-all cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-800">
            Close
          </button>
        </div>
      </dialog>
    </>
  );
}

export default CustomDialog;
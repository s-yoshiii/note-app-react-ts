import React, { FC } from "react";
type Props = {
  onAddNote: () => void;
  onDeleteNote: (id: string) => void;
  notes: Note[];
};

const Sidebar: FC<Props> = ({ onAddNote, notes, onDeleteNote }) => {
  return (
    <div className="block md:flex md:flex-shrink-0 md:w-96">
      <div className="flex flex-col md:w-full">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r border-gray-50">
          <div className="flex flex-row justify-between items-center flex-shrink-0 px-4">
            <h2 className="block p-2 text-xl font-medium tracking-tighter text-gray-900">
              Note
            </h2>
            <div className="px-4">
              <button
                className="px-5 py-2 lg:px-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-slate-700 rounded-md hover:bg-slate-950"
                onClick={onAddNote}
              >
                追加
              </button>
            </div>
          </div>
          <div className="flex flex-col flex-grow px-4 mt-5">
            <nav className="flex-1 space-y-1 bg-white">
              <ul>
                {notes.map((note) => (
                  <li
                    className="flex flex-col p-4 mt-2 text-base transition duration-500 cursor-pointer ease-in-out transform rounded-lg bg-gray-50 focus:shadow-outline focus:shadow-outline hover:bg-gray-100"
                    key={note.id}
                  >
                    <div className="flex justify-between">
                      <div className="flex-shrink">
                        <div className="inline-flex items-center w-full text-gray-900">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                            ></path>
                          </svg>
                          <span className="ml-4">{note.title}</span>
                        </div>
                        <p className="leading-relaxed mt-2">{note.content}</p>
                        <div className="mt-4 text-gray-500 text-sm block w-full">
                          最後の修正日:
                          {new Date(note.modDate).toLocaleDateString("ja-JP", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </div>
                      <div className="pl-4 flex-shrink-0">
                        <button
                          className="px-5 py-2 lg:px-3 text-base font-medium text-center text-slate-700 transition duration-500 ease-in-out transform bg-white border border-slate-700 rounded-md hover:bg-slate-700 hover:text-white"
                          onClick={() => onDeleteNote(note.id)}
                        >
                          削除
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import StatCard from "./Components/StatCard";
import Section from "./Components/Section";

function App() {
  const [read, setRead] = useState(0);
  const [bookmarks, setBookmarks] = useState(0);

  function handleRead() {
    setRead(read + 1);
  }

  function handleBookmark() {
    setBookmarks(bookmarks + 1);
  }

  function handleReset() {
    setRead(0);
    setBookmarks(0);
  }

  return (
    <div className="grid min-h-screen grid-cols-[24rem_1fr] grid-rows-[auto_auto_1fr] bg-[#EDE9E6] text-[#5C4F4A]">
      <Sidebar author="Briar Rovic Z. Elemino"></Sidebar>

      <div className="flex items-end justify-between px-20 pt-10">
        <div>
          <Header />
          <div className="mt-6 flex gap-4">
            <button
              className="cursor-pointer rounded-lg bg-[#5C766D] px-8 py-3 text-xl font-bold text-[#EDE9E6]"
              onClick={handleRead}
            >
              Mark as read
            </button>
            <button
              className="cursor-pointer rounded-lg bg-[#C9996B] px-8 py-3 text-xl font-bold text-[#5C4F4A]"
              onClick={handleBookmark}
            >
              Bookmark
            </button>
            <button
              className="cursor-pointer rounded-lg border-2 border-[#5C4F4A] px-8 py-3 text-xl font-bold"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          <StatCard value={read} label="Marked as read" />
          <StatCard value={bookmarks} label="Bookmarks" />
        </div>
      </div>

      <main className="px-20 pt-4">
        <Section title="Create" description="Creates an empty Git repository in the current folder." command="git init"/>
        <Section title="Rename" description="Renames the current branch to main" command="git branch -M main"/>
        <Section title="Upload" description="Sends the main branch to the remote named origin." command="git push -u origin main"/>
      </main>
    </div>
  );
}

export default App;

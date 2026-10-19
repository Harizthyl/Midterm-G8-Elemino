import Header from "./Header";
import { useState } from "react";
import StatCard from "./StatCard";

function Docs () {
  const [read, setRead] = useState(0);
  const [bookmarks, setBookmarks] = useState(0);

  function handleRead() {
    setRead(read + 1);
  }

  function handleBookmark() {
    setBookmarks(bookmarks + 1);
  }

  function handleClear() {
    setRead(0);
    setBookmarks(0);
  }

  return (
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
            onClick={handleClear}
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
  );
}

export default Docs;

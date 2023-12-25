function ForYouMenu() {
  return (
    <div className="mt-1 p-14 px-28 ">
      <div className="flex items-center gap-2">
        <h1 className="font-extrabold text-3xl uppercase leading-9 ">
          For You
        </h1>
        <svg width="24" height="20" viewBox="0 0 24 20">
          <g stroke="none">
            <path d="M23 3H11.2C10.8 1.3 9.2 0 7.3 0C5.4 0 4 1.3 3.5 3H1C0.4 3 0 3.4 0 4C0 4.6 0.4 5 1 5H3.5C3.9 6.7 5.5 8 7.4 8C9.3 8 10.8 6.7 11.3 5H23C23.6 5 24 4.6 24 4C24 3.4 23.6 3 23 3ZM7.4 6.5C6 6.5 4.9 5.4 4.9 4C4.9 2.6 6 1.5 7.4 1.5C8.8 1.5 9.9 2.6 9.9 4C9.9 5.4 8.7 6.5 7.4 6.5Z"></path>
            <path d="M1 17H12.8C13.2 18.7 14.8 20 16.7 20C18.6 20 20.1 18.7 20.6 17H23C23.6 17 24 16.6 24 16C24 15.4 23.6 15 23 15H20.5C20.1 13.3 18.5 12 16.6 12C14.7 12 13.2 13.3 12.7 15H1C0.4 15 0 15.4 0 16C0 16.6 0.4 17 1 17ZM16.6 13.5C18 13.5 19.1 14.6 19.1 16C19.1 17.4 18 18.5 16.6 18.5C15.2 18.5 14.1 17.4 14.1 16C14.1 14.6 15.3 13.5 16.6 13.5Z"></path>
          </g>
        </svg>
      </div>
      <span className="font-bold">The best of everything you follow</span>
    </div>
  );
}

export default ForYouMenu;

function PersonalizedForYouModal({ niche, setNiche }) {
  const follow = [
    "#NEWS",
    "#SCIENCE",
    "#TECHNOLOGY",
    "#BUSINESS",
    "#POLITICS",
    "#TRAVEL",
    "#PHOTOGRAPHY",
    "#PERSONAL FINANCE",
    "#CLIMATE CHANGE",
    "#HEALTH",
    "#SPORTS",
    "#ENTERTAINMENT",
    "#LIFESTYLE",
    "#HOME & GARDEN",
    "#SELF-IMPROVEMENT",
    "#COMPUTER SCIENCE",
    "#BLACK HISTORY",
    "#WORLD ECONOMY",
    "#CELEBRITY NEWS",
    "#DIY",
    "#BOOKS",
    "#MUSIC",
    "#STYLE",
    "#DESIGN",
    "#RUSSIA-UKRAINE",
    "#BREAKTHROUGHS",
    "#PSYCHOLOGY",
    "#ENTREPRENEURSHIP",
    "#CONSERVATIVE VIEW",
    "#LIBERAL VIEW",
    "#OUTDOORS",
    "#FITNESS",
    "#PRODUCTIVITY",
    "#HOW TO{`'`}S",
    "#NUTRITION",
    "#SLEEP",
    "#DOGS",
    "#TV",
    "#FOREIGN POLICY",
    "#INNOVATION",
    "#CALIFORNIA",
    "#RELATIONSHIPS",
    "#WAR",
    "#MILITARY",
    "#NATURE",
    "#AGING",
    "#ADVENTURE TRAVLE",
    "#INVESTING",
    "#APPLE",
    "#SHOPPING",
    "#HUMAN INTEREST",
    "#THE FUTURE",
    "#IDEAS",
    "#RUNNING",
    "#STREET ART",
    "#CREATIVITY",
    "#STARTUPS",
    "#HISTORY",
    "#SUSTAINABILITY",
    "#CRAFTING",
    "#ARCHITECTURE",
    "#GADGETS",
    "#CULTURE",
    "#BEAUTY",
    "#COFFEE",
    "#GAMING",
    "#THE BRAIN",
    "#PARENTING",
    "#HUMOR",
    "#EDUCATION",
    "#AUTOS",
    "#FOOTBALL (U.S.)",
    "#ASTRONOMY",
    "#SOCIAL MEDIA",
    "#NEW YORK CITY",
    "#FLORIDA",
    "#NATIONAL SECURITY",
    "#CHICAGO",
    "#BASKETBALL",
    "#BAKING",
    "#DOCUMENTARIES",
    "#RACE & ETHNICITY",
    "#WOMEN'S HEALTH",
    "#TEXAS",
    "#ANDROID NEWS",
    "#INTERNET",
    "#AFRICAN AMERICAN VOICES",
    "#ANIMAL BEHAVIOR",
    "#ENERGY",
    "#ARTIFICIAL INTELLIGENCE",
    "#SCIENTIFIC RESEARCH",
    "#CRYPTOCURRENCY",
    "#MENTAL HEALTH",
    "#TIME MANAGEMENT",
    "#BASEBALL",
    "#URBAN PLANNING",
    "#TRAVEL",
    "PHOTOGRAPHY",
    "#ART",
  ];
  return (
    <div className=" h-full flex items-center justify-center fixed left-0 top-0 select-none w-[100%] z-[999] bg-[#000000a4]">
      <div className="flex items-center justify-center">
        <div className="bg-[#f7f7f7] text-black relative rounded-lg max-w-[400px] text-center">
          <div className="absolute top-[8px] right-[8px] z-[11]">
            <button
              className="border-none bg-transparent cursor-pointer w-auto text-[#bcbcbc]"
              onClick={() => {
                setNiche(!niche);
              }}
            >
              <div className="items-center flex justify-center p-0">
                <svg
                  role="img"
                  aria-labelledby="closenew-icon-title"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <title id="closenew-icon-title">closenew</title>
                  <path
                    d="M15.7071 8.29304C16.0976 8.68357 16.0976 9.31673 15.7071 9.70726L13.4142 12.0002L15.7071 14.293C16.0976 14.6836 16.0976 15.3167 15.7071 15.7073C15.3166 16.0978 14.6834 16.0978 14.2929 15.7073L12 13.4144L9.70711 15.7073C9.31658 16.0978 8.68342 16.0978 8.29289 15.7073C7.90237 15.3167 7.90237 14.6836 8.29289 14.293L10.5858 12.0002L8.29289 9.70726C7.90237 9.31673 7.90237 8.68357 8.29289 8.29304C8.68342 7.90252 9.31658 7.90252 9.70711 8.29304L12 10.5859L14.2929 8.29304C14.6834 7.90252 15.3166 7.90252 15.7071 8.29304Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
          <div className="max-h-[800px] ">
            <div className="p-10">
              <h1 className="font-bold uppercase text-xl">
                PERSONALIZE FOR YOU
              </h1>
              <p className="font-semibold">
                We’ll show you more stories based on what you follow.
              </p>
              <div className="text-left w-full mt-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-200 p-2 w-full rounded-md"
                />
              </div>
              <h3 className="mt-4">More topics to follow</h3>
            </div>
            <div className="HashLists flex flex-wrap overflow-y-scroll overflow-x-hidden p-4 h-[400px] gap-1 mb-2">
              {follow.map((personalize, i) => (
                <div key={i} className="px-4 rounded-lg bg-slate-200">
                  {personalize}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalizedForYouModal;

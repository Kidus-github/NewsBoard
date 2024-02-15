function PersonalizedForYouModal({ niche, setNiche }) {
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
              <div className="px-4 rounded-lg bg-slate-200 ">#NEWS</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#SCIENCE</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#TECHNOLOGY</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#BUSINESS</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#POLITICS</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#TRAVEL</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#PHOTOGRAPHY</div>
              <div className="px-4 rounded-lg bg-slate-200 ">
                #PERSONAL FINANCE
              </div>
              <div className="px-4 rounded-lg bg-slate-200 ">
                #CLIMATE CHANGE
              </div>
              <div className="px-4 rounded-lg bg-slate-200 ">#HEALTH</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#SPORTS</div>
              <div className="px-4 rounded-lg bg-slate-200 ">
                #ENTERTAINMENT
              </div>
              <div className="px-4 rounded-lg bg-slate-200 ">#LIFESTYLE</div>
              <div className="px-4 rounded-lg bg-slate-200 ">
                #HOME & GARDEN
              </div>
              <div className="px-4 rounded-lg bg-slate-200 ">
                #SELF-IMPROVEMENT
              </div>
              <div className="px-4 rounded-lg bg-slate-200 ">
                #COMPUTER SCIENCE
              </div>
              <div className="px-4 rounded-lg bg-slate-200 ">
                #BLACK HISTORY
              </div>
              <div className="px-4 rounded-lg bg-slate-200 ">
                #WORLD ECONOMY
              </div>
              <div className="px-4 rounded-lg bg-slate-200 ">
                #CELEBRITY NEWS
              </div>
              <div className="px-4 rounded-lg bg-slate-200 ">#DIY</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#BOOKS</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#MUSIC</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#STYLE</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#DESIGN</div>
              <div className="px-4 rounded-lg bg-slate-200 ">
                #RUSSIA-UKRAINE WAR
              </div>
              <div className="px-4 rounded-lg bg-slate-200 ">
                #BREAKTHROUGHS
              </div>
              <div className="px-4 rounded-lg bg-slate-200 ">#PSYCHOLOGY</div>
              <div className="px-4 rounded-lg bg-slate-200 ">
                #ENTREPRENEURSHIP
              </div>
              <div className="px-4 rounded-lg bg-slate-200 ">
                #CONSERVATIVE VIEW
              </div>
              <div className="px-4 rounded-lg bg-slate-200 ">#LIBERAL VIEW</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#OUTDOORS</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#FITNESS</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#PRODUCTIVITY</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#HOW TO{`'`}S</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#SPACE</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#NUTRITION</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#SLEEP</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#DOGS</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#TV</div>
              <div className="px-4 rounded-lg bg-slate-200 ">
                #FOREIGN POLICY
              </div>
              <div className="px-4 rounded-lg bg-slate-200 ">#INNOVATION</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#CALIFORNIA</div>
              <div className="px-4 rounded-lg bg-slate-200 ">
                #RELATIONSHIPS
              </div>
              <div className="px-4 rounded-lg bg-slate-200 ">#MILITARY</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#NATURE</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#AGING</div>
              <div className="px-4 rounded-lg bg-slate-200 ">
                #ADVENTURE TRAVEL
              </div>
              <div className="px-4 rounded-lg bg-slate-200 ">
                #INVESTING #APPLE
              </div>
              <div className="px-4 rounded-lg bg-slate-200 ">#SHOPPING</div>
              <div className="px-4 rounded-lg bg-slate-200 ">
                #HUMAN INTEREST
              </div>
              <div className="px-4 rounded-lg bg-slate-200 ">#THE FUTURE</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#IDEAS</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#RUNNING</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#STREET ART</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#CREATIVITY</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#STARTUPS</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#HISTORY</div>
              <div className="px-4 rounded-lg bg-slate-200 ">
                #SUSTAINABILITY
              </div>
              <div className="px-4 rounded-lg bg-slate-200 ">#CRAFTING</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#ARCHITECTURE</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#GADGETS</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#CULTURE</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#BEAUTY</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#COFFEE</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#GAMING</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#THE BRAIN</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#PARENTING</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#HUMOR</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#EDUCATION</div>
              <div className="px-4 rounded-lg bg-slate-200 ">#AUTOS</div>
            </div>

            {/* #FOOTBALL (U.S.) #ASTRONOMY #SOCIAL
            MEDIA #NEW YORK CITY #FLORIDA #NATIONAL SECURITY #CHICAGO
            #BASKETBALL #BAKING #DOCUMENTARIES #RACE & ETHNICITY #WOMEN'S HEALTH
            #TEXAS #ANDROID NEWS #INTERNET #AFRICAN AMERICAN VOICES #ANIMAL
            BEHAVIOR #ENERGY #ARTIFICIAL INTELLIGENCE #SCIENTIFIC RESEARCH
            #CRYPTOCURRENCY #MENTAL HEALTH #TIME MANAGEMENT #BASEBALL #URBAN
            PLANNING #TRAVEL PHOTOGRAPHY #ART */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalizedForYouModal;

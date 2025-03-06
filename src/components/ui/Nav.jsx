import Navlink from "../Navlink";
function Nav({setCategory, category}) {
  
  return (
    <div className="sticky border-solid border-x-0 border-y-2 border-slate-200 py-3 flex justify-around mb-8 top-14 bg-white ">
      <Navlink  onClick={()=>  setCategory('news')} active={category === 'news' ? true : false}>
        news
      </Navlink>
      <Navlink onClick={()=> setCategory('entertainment')} active={category === 'entertainment'? true : false}>
        entertainment
      </Navlink>
      <Navlink  onClick={()=> setCategory('technology')} active={category === 'technology'? true : false}>
        technology
      </Navlink>
      <Navlink onClick={()=>  setCategory('travel')} active={category === 'travel'? true : false}>
        travel
      </Navlink>
      <Navlink  onClick={()=>  setCategory('food')} active={category === 'food'? true : false}>
        food
      </Navlink>
      <Navlink onClick={()=>  setCategory('sports')} active={category === 'sports'? true : false}>
        sports
      </Navlink>
      <Navlink onClick={()=> setCategory('newsboardTv')} active={category === 'newsboardTv'? true : false}>
        newsboard tv
      </Navlink>
    </div>
  );
}

export default Nav;

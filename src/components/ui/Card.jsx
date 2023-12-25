import { Link } from "react-router-dom";
function Card({ news }) {
  return (
    <Link to={`newsletter/${news.id}`}>
      <article className="p-4 border-slate-200 border-2 border-solid w-[400px] h-[600px] rounded-2xl">
        <header>
          <div>
            {/* there will be an image which is going to be displayed here */}
          </div>
          <div>
            {/* there will be a header with a  name of the poster and the time or something */}
          </div>
        </header>
        <div className="h-[277px]">
          <img src={news.img} className="object-cover w-full h-full " />
        </div>
        <div>
          <time>{news.date}</time>
        </div>

        <h3 className="text-2xl mb-4">
          <strong>{news.headline}</strong>
        </h3>
        <address>
          {/* image must be displayed if there is any  */}
          {news.author}
        </address>
        <footer>
          {/* there will be a like, comment add and share butttons */}
        </footer>
      </article>
    </Link>
  );
}

export default Card;

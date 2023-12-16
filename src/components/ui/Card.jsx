function Card({ news }) {
  return (
    <div className="p-8 bg-red-700 w-[400px] h-[500px]">
      <img src={news.img} />
      <h1>{news.headline}</h1>
    </div>
  );
}

export default Card;

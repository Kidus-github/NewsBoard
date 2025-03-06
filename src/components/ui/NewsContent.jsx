function NewsContent({ news }) {
  const { id, headline, shortDiscription, discription, author, date, img } =
    news;
  return (
    <div className="mx-20 my-10 flex justify-between">
      <div className="max-w-[900px]">
        <h1 className="font-bold text-4xl my-8">{title}</h1>
        <div className="flex justify-between my-10 ">
          <p>{author}</p>
          <p>{dateCreated}</p>
        </div>
        <div>
          {img.map((image, i) => (
            <img src={image} key={i} />
          ))}
        </div>
        <div className="py-20 flex justify-center">
          <p>{description}</p>
        </div>
        <div>
          <h1>RELATED</h1>
          <ul>{/* list of related news */}</ul>
        </div>
      </div>
      <div>{/* Advertising lays here */}</div>
    </div>
  );
}

export default NewsContent;

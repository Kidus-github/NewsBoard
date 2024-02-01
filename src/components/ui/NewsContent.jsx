function NewsContent({ news }) {
  const { title, description, author, dateCreated, image } = news;
  return (
    <div className="mx-20 py-14 flex justify-between gap-4">
      <div className="max-w-[900px]">
        <h1 className="font-bold text-4xl my-8">{title}</h1>
        <div className="flex justify-between my-10 ">
          <p>{author}</p>
          <p>{dateCreated}</p>
        </div>
        <div>
          {image?.map((image, i) => (
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
      <div className="dark:bg-black ">{/* Advertising lays here */}</div>
    </div>
  );
}

export default NewsContent;

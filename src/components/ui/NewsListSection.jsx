import { Button, Card } from "./index";
function NewsListSection({ news }) {
  return (
    <div className="flex items-center flex-col">
      <ul className="flex flex-wrap gap-12 justify-center ">
        {news.map((post, i) => (
          <li key={i}>
            <Card news={post} />
          </li>
        ))}
      </ul>
      <div className="m-8">
        <Button className="w-fit bg-primary text-white rounded-md">
          Read more
        </Button>
      </div>
    </div>
  );
}

export default NewsListSection;

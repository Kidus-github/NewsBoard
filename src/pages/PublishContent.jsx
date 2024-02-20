import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/ui";

function PublishContent() {
  const { id } = useParams();
  // const [content, setContent] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [category, setCategory] = useState("");
  const [keyword, setKeyword] = useState([]);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contentType, setContentType] = useState("");
  const [contentTags, setContentTags] = useState([]);

  let User = useRef("");
  let Now = new Date("2022-02-02T12:00:00");
  let createdDate = useRef("");
  function handleClick(key) {
    setKeyword([...keyword, key]);
  }
  const ContentType = [
    "Article",
    "Blog Post",
    "News",
    "Tutorial",
    "Video",
    "Podcast",
    "Infographic",
    "Image",
    "Ebook",
    "Product Review",
    "Interview",
    "Opinion Piece",
    "Listicle",
    "Case Study",
    "Whitepaper",
    "Webinar",
    "Newsletter",
    "Presentation",
    "Course",
    "Interactive Content",
  ];

  const keywords = [
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
    "#HOW TO'S",
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
  const Category = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://localhost:7281/api/Content/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // setContent(data);
        setTitle(data.title);
        setDescription(data.description);
        createdDate.current = data.dateCreated;
        setUrl(data.url);
        setKeyword(data.keywords);
        // setSelectedFile((selectedFile.name = data.image[0]));
      });
  }, [id, selectedFile]);

  useEffect(() => {
    fetch(`https://localhost:7281/api/Category`)
      .then((res) => res.json())
      .then((data) => {
        Category.current = data;
      });
  }, []);
  useEffect(() => {
    fetch(
      `https://localhost:7281/api/Auth/userId?token=${localStorage.getItem(
        "token"
      )}`
    )
      .then((res) => res.text())
      .then((data) => {
        fetch(`https://localhost:7281/api/User/GetUserNametBYid?id=${data}`)
          .then((res) => res.text())
          .then((data) => (User.current = data));
      });
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handleChange = (event) => {
    setSelectedStatus(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleContentType = (event) => {
    setContentType(event.target.value);
  };
  function checkImageUrl() {
    fetch(url, { method: "HEAD" })
      .then((response) => {
        if (response.ok) {
          const contentType = response.headers.get("Content-Type");
          return contentType.startsWith("image/");
        } else {
          return false;
        }
      })
      .catch(() => {
        return false;
      });
  }

  function putData(Data) {
    fetch(`https://localhost:7281/api/Content/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(Data),
    })
      .then(() => {
        console.log("UPDATED");
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((text) => {
        console.log("Response text:", text);
        // Do something with the text
      });
  }
  const handlePublish = () => {
    putData({
      contentId: id,
      title: title,
      description: description,
      url: url,
      author: User.current,
      publicationStatus: selectedStatus,
      publicationDate: Now,
      categoryId: category,
      image: [checkImageUrl() ? url : `/src/assets/${selectedFile.name}`],
      video: selectedFile.type.startsWith("video/")
        ? String(selectedFile.name)
        : "",
      contentType: contentType,
      keywords: [...keyword],
      contentTags: [...contentTags],
      contentLike: 0,
      contentViews: 0,
      contentComment: 0,
      dateCreated: createdDate.current,
    });
    // console.log(
    //   selectedFile.type.startsWith("video/") ? String(selectedFile.name) : ""
    // );
  };
  function handleClose() {}

  return (
    <div className="p-10">
      <div className="upperpart mt-16 flex">
        <div className="text w-full">
          <div className="editTitle">
            <textarea
              className="font-bold text-3xl max-w-[600px] h-max w-full resize-none overflow-y-hidden"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="editDescription">
            <textarea
              className="font-medium text-xl max-w-[600px] h-max py-10 w-full resize-none overflow-y-hidden "
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="choosecontent">
          <div>
            {selectedFile && (
              <div>
                {selectedFile.type.startsWith("image/") && (
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="Selected file"
                    style={{ maxWidth: "100%", maxHeight: "300px" }}
                  />
                )}
                {selectedFile.type.startsWith("video/") && (
                  <video
                    controls
                    style={{ maxWidth: "100%", maxHeight: "300px" }}
                  >
                    <source
                      src={URL.createObjectURL(selectedFile)}
                      type={selectedFile.type}
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            )}
          </div>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*,video/*"
          />
        </div>
      </div>

      <div className="addURl w-full text-center mt-16 mb-14">
        <h2 className="font-semibold text-3xl">Add something new</h2>
        <p className="text-lg mb-6">
          Add articles, Tweets or links to other magazines and storyboards
        </p>
        <input
          type="text"
          placeholder="Add a URL"
          className="text-start bg-[#f2f2f2] w-full p-2 max-w-4xl rounded-lg px-4"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div className="ChangeStatus flex-col flex">
        <label className="font-semibold text-3xl mb-4">Change Status</label>
        <div className="bg-[#f2f2f2] w-full p-2 max-w-md rounded-lg px-4">
          <select
            value={selectedStatus}
            onChange={handleChange}
            className="w-full max-w-md"
          >
            <option value="Pending">Pending</option>
            <option value="published">Publish</option>
          </select>
        </div>
      </div>
      <div className="categoryId my-10">
        <label className="font-semibold text-3xl mb-4">Select Category</label>
        <div className="bg-[#f2f2f2] w-full p-2 max-w-md rounded-lg px-4">
          <select
            value={category}
            onChange={handleCategory}
            className="w-full max-w-md"
          >
            <option value="" disabled hidden>
              Select an Category...
            </option>
            {Category.current.map((category) => (
              <option value={category.categoryId} key={category.categoryId}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="contentType">
        <label className="font-semibold text-3xl mb-4">
          Select Content Type
        </label>
        <div className="bg-[#f2f2f2] w-full p-2 max-w-md rounded-lg px-4">
          <select
            value={contentType}
            onChange={handleContentType}
            className="w-full max-w-md"
          >
            {ContentType.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="KeyWords">
        <h1 className="font-semibold text-3xl my-4">Keywords</h1>
        <div>
          <div className="included w-[800px] h-[200px] my-4 bg-[#f2f2f2] flex flex-wrap gap-4 p-4 rounded-lg">
            {keyword.map((key, i) => (
              <div
                key={i}
                className="px-2 pl-4 py-1 rounded-lg bg-[#ad2224] text-white h-max flex justify-between items-center gap-4"
              >
                {key}
                <svg
                  role="img"
                  aria-labelledby="closenew-icon-title"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="cursor-pointer"
                  onClick={() => handleClose()}
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
            ))}
          </div>
          <p className="mb-4 font-bold text-lg">Select key words from here: </p>
          <div className="alllist flex flex-wrap max-w-[1200px] gap-2">
            {keywords.map((keyword, i) => (
              <div
                key={i}
                className="px-4 rounded-lg bg-slate-200 cursor-pointer"
                onClick={() => handleClick(keyword)}
              >
                {keyword}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="ContentTags">
        <h2 className="font-semibold text-3xl my-6">Content Tag</h2>
        <p className="text-lg mb-4">
          Tag a friend here by typing there user name in the space provided
          below :
        </p>
        <input
          type="text"
          className="text-start bg-[#f2f2f2] w-full p-2 max-w-4xl rounded-lg px-4 mb-8"
        />
      </div>
      <div className="w-full flex gap-10 justify-end my-10">
        <Button
          onClick={() => {
            navigate("profile");
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handlePublish}
          className=" bg-primary text-white rounded-md hover:bg-[#ad2224] "
          s
        >
          Publish
        </Button>
      </div>
    </div>
  );
}

export default PublishContent;

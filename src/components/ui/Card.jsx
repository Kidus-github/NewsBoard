import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Card({ news, setCommentSeciton }) {
  const navigate = useNavigate();
  const [likeColor, setLikeColor] = useState(true);
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  let Profile = useRef("");

  let Now = new Date("2022-02-02T12:00:00");
  useEffect(() => {
    fetch(`https://localhost:7281/api/Likes/${news.contentId}`)
      .then((res) => res.text())
      .then((data) => {
        setLikeCount(parseInt(data));

        setLikeColor(parseInt(data) != 0 ? false : true);
      })
      .catch(() => {
        console.log("dataFailed");
        // console.log(news.contentId);
      });
  }, [news.contentId]);

  useEffect(() => {
    fetch(`https://localhost:7281/api/Comment/CountByid?id=${news.contentId}`)
      .then((res) => res.json())
      .then((data) => {
        setCommentCount(parseInt(data));
      })
      .catch(() => {
        console.log("dataFailed");
      });
  }, [news.contentId, setCommentCount]);
  useEffect(() => {
    fetch(
      `https://localhost:7281/api/User/GetImageBYUserName?username=${news.author}`
    )
      .then((res) => res.text())
      .then((data) => {
        Profile.current = data;
      })
      .catch(() => {
        console.log("dataFailed");
      });
  }, [news.author]);

  function postData(Data) {
    try {
      const response = fetch("https://localhost:7281/api/Likes", {
        method: "POST",
        headers: {
          "content-type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(Data),
      }).then(() => {
        console.log("Liked");
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = response.text();
      console.log("Response:", responseData);
      // Handle response data
    } catch (error) {
      console.error("There was a problem with the POST request:", error);
      // Handle error
    }
  }
  async function putData(Data, news) {
    console.log(Data + "From here");
    try {
      const response = await fetch(
        `https://localhost:7281/api/Content/${news.contentId}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(Data),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.text();
      console.log("Response:", responseData);
      console.log("Edited");
      // Handle response data
    } catch (error) {
      console.error("There was a problem with the PUT request:", error);
      // Handle error
    }
  }

  async function deleteLike(id) {
    try {
      const response = await fetch(`https://localhost:7281/api/Likes/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.text();
      console.log("Response:", responseData);
      console.log("Edited");
      // Handle response data
    } catch (error) {
      console.error("There was a problem with the DELETE request:", error);
      // Handle error
    }
  }

  function handleLike() {
    setLikeColor(!likeColor);
    setLikeCount((likeCount) => (likeColor ? likeCount + 1 : likeCount - 1));
    console.log("it was here");
    if (likeColor) {
      postData({
        likeId: "",
        userId: "65ba438c901aa63ea7bec827", //To be changed with the token userid
        contentId: news.contentId,
        likeDate: Now,
      });
      putData(
        {
          ...news,
          contentLike: news.contentLike + 1,
        },
        news
      );
    } else {
      deleteLike(news.contentId); //To be changed with the token userid,
      let prev = news.contentLike - 1;
      putData(
        {
          ...news,
          contentLike: prev,
        },
        news
      );
    }
  }

  return (
    <Link to={`newsletter/${news.id}`}>
      <article className="p-4 border-slate-200 border-2 border-solid w-[400px] h-[600px] rounded-2xl">
        <header>
          <div>
            {/* there will be an image which is going to be displayed here */}
          </div>
        </div>
        {/* TODO: check if it is an auterized user then display the menu opiton  */}
        <div>
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
            <path
              d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </header>
      <div
        className="flex-grow"
        onClick={() => {
          // console.log(news.contentId);
          navigate(`/newsletter/${news.contentId}`);
        }}
      >
        <div className="h-[277px]">
          <img
            src={news.image}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="my-3 dark:text-[#949494]">
          <time>{news.date}</time>
        </div>

        <h3 className="text-xl mb-4">
          <strong>{news.title}</strong>
        </h3>
        <address className="dark:text-[#949494] dark:hover:text-white">
          {news.author}
        </address>
      </div>
      <footer>
        <div className="flex justify-between  dark:text-white ">
          <div className="flex justify-center items-center gap-x-2">
            <button
              type="button"
              className="cursor-pointer"
              onClick={() => handleLike()}
            >
              <svg
                role="img"
                aria-labelledby="like-icon-title"
                width="24"
                height="24"
                viewBox="0 0 20 20"
              >
                <title id="like-icon-title">Like</title>
                <path
                  fillRule={`${likeColor ? "evenodd" : "nonzero"}`}
                  clipRule="evenodd"
                  d="M9.9727 3.12982C8.52038 1.63232 6.32904 1.348 4.50782 1.99529C2.29089 2.78321 0.510002 4.96682 0.88251 8.11869C1.09588 9.92403 2.09418 12.0052 3.60513 13.841C5.12489 15.6874 7.21869 17.3542 9.70978 18.2814C9.89978 18.3521 10.109 18.3511 10.2984 18.2786C12.7214 17.3511 14.8116 15.6862 16.3445 13.8445C17.8677 12.0145 18.9044 9.93183 19.1186 8.11869C19.4935 4.947 17.6251 2.77403 15.392 1.99383C13.571 1.35763 11.3595 1.61962 9.9727 3.12982ZM5.06597 3.56572C3.52649 4.11287 2.2632 5.60084 2.53766 7.92307C2.703 9.32209 3.51823 11.1128 4.89197 12.7818C6.1947 14.3646 7.95028 15.7765 9.99618 16.6048C11.9865 15.7762 13.7439 14.3637 15.0635 12.7783C16.4574 11.1036 17.2991 9.31429 17.4635 7.92307C17.7356 5.62065 16.4304 4.12209 14.8422 3.56723C13.2023 2.99426 11.4753 3.46891 10.7452 4.92341C10.6074 5.19815 10.3294 5.37466 10.0221 5.38265C9.71479 5.39063 9.42805 5.22878 9.27608 4.96157C8.41645 3.45007 6.64871 3.00319 5.06597 3.56572Z"
                  fill={`${likeColor ? "currentColor" : "red"}`}
                ></path>
              </svg>
            </button>
            <span className="font-semibold">{likeCount}</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <button
              type="button"
              className="cursor-pointer"
              onClick={() => {
                setCommentSeciton(news.contentId);
              }}
            >
              <svg
                role="img"
                aria-labelledby="comment-icon-title"
                width="24"
                height="24"
                viewBox="0 0 20 20"
              >
                <title id="comment-icon-title">comment</title>
                <path
                  d="M10.0003 9.16699C10.4606 9.16699 10.8337 8.7939 10.8337 8.33366C10.8337 7.87342 10.4606 7.50033 10.0003 7.50033C9.54009 7.50033 9.16699 7.87342 9.16699 8.33366C9.16699 8.7939 9.54009 9.16699 10.0003 9.16699Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M14.167 8.33366C14.167 8.7939 13.7939 9.16699 13.3337 9.16699C12.8734 9.16699 12.5003 8.7939 12.5003 8.33366C12.5003 7.87342 12.8734 7.50033 13.3337 7.50033C13.7939 7.50033 14.167 7.87342 14.167 8.33366Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M6.66699 9.16699C7.12723 9.16699 7.50033 8.7939 7.50033 8.33366C7.50033 7.87342 7.12723 7.50033 6.66699 7.50033C6.20676 7.50033 5.83366 7.87342 5.83366 8.33366C5.83366 8.7939 6.20676 9.16699 6.66699 9.16699Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2027 1.66699H7.79799C6.89483 1.66698 6.16637 1.66698 5.57647 1.71517C4.9691 1.7648 4.43561 1.86964 3.94203 2.12113C3.15802 2.5206 2.5206 3.15802 2.12113 3.94203C1.86964 4.43561 1.7648 4.9691 1.71517 5.57647C1.66698 6.16637 1.66698 6.89483 1.66699 7.79799V8.86933C1.66698 9.77249 1.66698 10.5009 1.71517 11.0908C1.7648 11.6982 1.86964 12.2317 2.12113 12.7253C2.5206 13.5093 3.15802 14.1467 3.94203 14.5462C4.4895 14.8251 5.10327 14.929 5.83366 14.9703V18.3337C5.83366 18.6707 6.03669 18.9746 6.34809 19.1036C6.65949 19.2325 7.01792 19.1612 7.25625 18.9229L11.1788 15.0003H12.2026C13.1058 15.0003 13.8343 15.0003 14.4242 14.9521C15.0316 14.9025 15.565 14.7977 16.0586 14.5462C16.8426 14.1467 17.48 13.5093 17.8795 12.7253C18.131 12.2317 18.2359 11.6982 18.2855 11.0908C18.3337 10.501 18.3337 9.77254 18.3337 8.86944V7.79797C18.3337 6.89486 18.3337 6.16635 18.2855 5.57647C18.2359 4.9691 18.131 4.43561 17.8795 3.94203C17.48 3.15802 16.8426 2.5206 16.0586 2.12113C15.565 1.86964 15.0316 1.7648 14.4242 1.71517C13.8343 1.66698 13.1058 1.66698 12.2027 1.66699ZM4.69868 3.60614C4.91815 3.49432 5.20789 3.41751 5.71219 3.37631C6.22623 3.33431 6.88649 3.33366 7.83366 3.33366H12.167C13.1142 3.33366 13.7744 3.33431 14.2885 3.37631C14.7928 3.41751 15.0825 3.49432 15.302 3.60614C15.7724 3.84583 16.1548 4.22828 16.3945 4.69868C16.5063 4.91815 16.5831 5.20789 16.6243 5.71219C16.6663 6.22623 16.667 6.88649 16.667 7.83366V8.83366C16.667 9.78083 16.6663 10.4411 16.6243 10.9551C16.5831 11.4594 16.5063 11.7492 16.3945 11.9686C16.1548 12.439 15.7724 12.8215 15.302 13.0612C15.0825 13.173 14.7928 13.2498 14.2885 13.291C13.7744 13.333 13.1142 13.3337 12.167 13.3337H10.8337C10.6126 13.3337 10.4007 13.4215 10.2444 13.5777L7.50033 16.3218V14.1623C7.50033 13.7065 7.13408 13.3353 6.67828 13.3291C5.53752 13.3136 5.04961 13.24 4.69868 13.0612C4.22828 12.8215 3.84583 12.439 3.60614 11.9686C3.49432 11.7492 3.41751 11.4594 3.37631 10.9551C3.33431 10.4411 3.33366 9.78083 3.33366 8.83366V7.83366C3.33366 6.88649 3.33431 6.22623 3.37631 5.71219C3.41751 5.20789 3.49432 4.91815 3.60614 4.69868C3.84583 4.22828 4.22828 3.84583 4.69868 3.60614Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <span className="font-semibold">{commentCount}</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <button type="button" className="cursor-pointer">
              <svg
                role="img"
                aria-labelledby="flip-icon-title"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <title id="flip-icon-title">Flip</title>
                <path
                  d="M12 4V20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4 12H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <span className="font-semibold">2</span>
          </div>
          <div>
            <button type="button" className="cursor-pointer">
              <svg
                role="img"
                aria-labelledby="share-icon-title"
                width="24"
                height="24"
                viewBox="0 0 20 20"
              >
                <title id="share-icon-title">Share</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.33333 11.667C3.79357 11.667 4.16667 12.0401 4.16667 12.5003V13.5003C4.16667 14.2141 4.16732 14.6994 4.19796 15.0745C4.22781 15.4398 4.28192 15.6266 4.34832 15.757C4.50811 16.0706 4.76308 16.3255 5.07668 16.4853C5.20702 16.5517 5.39385 16.6058 5.7592 16.6357C6.13427 16.6663 6.61952 16.667 7.33333 16.667H12.6667C13.3805 16.667 13.8657 16.6663 14.2408 16.6357C14.6061 16.6058 14.793 16.5517 14.9233 16.4853C15.2369 16.3255 15.4919 16.0706 15.6517 15.757C15.7181 15.6266 15.7722 15.4398 15.802 15.0745C15.8327 14.6994 15.8333 14.2141 15.8333 13.5003V12.5003C15.8333 12.0401 16.2064 11.667 16.6667 11.667C17.1269 11.667 17.5 12.0401 17.5 12.5003V13.5348C17.5 14.2056 17.5 14.7592 17.4632 15.2102C17.4249 15.6786 17.3428 16.1092 17.1367 16.5136C16.8171 17.1408 16.3072 17.6508 15.68 17.9703C15.2755 18.1764 14.8449 18.2586 14.3765 18.2968C13.9255 18.3337 13.3719 18.3337 12.7011 18.3337H7.29892C6.62811 18.3337 6.07448 18.3337 5.62348 18.2968C5.15506 18.2586 4.72448 18.1764 4.32003 17.9703C3.69283 17.6508 3.18289 17.1408 2.86331 16.5136C2.65724 16.1092 2.5751 15.6786 2.53683 15.2102C2.49998 14.7592 2.49999 14.2056 2.5 13.5347C2.5 13.5233 2.5 13.5118 2.5 13.5003V12.5003C2.5 12.0401 2.8731 11.667 3.33333 11.667Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 1.66699C10.4602 1.66699 10.8333 2.04009 10.8333 2.50033V12.5003C10.8333 12.9606 10.4602 13.3337 10 13.3337C9.53976 13.3337 9.16667 12.9606 9.16667 12.5003V2.50033C9.16667 2.04009 9.53976 1.66699 10 1.66699Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.41075 1.91107C9.73618 1.58563 10.2638 1.58563 10.5893 1.91107L13.0893 4.41107C13.4147 4.73651 13.4147 5.26414 13.0893 5.58958C12.7638 5.91502 12.2362 5.91502 11.9107 5.58958L10 3.67884L8.08926 5.58958C7.76382 5.91502 7.23618 5.91502 6.91075 5.58958C6.58531 5.26414 6.58531 4.73651 6.91075 4.41107L9.41075 1.91107Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </article>
    // </NavLink>
  );
}

export default Card;

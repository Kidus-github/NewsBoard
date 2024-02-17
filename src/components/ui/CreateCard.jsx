import { useNavigate } from "react-router-dom";

function CreateCard({ title, contentId }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between w-[200px] h-[200px] bg-[#ab1c1c] text-white rounded-md p-2">
      <span className="uppercase font-bold text-lg">{title}</span>
      <span className="flex justify-between">
        <svg
          aria-labelledby="analytics-icon-title"
          width="20"
          height="22"
          viewBox="0 0 18 18"
          version="1.1"
        >
          <title id="analytics-icon-title">Analytics</title>
          <g stroke="none" fill="#fff" fillRule="evenodd">
            <g transform="translate(-189.000000, -342.000000)">
              <g transform="translate(76.000000, 338.000000)">
                <g transform="translate(110.000000, 0.000000)">
                  <rect
                    x="18.1376527"
                    y="3.99674795"
                    width="2.09926047"
                    height="16"
                  ></rect>
                  <rect
                    x="15.2627395"
                    y="9.52769131"
                    width="2.09926047"
                    height="10.4755607"
                  ></rect>
                  <rect
                    x="12.3878264"
                    y="7.62277063"
                    width="2.09926047"
                    height="12.3804814"
                  ></rect>
                  <rect
                    x="9.51291317"
                    y="13.5631352"
                    width="2.09926047"
                    height="6.44011689"
                  ></rect>
                  <rect
                    x="6.63799999"
                    y="11.5572119"
                    width="2.09926047"
                    height="8.44604015"
                  ></rect>
                  <rect
                    x="3.7630868"
                    y="16.7831936"
                    width="2.09926047"
                    height="3.22005844"
                  ></rect>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <button
          className="cursor-pointer"
          onClick={() => {
            navigate(`/publish/${contentId}`);
          }}
        >
          <svg
            role="img"
            aria-labelledby="edit-icon-title"
            width="24"
            height="24"
            viewBox="0 0 22 22"
          >
            <title id="edit-icon-title">Edit</title>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g stroke="#fff">
                <g transform="translate(10.500000, 11.500000) rotate(-315.000000) translate(-10.500000, -11.500000) translate(8.000000, 1.000000)">
                  <path d="M1.00674696,-1.77635684e-15 C0.450735967,-1.77635684e-15 5.86197757e-14,0.443446793 5.86197757e-14,0.999751629 L5.86197757e-14,16.5789474 L2.54785156,20.4473684 L5.09570313,16.5789474 L5.09570313,0.999751629 C5.09570313,0.447604051 4.64349347,-1.77635684e-15 4.08895616,-1.77635684e-15 L1.00674696,-1.77635684e-15 Z"></path>
                  <path
                    d="M0.509570313,16.0263158 L4.58613281,16.0263158"
                    strokeLinecap="square"
                  ></path>
                  <path
                    d="M1.42464193,3.5 L4.5,3.5"
                    strokeLinecap="square"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </span>
    </div>
  );
}

export default CreateCard;

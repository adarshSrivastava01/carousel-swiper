const Box = ({ url, isActive, isPrev, isNext }) => {
  return (
    <>
      <style global jsx>
        {`
          .boxy {
            width: 400px;
            border: 3px solid red;
            padding: 5px;
          }

          .boxy img {
            height: 100%;
            width: 100%;
          }

          .isPrev {
            transform: scale(0.8) skew(7deg, 8deg);
            perspective: 1000px;
            transition: transform 0.5s;
          }

          .isNext {
            transform: scale(0.8) skew(-7deg, -8deg);
            transition: transform 0.5s;
          }

          .isActive {
          }
        `}
      </style>
      <div
        className={
          isActive ? "boxy isActive" : isPrev ? "boxy isPrev" : "boxy isNext"
        }
      >
        <img src={url} alt={url} />
      </div>
    </>
  );
};

export default Box;

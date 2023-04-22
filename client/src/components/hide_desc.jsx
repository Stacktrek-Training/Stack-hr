import React, { useState } from "react";

const ShowDescription = ({ text, maxWordCount }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const words = text.split(" ");
  const descriptionText = showMore
    ? words.join(" ")
    : words.slice(0, maxWordCount).join(" ");

  return (
    <>
      <p>
        {descriptionText}
        {words.length > maxWordCount && (
          <a className="cursor-pointer" onClick={toggleShowMore}>
            {showMore ? " (See Less)" : " (See More)"}
          </a>
        )}
      </p>
    </>
  );
};

export default ShowDescription;

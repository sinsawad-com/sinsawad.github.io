import React from 'react';

const LineQR = ({ lineId }) => {
  const lineUrl = `https://line.me/ti/p/~${lineId}`;
  return (
    <a href={lineUrl} className="line-qr">
      {/* <figure className="line-qr"> */}
      <img src={`/images/line-qr--${lineId}.jpg`} alt={`lineID: ${lineId}`} />
      {/* </figure> */}

    </a>
  );
};

export default LineQR;
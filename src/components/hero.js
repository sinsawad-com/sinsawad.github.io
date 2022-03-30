import React from 'react';

const Hero = ({ header, text, textOptional = "", className = "" }) => {

  const [isPreload, setIsPreload] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsPreload(false);
    }, 1000);
  }, []);

  return (
    <div className={`landing main-body ${className}`}>
      <div className={`page-wrapper ${isPreload ? 'preload' : ''} ${className}`}>
        <div className={`banner ${className}`}>
          <div className="inner">
            <h2>
              {header}
            </h2>
            {!className && (<p>{text}</p>)}
            {!className && textOptional && <p>{textOptional}</p>}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
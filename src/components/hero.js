import React from 'react';
import MainLayout from "../layouts/main-layout";


const Hero = ({ header, text, textOptional = "" }) => {

  const [isPreload, setIsPreload] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsPreload(false);
    }, 1000);
  }, []);

  return (
    <MainLayout>
      <div className="landing main-body">
        <div className={`page-wrapper ${isPreload ? 'preload' : ''}`}>
          <div className="banner">
            <div className="inner">
              <h2>
                {header}
              </h2>
              <p>{text}</p>
              {textOptional && <p>{textOptional}</p>}
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Hero;
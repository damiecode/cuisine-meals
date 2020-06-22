import React, { useState } from 'react';

const MealImage = ({ images, name }) => {
  const imageRef = React.createRef();
  const [img] = useState(images[0]);

  return (
    <aside className="col-sm-5 border-right">
      <article className="gallery-wrap">
        <div className="img-big-wrap">
          <div style={{ padding: '2rem' }}>
            <a href="#">
              <img
                ref={imageRef}
                src={img}
                alt={name}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </a>
          </div>
        </div>
      </article>
    </aside>
  );
};

export default MealImage;

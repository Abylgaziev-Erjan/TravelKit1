import React from 'react';
import './BrowseCategory.css';

const BrowseCategory = () => {
  return (
    <section className="browse-category">
      <h2>Browse by category</h2>
      <div className="categories">
        <div className="category">
          <p>City house</p>
        </div>
        <div className="category">
          <p>Hover style</p>
        </div>
        <div className="category">
          <p>City house</p>
        </div>
        <div className="category">
          <p>City house</p>
        </div>
      </div>
    </section>
  );
};

export default BrowseCategory;

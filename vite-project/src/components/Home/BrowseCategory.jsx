import React from 'react';
import './BrowseCategory.css';
import {motion} from  "framer-motion"

const BrowseCategory = () => {
  return (
    <section className="browse-category">
      <h2>Browse by category</h2>
      <div className="categories">
        <div className="category">
          <p>City house</p>
        </div>
        <motion.div  initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} className="category">
          <p>Hover style</p>
        </motion.div>
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

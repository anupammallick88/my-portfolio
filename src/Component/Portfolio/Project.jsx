import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';




const Project = ({ id, name, category, describe, link, tag }) => {
  const [expand, updateExpanded] = useState(false);

  return (
    <motion.div
      className="project"
      whileHover={{ scale: 1.05 }}
    >
      <h3>{name}</h3>
      <h4>{category}</h4>
      <p>{describe}</p>
      <div className='project-tags'><h5>-:: Tags ::-</h5> <p className='project-tags-all'>{tag}</p></div>
      <div className='project-btn'>
        <Link className='glow-on-hover btn btn-default btn-oval btn-xl' as={Link} to={link} onClick={() => updateExpanded(false)}>View  <FaArrowRight size={12} color='bisque' /></Link>
      </div>
    </motion.div>
  );
};

export default Project;

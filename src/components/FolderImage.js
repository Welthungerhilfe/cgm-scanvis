import React from 'react';
import folder from '../folder.svg';

const FolderImage = (props) => {
  return (
    <div>
        <img src={folder} className="FolderImage" alt="folder" />
    </div>
  );
};

export default FolderImage;

import React from 'react';
import folder from '../folder.svg';

const FolderImage = (props) => {
  return (
    <div>
        <img style={{width:'100%', height:'100px'}} src={folder} className="FolderImage" alt="folder" />
    </div>
  );
};

export default FolderImage;

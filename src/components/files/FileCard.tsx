import React from 'react';

interface FileCardProps {
  fileName: string;
  fileSize: number;
}

const FileCard: React.FC<FileCardProps> = ({ fileName, fileSize }) => {
  return (
    <div className="file-card">
      <div className="file-name">{fileName}</div>
      <div className="file-size">{fileSize} KB</div>
    </div>
  );
};

export default FileCard;

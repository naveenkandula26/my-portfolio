// File card component for displaying files
import React from 'react';

interface File {
  id: string;
  name: string;
  type: string;
  url: string;
  category: string;
}

interface FileCardProps {
  file: File;
}

const FileCard: React.FC<FileCardProps> = ({ file }) => {
  const isImage = file.type.startsWith('image/');
  const isVideo = file.type.startsWith('video/');
  const isDoc = file.type.includes('pdf') || file.type.includes('document');

  return (
    <div className="card">
      {isImage && <img src={file.url} alt={file.name} className="w-full h-32 object-cover rounded-t-xl" />}
      {isVideo && (
        <video controls className="w-full h-32 object-cover rounded-t-xl">
          <source src={file.url} type={file.type} />
        </video>
      )}
      {isDoc && (
        <iframe src={file.url} title={file.name} className="w-full h-32 rounded-t-xl"></iframe>
      )}
      <div className="p-2">
        <h3 className="text-lg font-semibold truncate}>{file.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400}>{file.category}</p>
      </div>
    </div>
  );
};

export default FileCard;

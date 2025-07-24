// File upload component
import React, { useState } from 'react';

interface FileUploadProps {
  onUpload: (file: File, category: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState<string>('Images');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      onUpload(file, category);
      setFile(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        >
          <option>Images</option>
          <option>Videos</option>
          <option>Docs</option>
        </select>
        <button type="submit" className="btn-primary" disabled={!file}>
          Upload
        </button>
      </div>
    </form>
  );
};

export default FileUpload;

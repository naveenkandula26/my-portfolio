// File dashboard component with Google Drive integration
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import FileCard from './FileCard';
import FileUpload from './FileUpload';

interface File {
  id: string;
  name: string;
  type: string;
  url: string;
  category: string;
}

const FileDashboard: React.FC = () => {
  const { user } = useAuth();
  const [files, setFiles] = useState<File[]>([]);
  const [category, setCategory] = useState<string>('Images');

  // Placeholder Google Apps Script URL
  const GOOGLE_APPS_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?category=${category}`, {
          headers: { Authorization: `Bearer ${user.accessToken}` },
        });
        const data = await response.json();
        setFiles(data.files);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };
    if (user) fetchFiles();
  }, [user, category]);

  const handleUpload = async (file: File, category: string) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('category', category);

    try {
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        body: formData,
        headers: { Authorization: `Bearer ${user.accessToken}` },
      });
      // Refresh files
      const response = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?category=${category}`);
      const data = await response.json();
      setFiles(data.files);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Files</h2>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        >
          <option>Images</option>
          <option>Videos</option>
          <option>Docs</option>
        </select>
      </div>
      <FileUpload onUpload={handleUpload} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {files.map((file) => (
          <FileCard key={file.id} file={file} />
        ))}
      </div>
    </div>
  );
};

export default FileDashboard;

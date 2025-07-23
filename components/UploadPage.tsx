import React, { useState, useCallback } from 'react';
import { Upload, File, Image, FileText, Trash2, Download, Eye } from 'lucide-react';

interface UploadPageProps {
  user: any;
}

interface UploadedFile {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
  uploadDate: string;
  category: 'image' | 'document' | 'resume';
}

export const UploadPage: React.FC<UploadPageProps> = ({ user }) => {
  const [dragActive, setDragActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([
    {
      id: '1',
      name: 'portfolio-screenshot.png',
      type: 'image/png',
      size: 2456789,
      url: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
      uploadDate: '2024-01-15',
      category: 'image'
    },
    {
      id: '2',
      name: 'alex-johnson-resume.pdf',
      type: 'application/pdf',
      size: 1234567,
      url: '#',
      uploadDate: '2024-01-10',
      category: 'resume'
    },
    {
      id: '3',
      name: 'project-documentation.docx',
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      size: 987654,
      url: '#',
      uploadDate: '2024-01-08',
      category: 'document'
    }
  ]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleFiles(files);
  };

  const handleFiles = async (files: File[]) => {
    setIsUploading(true);
    
    for (const file of files) {
      // Simulate upload
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newFile: UploadedFile = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: file.type,
        size: file.size,
        url: file.type.startsWith('image/') ? URL.createObjectURL(file) : '#',
        uploadDate: new Date().toISOString().split('T')[0],
        category: file.type.startsWith('image/') ? 'image' : 
                 file.name.toLowerCase().includes('resume') ? 'resume' : 'document'
      };
      
      setUploadedFiles(prev => [newFile, ...prev]);
    }
    
    setIsUploading(false);
  };

  const handleDelete = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type: string, category: string) => {
    if (type.startsWith('image/')) return <Image className="text-blue-500" size={24} />;
    if (type.includes('pdf')) return <FileText className="text-red-500" size={24} />;
    if (category === 'resume') return <FileText className="text-green-500" size={24} />;
    return <File className="text-gray-500" size={24} />;
  };

  const categories = [
    { id: 'all', label: 'All Files', count: uploadedFiles.length },
    { id: 'image', label: 'Images', count: uploadedFiles.filter(f => f.category === 'image').length },
    { id: 'document', label: 'Documents', count: uploadedFiles.filter(f => f.category === 'document').length },
    { id: 'resume', label: 'Resume', count: uploadedFiles.filter(f => f.category === 'resume').length }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const filteredFiles = selectedCategory === 'all' 
    ? uploadedFiles 
    : uploadedFiles.filter(file => file.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            File <span className="text-orange-500">Upload</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Upload and manage your files, images, and documents
          </p>
        </div>

        {/* Upload Area */}
        <div className="mb-12">
          <div
            className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
              dragActive
                ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                : 'border-gray-300 dark:border-gray-600 hover:border-orange-400 hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              multiple
              onChange={handleFileSelect}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              accept="image/*,.pdf,.doc,.docx"
            />
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                <Upload className="text-white" size={32} />
              </div>
              
              {isUploading ? (
                <div className="space-y-2">
                  <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">Uploading...</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Drop files here or click to upload
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Supports images (PNG, JPG, GIF), documents (PDF, DOC, DOCX)
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Maximum file size: 10MB
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`m-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-orange-500 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 shadow-md'
              }`}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Files Grid */}
        {filteredFiles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFiles.map((file) => (
              <div key={file.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    {getFileIcon(file.type, file.category)}
                    <div className="ml-3">
                      <h3 className="font-medium text-gray-900 dark:text-white truncate" title={file.name}>
                        {file.name.length > 20 ? `${file.name.substring(0, 20)}...` : file.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {formatFileSize(file.size)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(file.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                {/* Image Preview */}
                {file.category === 'image' && (
                  <div className="mb-4">
                    <img
                      src={file.url}
                      alt={file.name}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                )}

                {/* File Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Uploaded:</span>
                    <span className="text-gray-900 dark:text-white">{file.uploadDate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Category:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      file.category === 'image' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      file.category === 'resume' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                    }`}>
                      {file.category}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button className="flex-1 px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm flex items-center justify-center">
                    <Eye size={16} className="mr-1" />
                    View
                  </button>
                  <button className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-orange-500 hover:text-orange-500 transition-colors text-sm flex items-center justify-center">
                    <Download size={16} className="mr-1" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <File className="text-gray-400" size={40} />
            </div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
              No files in this category
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Upload some files to get started
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
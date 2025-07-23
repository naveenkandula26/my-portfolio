import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase';

interface UploadsProps {
  user: any;
}

const Uploads = ({ user }: UploadsProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploads, setUploads] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      const fetchUploads = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, `uploads/${user.uid}/files`));
          setUploads(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } catch (err) {
          setError('Failed to fetch uploads');
        }
      };
      fetchUploads();
    }
  }, [user]);

  const handleFileUpload = async () => {
    if (!file || !user) {
      setError('Please select a file and ensure you are logged in');
      return;
    }
    try {
      const storageRef = ref(storage, `uploads/${user.uid}/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      await addDoc(collection(db, `uploads/${user.uid}/files`), {
        name: file.name,
        url,
        timestamp: new Date(),
      });
      setFile(null);
      const querySnapshot = await getDocs(collection(db, `uploads/${user.uid}/files`));
      setUploads(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setError(null);
    } catch (err) {
      setError('Failed to upload file');
    }
  };

  return (
    <section id="uploads" className="min-h-screen bg-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto animate-slide-up">
        <h2 className="text-4xl font-bold mb-6">Uploads</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {user ? (
          <>
            <input
              type="file"
              accept="image/*,.pdf,.docx"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="mb-4 text-white"
            />
            <button
              onClick={handleFileUpload}
              className="bg-orange-accent text-white px-4 py-2 rounded hover:bg-orange-600"
              disabled={!file}
            >
              Upload
            </button>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {uploads.map(upload => (
                <div key={upload.id} className="bg-gray-700 p-4 rounded">
                  <p>{upload.name}</p>
                  <a href={upload.url} target="_blank" rel="noopener noreferrer" className="text-orange-accent hover:underline">
                    View
                  </a>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Please log in to upload and view files.</p>
        )}
      </div>
    </section>
  );
};

export default Uploads;
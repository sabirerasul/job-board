import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading2 from '../components/Loading2';

const JobDetailsPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setJob(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching job details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <Loading2 />
  );

  return (
    <div className="container">
      <h1>{job.title}</h1>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Type:</strong> {job.type}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <a href="/" className="btn btn-secondary mt-3">Back to Job Listings</a>
    </div>
  );
};

export default JobDetailsPage;

import React from 'react';
import JobForm from '../components/JobForm';
import Swal from 'sweetalert2';

const AddJobPage = () => {
  const handleAddJob = (job) => {
    fetch(process.env.REACT_APP_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errors) {
          Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: data.errors.map(error => error.msg).join(', '),
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Job Added',
            text: 'The job has been successfully added!',
          }).then(() => {
            window.location.href = '/';
          });
        }
      })
      .catch((error) => {
        console.error('Error adding job:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while adding the job.',
        });
      });
  };

  return (
    <div className="container">
      <h1>Add Job</h1>
      <JobForm onAddJob={handleAddJob} />
      <a href="/" className="btn btn-secondary mt-3">Back to Job Listings</a>
    </div>
  );
};

export default AddJobPage;

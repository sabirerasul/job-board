import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import DataTable from 'react-data-table-component';

const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      });
  }, []);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    {
      name: 'Title',
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: 'Company',
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: 'Location',
      selector: (row) => row.location,
      sortable: true,
    },
    {
      name: 'Type',
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <a href={`/job/${row._id}`} className="btn btn-secondary">
          View Details
        </a>
      ),
    },
  ];

  return (
    <div className="container">
      <h1>Job Listings</h1>
      <nav>
        <a href="/add-job" className="btn btn-primary mb-3">
          Add Job
        </a>
      </nav>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by title or location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading ? (
        <div className="d-flex justify-content-center">
          <ReactLoading type="spin" color="#007bff" height={80} width={80} />
        </div>
      ) : (
        <DataTable
          columns={columns}
          data={filteredJobs}
          pagination
          highlightOnHover
        />
      )}
    </div>
  );
};

export default HomePage;

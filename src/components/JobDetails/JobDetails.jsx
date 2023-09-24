import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams(); 
    const job = jobs.find(job => job.id === parseInt(id));
    return (
        <div>
            <div className='grid md:grid-cols-4 gap-4'>
                <div className='border md:col-span-3'>
                    <h2>Details coming here</h2>
                    <h2>Job Details of: {job.job_title}</h2>
                    <p>{job.company_name}</p>
                </div>
                <div className='border'>
                    <h2>Side things</h2>
                    <button className='btn btn-primary w-full'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
// src/pages/Departments.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Departments.css';

const departmentsData = {
  1: [
    { id: 101, name: 'Computer Science', description: 'Study of computers and computational systems', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400' },
    { id: 102, name: 'Business Administration', description: 'Management of business operations', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400' },
    { id: 103, name: 'Engineering', description: 'Application of scientific principles', image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400' }
  ],
  2: [
    { id: 201, name: 'Data Science', description: 'Extract insights from data', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400' },
    { id: 202, name: 'Artificial Intelligence', description: 'Machine learning and AI', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400' }
  ],
  3: [
    { id: 301, name: 'Physics', description: 'Study of matter and energy', image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400' },
    { id: 302, name: 'Chemistry', description: 'Study of substances and reactions', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400' }
  ],
  4: [
    { id: 401, name: 'History', description: 'Study of past events', image: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882?w=400' },
    { id: 402, name: 'Literature', description: 'Study of written works', image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400' }
  ],
  5: [
    { id: 501, name: 'Mathematics', description: 'Study of numbers and patterns', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400' }
  ],
  6: [
    { id: 601, name: 'Japanese Studies', description: 'Japanese language and culture', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400' }
  ]
};

function Departments() {
  const navigate = useNavigate();
  const [university, setUniversity] = useState(null);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const selected = localStorage.getItem('selectedUniversity');
    if (selected) {
      const uni = JSON.parse(selected);
      setUniversity(uni);
      setDepartments(departmentsData[uni.id] || []);
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleViewProducts = (departmentId, departmentName) => {
    localStorage.setItem('selectedDepartment', JSON.stringify({ id: departmentId, name: departmentName }));
    navigate('/products');
  };

  if (!university) return null;

  return (
    <div className="departments-page">
      <div className="departments-header">
        <h1>{university.name}</h1>
        <p>Choose a department to explore products</p>
      </div>

      <div className="departments-grid">
        {departments.map((dept, index) => (
          <div key={dept.id} className="department-card animate-fadeUp" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="card-image">
              <img src={dept.image} alt={dept.name} />
            </div>
            <div className="card-content">
              <h3>{dept.name}</h3>
              <p>{dept.description}</p>
              <button onClick={() => handleViewProducts(dept.id, dept.name)}>
                View Products →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Departments;
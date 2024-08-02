import React from 'react'
import ProjectCard from './ui/Card'

const project_details = [
    {
        to:"https://jain-industries.netlify.app",
        image:"/product-catalog.png",
        title:"Product Catalog",
        description:"A small scale React app, users can browse products, search products, can view a single product on a seperate page by clicking on it, pagination is applied"
    },

    {
        to:"https://fantastic-movies-watched.netlify.app",
        image:"/movie-list.png",
        title:"Movie list",
        description:"React application in which user can search for movies, view detailed info. about them, give them rating and add them to the watched list"
    },

    {
      to:"https://my-hotel-in-the-woods.netlify.app",
      image:"/wild-oasis-pic.png",
      title:"Hotel Management",
      description:"React app with Supabase as backend, Website for hotel staff to manage rooms, bookings, check ins and check outs. Login using Email:rishabh@gmail.com, Password:qwertyui"
  },
]

export default function Projects() {
  return (
    <div className='grid grid-cols-[1fr_1fr_1fr] gap-10 p-6'>
        { project_details.map(project => 
      <ProjectCard to={project.to} image={project.image} title={project.title} description={project.description} /> )
        }
    </div>
  )
}

import React from 'react'
import { Col } from 'react-bootstrap'
import './proyects.css'

const ProjectCard = ({title, description1, description2, img, link}) => {
  return (
    <Col sm={6} md={4}>
        <div className="proyecto-imagen">
            <img src={img} alt="" className='img-proyecto' />
            <div className="texto-proyecto">
                <h4>{title}</h4>
                <span>{description1}</span> <br />
                <span>{description2}</span> <br />
                <button> <a href={link} target='_blank' rel="noreferrer" >Visitar</a> </button>
                
            </div>
        </div>
    </Col>
  )
}

export default ProjectCard

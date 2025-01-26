import React from 'react'
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import { styles } from '../styles';
import {services} from "../constants";
import {fadeIn,textVariant} from '../utils/motion';
import {SectionWrapper} from "../hoc";
const ServiceCard = ({index, title, icon})=>{
  return (<Tilt className="xs:w-[250px] w-full">

    <motion.div variants={fadeIn("right","spring", 0.5* index,0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div options= {{
        max:45,
        scale:1,
        speed:450
      }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly'>
        <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
        <h3 className='text-white text-[20px] font-bold text-center'> {title} </h3>
      </div>
    </motion.div>
  </Tilt>);
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>

        <p className={styles.sectionSubText}> Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Accomplished Software Engineer with 4+ years of experience designing, developing, and optimizing high-performance applications across industries such as finance and technology. Expertise in architecting scalable microservices, enhancing database performance, and utilizing advanced technologies including Java, Spring Boot, Spring JPA, gRPC, Apache Kafka, Kubernetes, React, Python, and Django. Proficient in multi-threading, event-driven architectures, and leveraging cloud platforms like AWS to drive system reliability and performance. Strong command of system design, CI/CD pipelines, containerization, and improving software quality through test-driven development
       </motion.p>

      <div className='mt-20 gap-10 flex flex-wrap'>
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")
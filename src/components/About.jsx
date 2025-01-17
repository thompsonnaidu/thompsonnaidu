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
      Software Engineer with 4+ years of experience solving complex technical challenges and delivering efficient solutions. Skilled in designing
microservices using Java, Spring Boot, and React to enhance system performance and business processes. Proficient in cloud technologies,
distributed systems, and full-stack development, with a focus on fintech software and enterprise solution
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
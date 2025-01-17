import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies,skillsets } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import {motion} from 'framer-motion';



const SkillSetCard = ({
  index,
  names,
  title

}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
          <h3 className='mt-5 text-white font-bold text-[24px]'>{title}</h3>
        <div className=' cursor-pointer mt-4 flex flex-wrap gap-2'>
          {names.map((name,i) => (
            <p
              key={`${title}-${i}`}
              className={`text-[14px]  text-white border p-2 rounded-md hover:text-white `}
            >
              {name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Tech = () => {

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      <motion.div className="mt-10" variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>What I bring on table</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {skillsets.map((skill, index) => (
          <SkillSetCard key={`skill-${index}`} index={index} {...skill} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");

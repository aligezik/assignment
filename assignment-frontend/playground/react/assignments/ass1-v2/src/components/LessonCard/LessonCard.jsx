import React from 'react';
import LessonStyle from  "./lesson.module.css";

const LessonCard = ({lesson}) => {
  // const {id,image,name} = lesson;
  return (
          <div key={lesson.id} className={LessonStyle.lesson}>
            <div>
              <img
                src={lesson.image}
                className={LessonStyle.img}
                alt={lesson.name}
              />
            </div>
            <div className={LessonStyle.text}>
              <p className={LessonStyle.parag}>
                {" "}
                <span className={LessonStyle.span}>Lesson Name :</span>{" "}
                {lesson.name}
              </p>
              <p className={LessonStyle.parag}>
                {" "}
                <span className={LessonStyle.span}>Lesson Hour :</span>{" "}
                {lesson.age}
              </p>
            </div>
          </div>
        
  );
};

export default LessonCard;

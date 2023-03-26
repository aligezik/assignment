import React from "react";
import LessonCard from "../components/LessonCard/LessonCard";

const Lesson = ({ lessonData }) => {
  return (
    <>
      {lessonData?.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </>
  );
};

export default Lesson;

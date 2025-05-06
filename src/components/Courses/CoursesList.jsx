import  { useState } from 'react';
import AllCoures from './AllCoures';


const CoursesList = ({courses,loading}) => {


    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                courses.length > 0 ? (
                    <div className="flex justify-center gap-0.5 flex-wrap m-4 my-5 gap-6">
                        {courses.map((course) => (
                            <AllCoures course={course} key={course.id} />
                        ))}
                    </div>
                ) : (
                    <div>No courses available</div>
                )
            )}
        </div>
        
    );
};

export default CoursesList;
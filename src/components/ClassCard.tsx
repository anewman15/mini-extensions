import React from 'react'

const ClassCard = ({ cl, students }: any) => {
  return (
    <div key={cl.id} className="mx-4 my-6 border rounded-b-md">
      <h2 className="px-4 py-1 bg-green-600 text-2xl text-center text-gray-100 font-extrabold">{ cl.fields.Name }</h2>
      <hr />
      <div className="px-4 py-6 text-center flex flex-wrap justify-center items-center">
        { cl.fields.Students.map((student: string) => (
          <p key={student} className="px-4 py-1 my-1 mx-1 bg-green-500 text-gray-100 rounded-full">{ students[student] }</p>
        ))}
      </div>
    </div>
  );
};

export default ClassCard;

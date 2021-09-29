import React from 'react';
import { connect } from 'react-redux';
import ClassCard from '../components/ClassCard';

const Home = ({ user, classes, students}: any) => {
  return (
    <div className="container mx-auto my-6 p-4 w-10/12 md:w-8/12">
      <h2 className="text-green-800 text-center text-4xl font-extrabold">{ user.fields.Name }</h2>
      <div>
        { classes.map((cl: any) => (
          <ClassCard cl={cl} students={students} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
  classes: state.classes,
  students: state.students
});

export default connect(mapStateToProps)(Home);

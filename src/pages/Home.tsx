import React from 'react';
import { connect } from 'react-redux';
import ClassCard from '../components/ClassCard';
import saveUser from '../redux/actions/saveUser';
import saveClasses from '../redux/actions/saveClasses';
import saveStudents from '../redux/actions/saveStudents';

const Home = ({ user, saveUser, classes, saveClasses, students, saveStudents }: any) => {
  const logOut = () => {
    saveUser({});
    saveClasses([]);
    saveStudents({});
  }

  return (
    <div className="relative container mx-auto my-6 p-4 w-10/12 md:w-8/12">
      <div className="absolute top-0 right-8">
        <button
          className="bg-red-400 my-2 px-3 py-1 rounded-md text-gray-100"
          type="button"
          onClick={logOut}
        >
          Log out
        </button>
      </div>
      <h2 className="text-green-800 text-center text-4xl font-extrabold">{ user.fields && user.fields.Name }</h2>
      <div>
        { classes.length && classes.map((cl: any) => (
          <ClassCard key={cl.id} cl={cl} students={students} />
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

export default connect(mapStateToProps, { saveUser, saveClasses, saveStudents })(Home);

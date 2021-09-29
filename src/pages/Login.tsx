import { useState } from 'react';
import { connect } from 'react-redux';
import { Record, Records, FieldSet } from 'airtable';
import { allStudentsResponse, getClasses, getUser } from '../sandbox/airtable';
import createStudentsArray from '../utils/createStudentsArray';
import createStudentsHash from '../utils/createStudentsHash';
import filterString from '../utils/filterString';
import saveUser from '../redux/actions/saveUser';
import saveClasses from '../redux/actions/saveClasses';
import saveStudents from '../redux/actions/saveStudents';
import { useHistory } from 'react-router';
import ErrorBox from '../components/ErrorBox';

const Login = ({ user, saveUser, classes, saveClasses, students, saveStudents }: any) => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory();

  const handleLogin: any = async (event: any): Promise<void> => {
    event.preventDefault();
    setLoading(true);

    let classesFilterString = ''
    let studentsFilterString = ''

    try {
      let userResponse = await getUser(username);
      let userData: any = null;
      if (!userResponse.length) {
        throw new Error('User Not Found.');
      } else {
        userData = userResponse[0];
        saveUser(userData);
        console.log(user)
      };

      classesFilterString = filterString(userData.fields.Classes);

      let classesTableResponse = await getClasses(classesFilterString);
      saveClasses(classesTableResponse);

      const studentIds = createStudentsArray(classesTableResponse);
      studentsFilterString = filterString(studentIds);

      let allPeers: Records<FieldSet> = await allStudentsResponse(studentsFilterString)
      const studentsHash = createStudentsHash(allPeers);
      console.log(studentsHash);
      saveStudents(studentsHash);

      setLoading(false);
      setError(null);
      history.push('/');

    } catch (e: any) {
      setError(e.message);
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto my-4">
      <form onSubmit={handleLogin} className="mx-4">
        <label>
          <div className="text-xl font-bold my-2">Enter name</div>
          <input className="block border rounded-md py-1 px-2" type="text" onChange={(event) => setUsername(event.target.value)}/>
        </label>
        <button className="bg-green-700 py-1 px-4 my-5 border rounded-md text-gray-100" type="submit">{ loading ? 'Loading...' : 'Log in' }</button>
      </form>
      { error && <ErrorBox error={error} /> }
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
  classes: state.classes,
  students: state.students
});

export default connect(mapStateToProps, { saveUser, saveClasses, saveStudents })(Login);

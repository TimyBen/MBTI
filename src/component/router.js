// Routes.js
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import QuestionPage from './QuestionPage';
import PersonalityTypeDetails from './PersonalityTypesPage';

const AppRoutes = () => {
 return (
    <Routes>
      <Route className='bg-rose-500' path="/" element={<MainPage />} />
      <Route className='bg-rose-500' path='/questions' element={<QuestionPage />} />
      <Route className='bg-rose-500' path="/personality-types" element={<PersonalityTypeDetails />} />
    </Routes>
 );
};

export default AppRoutes;
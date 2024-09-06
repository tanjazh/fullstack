import PropTypes from 'prop-types';

export const Header = ({ course }) => {
    console.log(course);
    return <h1>{course}</h1>
};
Header.propTypes = {
    course: PropTypes.string.isRequired,
};
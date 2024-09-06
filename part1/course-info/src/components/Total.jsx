import PropTypes from 'prop-types';

export const Total = ({ parts }) => {
    let totalExercises = 0;
    parts.forEach(part => {
        totalExercises += part.exercises;
    });

    return (
        <p>
            Number of exercises {totalExercises}
        </p>
    )
};
Total.propTypes = {
    parts: PropTypes.array.isRequired
};
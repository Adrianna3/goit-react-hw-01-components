import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="styles.statistics">
      <h2 className="styles.title">{title}</h2>

      <ul className="styles.stat-list">
        {stats.map(stats => (
          <li key={stats.id} className="styles.item">
            <span className="styles.label">{stats.label}</span>
            <span className="styles.percentage">{stats.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

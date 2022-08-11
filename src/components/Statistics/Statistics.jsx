import PropTypes from 'prop-types';
import styles from './Statistic.module.css';
import { getRandomColor } from 'js/getRandomColor.js';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList} >
        {stats.map(stats => (
          <li key={stats.id} className={styles.item} style={{
            backgroundColor: `${getRandomColor()}`,
             width: `calc(100% / ${stats.length})`,
     
    }}>
            <span className={styles.label}>{stats.label}</span>
            <span className={styles.percentage}>{stats.percentage}%</span>
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

import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, XAxis, YAxis, CartesianGrid,
  Tooltip, Bar, ResponsiveContainer, Cell } from 'recharts';
import Paginator from '../../core/Paginator.jsx';
import styles from './Graph.scss';

const COLORS = ['rgba(50, 100, 145, 0.8)', 'rgba(94, 55, 117, 0.8)'];

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }
  render() {
    const { page } = this.state;
    const { children, data, width } = this.props;
    const pagedData = data.slice((page - 1) * 25, page * 25);
    return (
      <div className={styles.container}>
        {children}
        {data.length !== 0 ?
          <div className={styles.graph}>
            <ResponsiveContainer width={width} height={'100%'}>
              <BarChart
                width={730}
                height={250}
                data={pagedData}
                margin={{ top: 0, right: 40, bottom: 60, left: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="Group"
                  tick={{ angle: 45, textAnchor: 'start', dominantBaseline: 'ideographic' }}
                  interval={0}
                />
                <YAxis
                  domain={[
                    min => (Math.round((min - (min / 50)))),
                    max => (Math.round((max + (max / 50)))),
                  ]}
                />
                <Tooltip
                  cursor={{ fill: 'rgba(0, 0, 0, 0.2)' }}
                />
                <Bar dataKey="Sold" fill="#82ca9d" key={pagedData[0]}>
                  {pagedData.map((entry) => {
                    const color = entry.Group.includes('Brand') ? COLORS[0] : COLORS[1];
                    return <Cell key={entry.Group} fill={color} />;
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <Paginator
              changePage={p => this.setState({ page: p })}
              page={page}
              totalPages={Math.ceil(data.length / 25)}
            />
          </div>
          :
          <div className={styles.center}>
            No Results
          </div>
        }
      </div>
    );
  }
}

Graph.defaultProps = {
  children: null,
};

Graph.propTypes = {
  children: PropTypes.node,
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
};

export default Graph;

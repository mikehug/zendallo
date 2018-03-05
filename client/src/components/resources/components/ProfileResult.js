import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import ProfileTabs from './ProfileTabs';

const styles = {
  title: {
    paddingTop: 14,
  },
};

const ProfileResult = (props) => {
  const data = [
    { name: 'Driver', value: props.result[0] },
    { name: 'Pioneer', value: props.result[1] },
    { name: 'Relater ', value: props.result[2] },
    { name: 'Analyzer', value: props.result[3] },
  ];
  const colors = ['#FF8042', '#FFBB28', '#00C49F', '#0088FE'];
  const legendStyle = { 'font-family': 'Roboto' };
  return (
    // <ResponsiveContainer width={700} height="80%">
    <Grid container align="center" direction="column">
      <Typography variant="title" className={props.classes.title}>
        Behavioural Profile
      </Typography>
      <Grid item>
        <PieChart width={360} height={350}>
          <Tooltip />
          <Legend
            verticalAlign="top"
            layout="horizontal"
            height={36}
            align="center"
            dataKey="name"
            iconvariant="circle"
            wrapperStyle={legendStyle}
          />
          <Pie startAngle={360} endAngle={0} data={data} label dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${entry.name}`} fill={colors[index]} />
            ))}
          </Pie>
        </PieChart>
        <ProfileTabs />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ProfileResult);

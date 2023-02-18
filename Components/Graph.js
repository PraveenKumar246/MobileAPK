
import React from 'react';
import {View,Text} from 'react-native';
import { VictoryArea, VictoryChart, VictoryTheme } from "victory-native";
import styles from '../Styles';

const data = [
    { year: '2018', savings: 3000 },
    { year: '2019', savings: 6500 },
    { year: '2020', savings: 4250 },
    { year: '2021', savings: 8000 },
    
   ];
 function Graph (){
     return(
    <View style={styles.GraphView}>
        <Text style={styles.GraphText}>My Savings</Text>
      <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryArea interpolation="natural" style={{ data: { fill: "#87BCCE" } }} data={data} x="year" y="savings" />
      </VictoryChart>
    </View>
     )
     }
export default Graph;
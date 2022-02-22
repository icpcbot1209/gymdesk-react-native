import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-chart-kit";

const data = {
  labels: ['1','2','3','4','5','6'],
  datasets: [{data: [2, 5, 2, 4, 0, 3]}],
};

export const Attendance = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.mainTextLabel}>Attendance</Text>
        <BarChart
          style={{
            marginVertical: 8,
          }}
          data={data}
          width={Dimensions.get('window').width - 32}
          height={180}
          yAxisLabel=""
          yAxisSuffix="h"
          chartConfig={{
            backgroundColor: 'white',
            backgroundGradientFrom: '#F3F4F7',
            backgroundGradientTo: '#F3F4F7',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

            // propsForDots: {
            //   r: '6',
            //   strokeWidth: '2',
            //   stroke: 'black',
            // },
          }}
          //   verticalLabelRotation={30}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  mainTextLabel: {
    color: '#334644',
    fontSize: 18,
    fontWeight: '700',
  },
  content: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  buttonStyle: {
    display: 'flex',
    justifyContent: 'space-evenly',
    height: 80,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    marginRight: 15,
  },
});
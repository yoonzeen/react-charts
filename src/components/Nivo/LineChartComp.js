import { ResponsiveLine } from '@nivo/line'


const LineChartComp = () => {
    const data = [
        {
          id: "japan",
          color: "hsl(296, 70%, 50%)",
          data: [
            {
              "x": "plane",
              "y": 288
            },
            {
              "x": "helicopter",
              "y": 102
            },
            {
              "x": "boat",
              "y": 274
            },
            {
              "x": "train",
              "y": 177
            },
            {
              "x": "subway",
              "y": 143
            },
            {
              "x": "bus",
              "y": 200
            },
            {
              "x": "car",
              "y": 246
            },
            {
              "x": "moto",
              "y": 190
            },
            {
              "x": "bicycle",
              "y": 223
            },
            {
              "x": "horse",
              "y": 127
            },
            {
              "x": "skateboard",
              "y": 138
            },
            {
              "x": "others",
              "y": 228
            }
          ]
        },
        {
          id: "france",
          color: "hsl(32, 70%, 50%)",
          data: [
            {
              "x": "plane",
              "y": 100
            },
            {
              "x": "helicopter",
              "y": 67
            },
            {
              "x": "boat",
              "y": 131
            },
            {
              "x": "train",
              "y": 69
            },
            {
              "x": "subway",
              "y": 243
            },
            {
              "x": "bus",
              "y": 269
            },
            {
              "x": "car",
              "y": 240
            },
            {
              "x": "moto",
              "y": 272
            },
            {
              "x": "bicycle",
              "y": 192
            },
            {
              "x": "horse",
              "y": 279
            },
            {
              "x": "skateboard",
              "y": 152
            },
            {
              "x": "others",
              "y": 49
            }
          ]
        },
        {
          id: "us",
          color: "hsl(255, 70%, 50%)",
          data: [
            {
              "x": "plane",
              "y": 14
            },
            {
              "x": "helicopter",
              "y": 6
            },
            {
              "x": "boat",
              "y": 102
            },
            {
              "x": "train",
              "y": 279
            },
            {
              "x": "subway",
              "y": 250
            },
            {
              "x": "bus",
              "y": 178
            },
            {
              "x": "car",
              "y": 96
            },
            {
              "x": "moto",
              "y": 128
            },
            {
              "x": "bicycle",
              "y": 187
            },
            {
              "x": "horse",
              "y": 295
            },
            {
              "x": "skateboard",
              "y": 60
            },
            {
              "x": "others",
              "y": 269
            }
          ]
        },
        {
          id: "germany",
          color: "hsl(277, 70%, 50%)",
          data: [
            {
              "x": "plane",
              "y": 136
            },
            {
              "x": "helicopter",
              "y": 280
            },
            {
              "x": "boat",
              "y": 26
            },
            {
              "x": "train",
              "y": 266
            },
            {
              "x": "subway",
              "y": 138
            },
            {
              "x": "bus",
              "y": 10
            },
            {
              "x": "car",
              "y": 121
            },
            {
              "x": "moto",
              "y": 161
            },
            {
              "x": "bicycle",
              "y": 112
            },
            {
              "x": "horse",
              "y": 53
            },
            {
              "x": "skateboard",
              "y": 65
            },
            {
              "x": "others",
              "y": 165
            }
          ]
        },
        {
          id: "norway",
          color: "hsl(329, 70%, 50%)",
          data: [
            {
              "x": "plane",
              "y": 106
            },
            {
              "x": "helicopter",
              "y": 12
            },
            {
              "x": "boat",
              "y": 16
            },
            {
              "x": "train",
              "y": 254
            },
            {
              "x": "subway",
              "y": 242
            },
            {
              "x": "bus",
              "y": 79
            },
            {
              "x": "car",
              "y": 178
            },
            {
              "x": "moto",
              "y": 99
            },
            {
              "x": "bicycle",
              "y": 229
            },
            {
              "x": "horse",
              "y": 182
            },
            {
              "x": "skateboard",
              "y": 29
            },
            {
              "x": "others",
              "y": 214
            }
          ]
        }
      ];
    return  (
      <div style={{height:'500px'}}>
        <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
      </div>
    )
};
export default LineChartComp;
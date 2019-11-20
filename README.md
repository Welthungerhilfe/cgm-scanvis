# cgm-scanvis

Tool for the visualization of multi-dimensional scan data of Child Growth Monitor

# Running the app

```
npm install
npm run dev
```

## To see the 3D visualization
We still need to find a proper way to store the data so that it's easy to access and secure. For now, the team came up with a very hacky way to do this as a POC. 

To see the visualization, first uncomment all code in `src/components/Visualize.js`.
The sample pcd file is imported [here](https://github.com/Welthungerhilfe/cgm-scanvis/blob/master/src/components/Visualize.js#L6).

Make sure the following pcd exists.
`src/data/VisualizeHelpers/data/MH_WHH_0294/measurements/1542604024995/pc/pc_MH_WHH_0294_1542604024995_107_021.pcd` 

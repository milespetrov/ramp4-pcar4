import{u as s}from"./workerHelper-B79FfPgY.js";import{f as l,u as c,p as u,E as d,d as f,m as p}from"./edgeProcessing-XfLGRfXC.js";class g{async extract(e){const t=o(e),i=l(t),r=[t.data.buffer];return{result:h(i,r),transferList:r}}async extractComponentsEdgeLocations(e){const t=o(e),i=c(t.data,t.skipDeduplicate,t.indices,t.indicesLength),r=u(i,w),a=[];return{result:s(r.regular.instancesData,a),transferList:a}}async extractEdgeLocations(e){const t=o(e),i=c(t.data,t.skipDeduplicate,t.indices,t.indicesLength),r=u(i,D),a=[];return{result:s(r.regular.instancesData,a),transferList:a}}}function o(n){return{data:d.createView(n.dataBuffer),indices:n.indicesType==="Uint32Array"?new Uint32Array(n.indices):n.indicesType==="Uint16Array"?new Uint16Array(n.indices):n.indices,indicesLength:n.indicesLength,writerSettings:n.writerSettings,skipDeduplicate:n.skipDeduplicate}}function h(n,e){return e.push(n.regular.lodInfo.lengths.buffer),e.push(n.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:s(n.regular.instancesData,e),lodInfo:{lengths:n.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:s(n.silhouette.instancesData,e),lodInfo:{lengths:n.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:n.averageEdgeLength}}class L{allocate(e){return f.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,i){e.position0.setVec(t,i.position0),e.position1.setVec(t,i.position1)}}class m{allocate(e){return p.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,i){e.position0.setVec(t,i.position0),e.position1.setVec(t,i.position1),e.componentIndex.set(t,i.componentIndex)}}const D=new L,w=new m;export{g as default};

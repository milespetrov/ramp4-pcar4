import{aw as p}from"./main-CT4A7-UF.js";import{f as n}from"./utils-UnPaZJGi.js";import{d as e}from"./queryTopFeatures-BdBE2fUk.js";import s from"./TopFeaturesQuery-B4aYkdXi.js";import"./preload-helper-ExcqyqRp.js";import"./normalizeUtils-BEHHi9BD.js";import"./normalizeUtilsCommon-CS52MZDG.js";import"./utils-CeCQ-d9-.js";import"./query-BNDd6w6s.js";import"./pbfQueryUtils-Cp7qoGm7.js";import"./pbf-C_wzh1XB.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-CBCu9X4b.js";import"./projection-CzwB5LLH.js";import"./projectBuffer-BExSDksD.js";import"./TimeExtent-DHHZvZSS.js";async function g(m,r,i){const a=n(m),o=await e(a,s.from(r),{...i}),t=o.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:o.data.count,extent:null}:{count:o.data.count,extent:p.fromJSON(t)}}export{g as executeForTopExtents};

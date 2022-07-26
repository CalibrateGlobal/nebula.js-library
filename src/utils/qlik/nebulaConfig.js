// https://qlik.dev/tutorials/build-a-simple-mashup-using-nebulajs
import { embed } from '@nebula.js/stardust';
import barChart from '@nebula.js/sn-bar-chart';
import pieChart from '@nebula.js/sn-pie-chart';
import lineChart from '@nebula.js/sn-line-chart';
import sankeyChart from '@nebula.js/sn-sankey-chart';
import funneChart from '@nebula.js/sn-funnel-chart';
import mekkoChart from '@nebula.js/sn-mekko-chart';
import kpi from '@nebula.js/sn-kpi';
import scatterPlot from '@nebula.js/sn-scatter-plot';
import bulletChart from '@nebula.js/sn-bullet-chart';
import button from '@nebula.js/sn-action-button';
import boxplot from '@nebula.js/sn-boxplot';
import comboChart from '@nebula.js/sn-combo-chart';
import distplot from '@nebula.js/sn-distributionplot';
import gridChart from '@nebula.js/sn-grid-chart';
import histogram from '@nebula.js/sn-histogram';
import orgChart from '@nebula.js/sn-org-chart';
import pivotTable from '@nebula.js/sn-pivot-table';
import table from '@nebula.js/sn-table';
import waterfall from '@nebula.js/sn-waterfall';

// Register the relevant charts with Nebula.
const nebulaConfig = embed.createConfiguration({
  context: {
    theme: 'light',
    language: 'en-US',
    constraints: {
      active: false,
      passive: false,
      select: false,
    },
  },
  types: [
    {
      name: 'barchart', // Name must be all lowercase, barChart breaks it
      load: () => Promise.resolve(barChart),
    },
    {
      name: 'piechart',
      load: () => Promise.resolve(pieChart),
    },
    {
      name: 'linechart',
      load: () => Promise.resolve(lineChart),
    },
    {
      name: 'sankeychart',
      load: () => Promise.resolve(sankeyChart),
    },
    {
      name: 'funnechart',
      load: () => Promise.resolve(funneChart),
    },
    {
      name: 'mekkochart',
      load: () => Promise.resolve(mekkoChart),
    },
    {
      name: 'kpi',
      load: () => Promise.resolve(kpi),
    },
    {
      name: 'scatterplot',
      load: () => Promise.resolve(scatterPlot),
    },
    {
      name: 'bulletchart',
      load: () => Promise.resolve(bulletChart),
    },
    {
      name: 'button',
      load: () => Promise.resolve(button),
    },
    {
      name: 'boxplot',
      load: () => Promise.resolve(boxplot),
    },
    {
      name: 'combochart',
      load: () => Promise.resolve(comboChart),
    },
    {
      name: 'distributionplot',
      load: () => Promise.resolve(distplot),
    },
    {
      name: 'sn-grid-chart',
      load: () => Promise.resolve(gridChart),
    },
    {
      name: 'histogram',
      load: () => Promise.resolve(histogram),
    },
    {
      name: 'orgchart',
      load: () => Promise.resolve(orgChart),
    },
    {
      name: 'pivot-table',
      load: () => Promise.resolve(pivotTable),
    },
    {
      name: 'table',
      load: () => Promise.resolve(table),
    },
    {
      name: 'waterfall',
      load: () => Promise.resolve(waterfall),
    },
  ],
});

export default nebulaConfig;

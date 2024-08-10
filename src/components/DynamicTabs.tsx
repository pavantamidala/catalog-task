import React from "react";
import { Box, Tabs } from "@radix-ui/themes";
import TimeSeriesChart from "./TimeSeriesChart";

const tabs = [
  {
    value: "summary",
    label: "Summary",
    content: "Summary",
  },
  {
    value: "chart",
    label: "Chart",
    content: (
      <>
        <TimeSeriesChart />,
      </>
    ),
  },
  {
    value: "statistics",
    label: "Statistics",
    content: "Edit Statistics ",
  },
  {
    value: "analysis",
    label: "Analysis",
    content: "Edit profile ",
  },
  {
    value: "settings",
    label: "Settings",
    content: "Edit your settings ",
  },
];

const DynamicTabs = () => (
  <Tabs.Root defaultValue="chart">
    <Tabs.List>
      {tabs.map((tab) => (
        <Tabs.Trigger key={tab.value} value={tab.value}>
          {tab.label}
        </Tabs.Trigger>
      ))}
    </Tabs.List>
    <Box pt="3">
      {tabs.map((tab) => (
        <Tabs.Content key={tab.value} value={tab.value}>
          {tab.content}
        </Tabs.Content>
      ))}
    </Box>
  </Tabs.Root>
);

export default DynamicTabs;

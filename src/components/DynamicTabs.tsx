import React from "react";
import { Box, Button, Flex, Tabs } from "@radix-ui/themes";
import TimeSeriesChart from "./TimeSeriesChart";
import { EnterFullScreenIcon, PlusCircledIcon } from "@radix-ui/react-icons";

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
        <Flex
          gap={"2"}
          style={{ position: "relative", top: "34px", zIndex: 1 }}
        >
          <Button variant="soft">
            <EnterFullScreenIcon /> Fullscreen
          </Button>
          <Button variant="soft">
            <PlusCircledIcon /> Compare
          </Button>
        </Flex>
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

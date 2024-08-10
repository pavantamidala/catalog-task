import { Box, Flex, Text } from "@radix-ui/themes";
import "./App.css";
import DynamicTabs from "./components/DynamicTabs";
const price = {
  value: "63,179.71",
  absoluteIncrease: "2161.42",
  percentageIncrease: "3.54",
};
function App() {
  return (
    <>
      <Flex direction={"column"} gap={"4"}>
        <Flex direction={"column"} gap={"2"} width={"fit-content"}>
          <Flex gap={"1"}>
            <Box>
              <Text size={"8"} weight={"bold"}>
                {price.value}
              </Text>
            </Box>
            <Box>
              <Text weight={"bold"} size={"1"} color={"gray"}>
                USD
              </Text>
            </Box>
          </Flex>
          <Text align={"left"} size={"2"} color={"green"} weight={"medium"}>
            +{price.absoluteIncrease}({price.percentageIncrease})%{" "}
          </Text>
        </Flex>
        <DynamicTabs></DynamicTabs>
      </Flex>
    </>
  );
}

export default App;

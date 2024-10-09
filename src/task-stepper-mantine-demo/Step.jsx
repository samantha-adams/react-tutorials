import { Stack, Text, Title, Image, Flex } from '@mantine/core';

const Step = ({ currentStep }) => (
  <Stack gap="xl">
    <Title order={1}>{currentStep.stepName}</Title>
    <Flex gap="md">
      <Text size="xl">{currentStep.stepDetails}</Text>
      {currentStep.stepImageSrc && (
        <Image src={currentStep.stepImageSrc} w={400} />
      )}
    </Flex>
  </Stack>
);

export default Step;
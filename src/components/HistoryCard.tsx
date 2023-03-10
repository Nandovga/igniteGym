import {Heading, HStack, Text, VStack} from "native-base";

export function HistoryCard() {
    return (
        <HStack w="full"
                bg="gray.600"
                rounded="md"
                alignItems="center"
                justifyContent="space-between"
                py={4}
                px={5}
                mb={3}>
            <VStack mr={5} flex={1}>
                <Heading color="white"
                         fontSize="md"
                         fontFamily="heading"
                         numberOfLines={1}
                         textTransform="capitalize">Costas</Heading>
                <Text color="gray.100"
                      numberOfLines={1}
                      fontSize="lg">Puxada frontal</Text>
            </VStack>
            <Text color="gray.300"
                  fontSize="md">08:56</Text>
        </HStack>
    );
}

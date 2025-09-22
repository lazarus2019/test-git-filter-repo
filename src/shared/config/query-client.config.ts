import { QueryClient } from "@tanstack/react-query";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const FIVE_MIN = MINUTE * 5;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: FIVE_MIN,
    },
  },
});

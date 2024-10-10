import { useQuery } from "@tanstack/react-query";

const TanStackQeuryComponent = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      if (!response.ok) {
        throw new Error("Fail Fetch!");
      }
      return response.json();
    },
  });
  if (isPending) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return <p>{data.id}</p>;
};

export default TanStackQeuryComponent;

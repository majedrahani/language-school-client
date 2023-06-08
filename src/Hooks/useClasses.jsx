
import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch('classes.json');
            return res.json();
            
        }
    })
    // console.log(classes);
    return [classes, loading, refetch]
};

export default useClasses;